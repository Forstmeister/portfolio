import { Component, Inject } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mailinfo',
  standalone: true,
  imports: [NavigationComponent, FooterComponent, TranslateModule],
  templateUrl: './mailinfo.component.html',
  styleUrl: './mailinfo.component.scss',
})
export class MailinfoComponent {
  translate = Inject(TranslationService);
}
