import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  //
  // EVENT HANDLERS
  // ------------------------------

  goBack(): void {
    this.location.back();
  }

  //
  // SERVICE INTERACTION
  // ------------------------------

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('getHero from detail:', id);
    this.heroService.getHero(id).subscribe((hero) => {
      console.log('hero:', hero);
      this.hero = hero;
    });
  }
}
