import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private _heroService: HeroService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

  delete(hero:Hero):void{
    this._heroService.delete(hero.id)
    .then(()=>{
      this.heroes = this.heroes.filter(h=>h!==hero);
      if(this.selectedHero === hero){this.selectedHero=null;}
    })
  }

add(name:string):void{
  name = name.trim();
  if(!name){return;}
  this._heroService.create(name)
  .then(hero =>{
    this.heroes.push(hero);
    this.selectedHero=null;
  });
}
}

