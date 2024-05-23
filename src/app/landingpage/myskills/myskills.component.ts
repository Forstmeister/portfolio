import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss',
})
export class MyskillsComponent {
  translate = Inject(TranslationService);
}
