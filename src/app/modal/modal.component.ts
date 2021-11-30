import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private modal: NgbModal) { }

  @Input() modalOption: number = 0;

  ngOnInit(): void {
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modal.open(content, { centered: true });
  }
}
