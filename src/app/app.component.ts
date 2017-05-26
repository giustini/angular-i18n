import {Component, OnInit} from "@angular/core";
import {I18nService} from "./services/i18n.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private i18nService:I18nService) {
  }

  ngOnInit() {
    this.selectLang('es');
  }

  isCurrentLang(lang:string) {
    return lang === this.i18nService.currentLang;
  }

  selectLang(lang:string) {
    this.i18nService.use(lang);
  }

}
