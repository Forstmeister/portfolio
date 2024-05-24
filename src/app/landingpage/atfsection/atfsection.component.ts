import { Component, Inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-atfsection',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './atfsection.component.html',
  styleUrl: './atfsection.component.scss',
})
export class AtfsectionComponent {
  translate = Inject(TranslationService);

  linkedinUrl: string = 'https://www.linkedin.com/in/christian-f-335764299/';
  email: string = 'mailto:c.foerster@tutanota.com';
  githubUrl: string = 'https://github.com/Forstmeister';
}
