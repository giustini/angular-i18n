import {InjectionToken} from "@angular/core";
import {LANG_EN_NAME, LANG_EN_TRANS} from "./langs/lang-en";
import {LANG_ES_NAME, LANG_ES_TRANS} from "./langs/lang-es";

export const TRANSLATIONS = new InjectionToken('translations');

const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_ES_NAME]: LANG_ES_TRANS
};

export const TRANSLATION_PROVIDERS = [
  {provide: TRANSLATIONS, useValue: dictionary},
];
