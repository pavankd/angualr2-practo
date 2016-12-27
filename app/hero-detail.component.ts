import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {Hero} from './hero';

import {HeroService} from './hero.service';
@Component({
    moduleId:module.id,
    selector:'my-hero-detail',
   templateUrl:'hero-detail.component.html',
   styleUrls:['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    @Input() hero:Hero;


    constructor(private _heroService:HeroService,
                private _actRoute:ActivatedRoute,
                private _location:Location
                ){}

    ngOnInit():void{
        this._actRoute.params
        .switchMap((params:Params) =>
            this._heroService.getHero(+params['id']))
            .subscribe(hero=>this.hero=hero);
    }


    goBack(){
        this._location.back();
    }
}