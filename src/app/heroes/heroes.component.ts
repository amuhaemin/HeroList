import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;
  
  constructor(private heroServices: HeroService) { }
  getHeroes(): void{
    this.heroes = this.heroServices.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }
}
