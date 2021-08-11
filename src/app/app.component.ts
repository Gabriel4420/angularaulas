import { Component } from '@angular/core';

import {Pessoa} from './pessoa'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular aulas';
  nome = 'Gabriel Rodrigues';
  idade = 24;
  names = ['Gabriel', 'Douglas', 'Paulo', 'Thiago'];
  principalName = this.names[0];
  objectNames = [
    new Pessoa(1,'Gabriel',23),
    new Pessoa(2,'Paulo',50),
    new Pessoa(3,'Beltrano',35),
    new Pessoa(4,'ciclano',18),
    new Pessoa(5,'Fulano',88),
    /* { name: 'Gabriel Rodrigues', age: 23 },
    { name: 'Paulo Rodrigues', age: 38 }, */
  ];
}
