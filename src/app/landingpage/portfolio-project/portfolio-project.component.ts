import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss',
})
export class PortfolioProjectComponent {
  portfolio: any = [
    {
      title: 'Join',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: './../../assets/img/join.png',
      link: 'https://christian-foerster.github.io/portfolio/',
      github: 'https://github.com/Christian-Foerster/portfolio',
    },
    {
      title: 'Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      image: './../../assets/img/polloloco.png',
      link: 'https://christian-foerster.github.io/portfolio/',
      github: 'https://github.com/Christian-Foerster/portfolio',
    },
    {
      title: 'Pokédex',
      subtitle: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: './../../assets/img/pokedex.png',
      link: 'https://christian-foerster.github.io/portfolio/',
      github: 'https://github.com/Christian-Foerster/portfolio',
    },
    {
      title: 'Simple CRM',
      subtitle: 'Angular | Firebase',
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      image: './../../assets/img/simplecrm.png',
      link: 'https://christian-foerster.github.io/portfolio/',
      github: 'https://github.com/Christian-Foerster/portfolio',
    },
  ];

  constructor() {}
}
