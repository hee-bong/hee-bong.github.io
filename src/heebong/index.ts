import { ko } from './ko';
import { en } from './en';
import { fr } from './fr';

export type Language = 'ko' | 'en' | 'fr';

export const translations = {
  ko,
  en,
  fr,
};

export type TranslationKey = typeof ko;

