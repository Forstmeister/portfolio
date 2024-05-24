import { Component, Inject } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, NavigationComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  translate = Inject(TranslationService);
}
