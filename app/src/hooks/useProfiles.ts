/**
 * useProfiles — V1.3 Profile-Layer
 *
 * Verwaltet bis zu 4 Lernprofile mit eigenem GameState pro Profil.
 * Speicherung: localStorage 'djs_profiles_v1' (Liste + activeId).
 * Jedes Profil hat eigene gameState-Persistenz unter Key `djs_gamestate_v1__<id>`.
 *
 * API:
 *   const { profiles, active, create, switchTo, rename, remove,
 *           setDifficulty, hasProfiles } = useProfiles();
 */
import { useCallback, useEffect, useState } from 'react';
import type { Difficulty, ProfileStore, UserProfile } from '../types';
import { MAX_PROFILES, PROFILE_EMOJIS } from '../types';

const STORAGE_KEY = 'djs_profiles_v1';

function load(): ProfileStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { profiles: [], activeId: null };
}

function save(store: ProfileStore) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch {}
}

function makeId(): string {
  return `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}

export function useProfiles() {
  const [store, setStore] = useState<ProfileStore>(load);

  // Persist on every change
  useEffect(() => { save(store); }, [store]);

  const create = useCallback((name: string, emoji?: string, difficulty: Difficulty = 'beginner'): UserProfile | null => {
    if (store.profiles.length >= MAX_PROFILES) return null;
    const used = new Set(store.profiles.map(p => p.emoji));
    const pick = emoji ?? PROFILE_EMOJIS.find(e => !used.has(e)) ?? '🦊';
    const now = new Date().toISOString();
    const profile: UserProfile = {
      id: makeId(),
      name: name.trim() || 'Neues Profil',
      emoji: pick,
      createdAt: now,
      lastActiveAt: now,
      difficulty,
    };
    setStore(prev => ({
      profiles: [...prev.profiles, profile],
      activeId: profile.id,
    }));
    return profile;
  }, [store.profiles.length]);

  const switchTo = useCallback((id: string) => {
    setStore(prev => {
      const exists = prev.profiles.some(p => p.id === id);
      if (!exists) return prev;
      const now = new Date().toISOString();
      return {
        ...prev,
        activeId: id,
        profiles: prev.profiles.map(p =>
          p.id === id ? { ...p, lastActiveAt: now } : p
        ),
      };
    });
  }, []);

  const rename = useCallback((id: string, name: string) => {
    setStore(prev => ({
      ...prev,
      profiles: prev.profiles.map(p => p.id === id ? { ...p, name: name.trim() || p.name } : p),
    }));
  }, []);

  const setDifficulty = useCallback((id: string, difficulty: Difficulty) => {
    setStore(prev => ({
      ...prev,
      profiles: prev.profiles.map(p => p.id === id ? { ...p, difficulty } : p),
    }));
  }, []);

  const remove = useCallback((id: string) => {
    setStore(prev => {
      const remaining = prev.profiles.filter(p => p.id !== id);
      const newActive = prev.activeId === id ? (remaining[0]?.id ?? null) : prev.activeId;
      // Also clear the gameState namespace for this profile
      try { localStorage.removeItem(`djs_gamestate_v1__${id}`); } catch {}
      return { profiles: remaining, activeId: newActive };
    });
  }, []);

  const active = store.profiles.find(p => p.id === store.activeId) ?? null;
  const hasProfiles = store.profiles.length > 0;

  return {
    profiles: store.profiles,
    active,
    activeId: store.activeId,
    hasProfiles,
    canCreateMore: store.profiles.length < MAX_PROFILES,
    create,
    switchTo,
    rename,
    setDifficulty,
    remove,
  };
}
