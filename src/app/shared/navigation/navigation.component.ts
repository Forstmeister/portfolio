import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(150),
      ]),
      transition('* => void', [
        animate(150, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class NavigationComponent {
  MenuNames: any = [
    { name: 'About me', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Portfolio', link: '#portfolio' },
  ];

  mobileMenuNames: any = [
    { name: 'About me', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Contact', link: '#contactSection' },
  ];

  clickedIndex: number | null = null;
  mobileIconClicked: boolean = false;

  clickEvent(index: number) {
    this.clickedIndex = index;
  }

  closeWithTimeout() {
    setTimeout(() => {
      this.openNavigation();
      // this.clickedIndex = null;
    }, 700);
  }
  openNavigation() {
    this.mobileIconClicked = !this.mobileIconClicked;
    if (this.mobileIconClicked) {
      document.body.style.overflowY = 'hidden';
    } else if (!this.mobileIconClicked) {
      document.body.style.overflowY = 'auto';
    }
  }
}
