import { Component, OnInit } from '@angular/core';
import { Color,Heroe } from '../../interfaces/ventas/ventas.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  isMayusculas: boolean = false;
  change() {
    this.isMayusculas = !this.isMayusculas;
  }
  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }
}
