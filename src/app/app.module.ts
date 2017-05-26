import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TRANSLATION_PROVIDERS} from "./i18n/translations";
import {I18nService} from "./services/i18n.service";
import {I18nPipe} from "./i18n/i18n.pipe";


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, I18nPipe],
  bootstrap: [AppComponent],
  providers: [TRANSLATION_PROVIDERS, I18nService]
})
export class AppModule {
}
