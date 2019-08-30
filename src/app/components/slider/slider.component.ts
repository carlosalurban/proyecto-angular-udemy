import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;
  @Output() conseguirAutor = new EventEmitter();
  public autor: any;
  public boxWidth: number;
  constructor() {
    this.boxWidth = this.anchura;
    this.autor = {
      nombre: 'Carlos Alvarez',
      website: 'carlosweb.es',
      youtube: 'carlosweb'
    };
  }

  ngOnInit() {
  }
  lanzar(event) {
    this.conseguirAutor.emit(this.autor);
  }

}
