import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  MenuNames: any = [
    { name: 'About me', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Portfolio', link: '#portfolio' },
  ];

  clickedIndex: number | null = null;

  clickEvent(index: number) {
    this.clickedIndex = index;
  }
}
