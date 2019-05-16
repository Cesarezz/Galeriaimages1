import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../../../../models/image';

@Component({
  selector: 'entelgy-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image;

  @Output() imageDetalladaOut = new EventEmitter<Image>();

  constructor() { }

  ngOnInit() {
  }

  public hacerDetalle(): void {

    this.imageDetalladaOut.emit(this.image);

  }

}
