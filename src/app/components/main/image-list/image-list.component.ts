import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from '../../../models/image';

@Component({
  selector: 'entelgy-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Output() imagenDetalladaOut = new EventEmitter<Image>();

  images: Image[] = [
    {
      id: '1',
      nombre: 'Imagen 1',
      description: 'Description Imagen 1',
      imagenGaleria: 'http://lorempixel.com/300/275/nightlife/1',
      imagenDetalle: 'http://lorempixel.com/600/450/nightlife/1'
    },
    {
      id: '2',
      nombre: 'Imagen 2',
      description: 'Description Imagen 2',
      imagenGaleria: 'http://lorempixel.com/300/275/nightlife/2',
      imagenDetalle: 'http://lorempixel.com/600/450/nightlife/2'
    },
    {
      id: '3',
      nombre: 'Imagen 3',
      description: 'Description Imagen 3',
      imagenGaleria: 'http://lorempixel.com/300/275/nightlife/3',
      imagenDetalle: 'http://lorempixel.com/600/450/nightlife/3'
    },
    {
      id: '4',
      nombre: 'Imagen 4',
      description: 'Description Imagen 4',
      imagenGaleria: 'http://lorempixel.com/300/275/nightlife/4',
      imagenDetalle: 'http://lorempixel.com/600/450/nightlife/4'
    },
    {
      id: '5',
      nombre: 'Imagen 5',
      description: 'Description Imagen 5',
      imagenGaleria: 'http://lorempixel.com/300/275/nightlife/5',
      imagenDetalle: 'http://lorempixel.com/600/450/nightlife/5'
    },
    {
      id: '6',
      nombre: 'Imagen 6',
      description: 'Description Imagen 6',
      imagenGaleria: 'http://lorempixel.com/300/275/nightlife/6',
      imagenDetalle: 'http://lorempixel.com/600/450/nightlife/6'
    }
  ];

  constructor() {




  }

  ngOnInit() {
  }

  public reciboImagenDetallada(imagen: Image): void {

    this.imagenDetalladaOut.emit(imagen);

  }

}
