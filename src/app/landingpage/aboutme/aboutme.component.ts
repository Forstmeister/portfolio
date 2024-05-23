import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  translate = Inject(TranslationService);
}
