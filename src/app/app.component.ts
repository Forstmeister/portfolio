import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AtfsectionComponent } from './atfsection/atfsection.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
