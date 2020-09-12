import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  //
  // SERVICE INTERACTIONS
  // ------------------------------

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  //
  // EVENT HANDLER
  // ------------------------------

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes Component: Selected hero id=${hero.id}`);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
