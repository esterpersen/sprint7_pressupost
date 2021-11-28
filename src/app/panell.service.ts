import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class PanellService {
  // PROPIETATS
  private _products: Product[] = [
    { id: 1, pName: 'Una pàgina web', pPrice: 500, isChecked: false },
    { id: 2, pName: 'Una consultoria CEO', pPrice: 300, isChecked: false },
    { id: 3, pName: 'Una campanya de Google Ads', pPrice: 200, isChecked: false},
  ];

  private _totalWebCost: number = 0;

  @Output() updatedTotalWebCostFromService = new EventEmitter<number>();

  // GETTERS & SETTERS
  get products(): Product[] {
    return this._products;
  }

  get preuTotalPagWeb(): number {
    return this._totalWebCost;
  }

  set preuTotalPagWeb(value: number) {
    this._totalWebCost = value;
  }
  //MÈTODE
  calculateWebPriceInService(
    numPagsValue: number,
    numIdiomesValue: number
  ): number {
    if (isNaN(numPagsValue) || isNaN(numIdiomesValue)) {
      this.preuTotalPagWeb = this.products[0].pPrice;
    } else {
      this.preuTotalPagWeb = numPagsValue * numIdiomesValue * 30;
    }
    this.updatedTotalWebCostFromService.emit(this.preuTotalPagWeb);
    return this.preuTotalPagWeb;
  }

  constructor() {}
}
