import { Component } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {}
