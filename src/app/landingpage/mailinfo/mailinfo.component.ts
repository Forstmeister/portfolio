import { Component } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-mailinfo',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './mailinfo.component.html',
  styleUrl: './mailinfo.component.scss',
})
export class MailinfoComponent {}
