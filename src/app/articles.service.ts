import { Injectable } from '@angular/core';
import { Article } from './article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private _serveis: Article[] = [
    {
      nom: 'Una pàgina web',
      preu: 500,
      seleccionat: false
    },
    {
      nom: 'Una consultoria CEO',
      preu: 300,
      seleccionat: false
    },
    {
      nom: 'Una campanya de Google Ads',
      preu: 200,
      seleccionat: false
    },
  ];

  private _preuTotal: number = 0;

  // GETTERS & SETTERS
  public get articles(): Article[] {
    return [...this._serveis];
  }

  public get preuTotal(): number {
    return this._preuTotal;
  }

  set preuTotal(value: number) {
    this._preuTotal = value;
  }
}