import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PanellService } from '../panell.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css'],
})
export class PanellComponent implements OnInit {
  @Input() product!: Product | undefined;
  @Input() totalWebCost: number = 0;
  @Output() updatedTotalWebCost = new EventEmitter<number>();

  constructor(private fb: FormBuilder, private panellService: PanellService) {}

  /*webPageForm: FormGroup = new FormGroup({
    numPags: new FormControl('1', [Validators.required, Validators.min(0) ]),
    numIdiomes: new FormControl('1', [Validators.required, Validators.min(0) ]),
  });*/

  //Es lo mismo que arriba, pero se lee mejor
  webPageForm: FormGroup = this.fb.group({
    numPags: [1, [Validators.required, Validators.min(1)]],
    numIdiomes: [1, [Validators.required, Validators.min(1)]],
    //numPags: [1, [Validators.required, Validators.pattern("^[0-9]*$")]], PER AFEGIR UN VALIDATOR AMB REGEX.
  });

  ngOnInit() {
    this.webPageForm.valueChanges.subscribe((x) => {
      console.log('form value changed', x);
      this.totalWebCost = this.panellService.calculateWebPriceInService(
        parseInt(this.webPageForm.controls['numPags'].value),
        parseInt(this.webPageForm.controls['numIdiomes'].value),
      );
      this.updatedTotalWebCost.emit(this.totalWebCost);
    });
  }

  calculateWebPrice() {
    this.totalWebCost = this.panellService.calculateWebPriceInService(
      parseInt(this.webPageForm.controls['numPags'].value),
      parseInt(this.webPageForm.controls['numIdiomes'].value),
    );
    this.updatedTotalWebCost.emit(this.totalWebCost);
    return this.totalWebCost;
  }

  incrementar_pags() {
    this.webPageForm.controls['numPags'].setValue(
      this.webPageForm.controls['numPags'].value + 1
    );
  }

  decrementar_pags() {
    if (this.webPageForm.controls['numPags'].value >= 1) {
      this.webPageForm.controls['numPags'].setValue(
        this.webPageForm.controls['numPags'].value - 1
      );
    }
  }

  incrementar_idiomes() {
    this.webPageForm.controls['numIdiomes'].setValue(
      this.webPageForm.controls['numIdiomes'].value + 1
    );
  }

  decrementar_idiomes() {
    if (this.webPageForm.controls['numIdiomes'].value >= 1) {
      this.webPageForm.controls['numIdiomes'].setValue(
        this.webPageForm.controls['numIdiomes'].value - 1
      );
    }
  }
}
