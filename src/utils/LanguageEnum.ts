export enum LanguageEnum {
  en = 1,
  pt = 2,
}

export type TLanguageType = keyof typeof LanguageEnum;

export type LanguageTypeValues = (typeof LanguageEnum)[TLanguageType];
