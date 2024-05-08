import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AtfsectionComponent } from './landingpage/atfsection/atfsection.component';
import { AboutmeComponent } from './landingpage/aboutme/aboutme.component';
import { MyskillsComponent } from './landingpage/myskills/myskills.component';
import { PortfolioComponent } from './landingpage/portfolio/portfolio.component';
import { PortfolioProjectComponent } from './landingpage/portfolio-project/portfolio-project.component';
import { ContactComponent } from './landingpage/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    AtfsectionComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    PortfolioProjectComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
