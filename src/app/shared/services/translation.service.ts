import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage: string;

  constructor(private translate: TranslateService) {
    // Set default language and initialize currentLanguage variable
    this.currentLanguage = 'en';
    translate.setDefaultLang(this.currentLanguage);
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language; // Update the current language variable
  }

  public getCurrentLanguage(): string {
    return this.currentLanguage; // Method to get the current language
  }
}
