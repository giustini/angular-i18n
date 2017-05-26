import {Injectable, Inject} from "@angular/core";
import {TRANSLATIONS} from "../i18n/translations";

@Injectable()
export class I18nService {

  private _currentLang:string;
  private _defaultLang:string;

  public supportedLangs:any[] = [
    {label: 'ES', value: 'es'},
    {label: 'EN', value: 'en'}
  ];

  constructor(@Inject(TRANSLATIONS) private translations:any) {
  }

  public get currentLang() {
    return this._currentLang;
  }

  public use(lang:string):void {
    this._currentLang = lang;
  }

  public translate(key:string):string {
    if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
      return this.translations[this.currentLang][key];
    }

    return key;
  }

}
