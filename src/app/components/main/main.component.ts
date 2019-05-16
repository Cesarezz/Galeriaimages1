import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'entelgy-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  imagenDetalle: Image = null;

  constructor() {


  }

  ngOnInit() {
  }

  public reciboImagenDetallada(imagen: Image): void {

    this.imagenDetalle = imagen;

  }

}
