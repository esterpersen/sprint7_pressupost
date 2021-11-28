import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServeiPanellService {
  // PROPIETATS
  private _preuTotalPagWeb: number = 0;
  @Output() updateWebPrice: EventEmitter<number> = new EventEmitter<number>();

  // GETTERS & SETTERS
  public get preuTotalPagWeb(): number {
    return this._preuTotalPagWeb;
  }

  set preuTotalPagWeb(value: number) {
    this._preuTotalPagWeb = value;
  }

  constructor() {}

  //MÈTODE
  calculateWebPrice(pagesNum: number, langNum: number) {
    this.preuTotalPagWeb = pagesNum * langNum * 30;
    console.log('estic al servei panell ', this.preuTotalPagWeb);
    this.updateWebPrice.emit(this.preuTotalPagWeb);
    // this.updateWebPrice.subscribe(result => this.preuTotalPagWeb = result)
    // return this.preuTotalPagWeb;
  }
}
