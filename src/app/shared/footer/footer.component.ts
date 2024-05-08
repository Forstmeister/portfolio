import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  listItemHovered: boolean = false;

  hoverListItem() {
    this.listItemHovered = !this.listItemHovered;
  }
}
