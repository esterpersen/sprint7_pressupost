import { Injectable } from '@angular/core';
import { ArticlesService } from './articles.service';

@Injectable({
  providedIn: 'root',
})
export class ServeiArticlesService {
  //CONSTRUCTOR
  constructor(private articlesService: ArticlesService) {}

  //MÈTODES
  afegirAlPreuTotal(preuIndividual: number): number {
    this.articlesService.preuTotal += preuIndividual;
    return this.articlesService.preuTotal;
  }
  treureDelPreuTotal(preuIndividual: number): number {
    this.articlesService.preuTotal -= preuIndividual;
    return this.articlesService.preuTotal;
  }

  //////////Potser SI li aconsegueixo passar l'event que passa (select o unselect), ho podria fer així:
  // actualitzarPreuTotal(event: string, preuIndividual: number) {
  //   switch (event) {
  //     case 'unchecked': //s'ha d'estudiar si aixo es possible
  //       this.articlesService.preuTotal -= preuIndividual;
  //       return this.articlesService.preuTotal;
  //       break;
  //     case 'checked': //s'ha d'estudiar si aixo es possible
  //       this.articlesService.preuTotal += preuIndividual;
  //       return this.articlesService.preuTotal;
  //       break;
  //     default:
  //       console.log('algo no ha funcionat.');
  //       return this.articlesService.preuTotal;
  //       break;
  //   }
  // }
}