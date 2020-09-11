import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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

  constructor(private heroService: HeroService) {}

  //
  // SERVICE INTERACTIONS
  // ------------------------------

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  //
  // EVENT HANDLER
  // ------------------------------

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
