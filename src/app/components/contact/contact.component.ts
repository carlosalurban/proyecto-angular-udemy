import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;
  public widthSlider: number;
  public autor: any;
  @ViewChild('textos') textos;
  constructor() {
    this.title = 'Contacto';
  }

  ngOnInit() {
    // const opcionClasica = alert(document.querySelector('#texto').innerHTML);
    // console.log(this.textos.nativeElement.textContent);
   }
  getAutor(event) {
    this.autor = event;
  }
}
