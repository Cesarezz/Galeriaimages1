import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'entelgy-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input() imagenDetalle;

  constructor() { }

  ngOnInit() {
  }

}
