import { Component, OnInit } from '@angular/core';
import { PanellService } from '../panell.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-pressupost',
  templateUrl: './pressupost.component.html',
  styleUrls: ['./pressupost.component.css'],
})
export class PressupostComponent implements OnInit {
  allProducts: Product[] = [];
  total: number = 0;
  extraWebCost: number = 0;
  bigTotal: number = 0;
  constructor(private panellService: PanellService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): Product[] {
    return (this.allProducts = this.panellService.products);
  }

  // Funció per actualitzar el preu total del pressupost
  updateSelectedItemsList(item: Product) {
    //SI ES SEL·LECCIONA LA WEB.
    if (item.id == 1) {
      if (item.isChecked) {
        this.extraWebCost = 30;
        this.total += item.pPrice;
      } else {
        this.total -= item.pPrice;
        this.extraWebCost = 0;
      }
    } else {
      //SI ES SEL·LECCIONA QUALSEVOL ALTRE ELEMENT.
      if (item.isChecked) {
        this.total += item.pPrice;
      } else {
        this.total -= item.pPrice;
      }
    }
    this.bigTotal = this.calculateTheAbsoluteTotal(this.total, this.extraWebCost);
  }

  // Actualitza el preu extra de la web cada cop que la funció updatedTotalWebCostFromService s'utilitza
  updatedTotalWebCostHandler(item: any) {
    this.extraWebCost = item;
    this.bigTotal = this.calculateTheAbsoluteTotal(this.total, this.extraWebCost);
  }

  calculateTheAbsoluteTotal(base: number, extras: number): number {

    let baseMesExtres: number = 0;
    baseMesExtres = base + extras;
    return baseMesExtres;
  }
}
