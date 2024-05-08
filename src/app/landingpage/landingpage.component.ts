import { Component } from '@angular/core';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { AtfsectionComponent } from './atfsection/atfsection.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    NavigationComponent,
    AtfsectionComponent,
    MyskillsComponent,
    ContactComponent,
    AboutmeComponent,
    PortfolioComponent,
    PortfolioProjectComponent,
    FooterComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {}
