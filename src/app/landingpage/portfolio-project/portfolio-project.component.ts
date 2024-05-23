import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss',
})
export class PortfolioProjectComponent {
  translate = Inject(TranslationService);

  portfolio: any = [
    {
      title: 'Join',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'join.description',
      image: './../../assets/img/join.png',
      link: 'https://join.foerster-dev.de/',
      github: 'https://github.com/Forstmeister/join',
    },
    {
      title: 'Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'polloloco.description',
      image: './../../assets/img/polloloco.png',
      link: 'https://pollo-loco.foerster-dev.de/',
      github: 'https://github.com/Forstmeister/polloloco',
    },
    {
      title: 'Pokédex',
      subtitle: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: './../../assets/img/pokedex.png',
      link: 'https://pokedex.foerster-dev.de/',
      github: 'https://github.com/Forstmeister/pokedex',
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
