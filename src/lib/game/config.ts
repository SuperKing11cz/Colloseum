/**
 * Every number of the game layer in one place (rules in docs/GAME.md). A first pass to tune with
 * real use. The database repeats the caps as check constraints (supabase/updates/2026-11-13-game.sql).
 */

/** A workout earns anything only with at least this many done working sets. */
export const QUALIFYING_SETS = 3;

export const XP = {
  workout: 100,
  verified: 25,
  incomplete: 12,
  pr: 30,
  maxPrs: 3,
  streakWeek: 10,
  maxStreakWeeks: 5,
  together: 20,
  dailyCap: 300,
} as const;

export const LAURELS = {
  attendance: 10,
  verified: 5,
  incomplete: 2,
  /** Progress laurels per workout: gain % × level factor, at least 1 per PR, at most this. */
  maxProgress: 10,
  /** Strength: DOTS total ÷ this, at most maxStrength. */
  strengthDivisor: 60,
  maxStrength: 5,
  weeklyTarget: 15,
  dailyCap: 45,
  duelWin: 25,
  warWin: 30,
  bellumWin: 40,
  /** A new season starts with half of the last score, at most this. */
  carryShare: 0.5,
  maxCarry: 300,
} as const;

export const LEVEL_FACTOR = { beginner: 1, intermediate: 1.5, advanced: 2 } as const;

/** PRs in the first weeks of an exercise set its baseline and earn no progress laurels. */
export const BASELINE_DAYS = 21;

/** A new best this much above the old one (with 2+ earlier sessions) is not rewarded. */
export const UNUSUAL_JUMP = 0.25;
export const UNUSUAL_MIN_SESSIONS = 2;

export const DENARII = {
  verified: 20,
  incomplete: 12,
  unverified: 8,
  pr: 5,
  maxPrs: 3,
  streakWeek: 1,
  maxStreakWeeks: 5,
  togetherLudus: 10,
  dailyCap: 60,
  /** The server accepts at most this on a day without a verified visit. */
  unverifiedDailyCap: 30,
} as const;

export const VISIT = {
  radiusM: 150,
  /** A visit without a check-out closes as incomplete after this. */
  autoCloseHours: 3,
  minMinutes: 20,
  maxMinutes: 240,
  /** A workout started this long before the check-in still belongs to the visit. */
  earlyMinutes: 15,
  /** Scans saved offline are accepted this late. */
  offlineHours: 48,
} as const;

export const LUDUS = {
  minMembers: 3,
  baseMembers: 5,
  maxMembers: 10,
  nameMax: 24,
  mottoMax: 60,
} as const;

export const WAR = {
  days: 3,
  perWorkout: 10,
  maxWorkoutsPerDay: 2,
  pr: 5,
  maxPrs: 3,
  perDay: 5,
  activeDays: 14,
  rematchDays: 7,
  spoilsShare: 0.2,
  maxSpoils: 300,
  /** Palisade bonus per level for the defender. */
  wallBonus: 0.05,
} as const;

export const DUEL = { days: 7 } as const;

export const BELLUM = {
  minActive: 3,
  /** Palisade bonus per level of the gym fortress. */
  wallBonus: 0.02,
} as const;

/** The gym fortress costs this many times the ludus price. */
export const GYM_COST_FACTOR = 3;
/** Repairing a damaged building costs this share of its level cost. */
export const REPAIR_SHARE = 0.4;
