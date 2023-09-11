import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero:Hero = {
    id: 101,
    name: "WindStorm"
  }
  heroes=HEROES
  // selectedHero:Hero=this.hero
  selectedHero?:Hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  

}
