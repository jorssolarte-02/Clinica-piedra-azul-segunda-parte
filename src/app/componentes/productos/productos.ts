import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  readonly productos = [
    {
      imagen: 'imagenes/productos/kit-bienestar.svg',
      alt: 'Kit de bienestar diario',
      titulo: 'Kit Bienestar Diario',
      texto: 'Set práctico con libreta de hábitos, banda suave y guía de autocuidado.',
      precio: '$39.900',
      categoria: 'Bienestar',
    },
    {
      imagen: 'imagenes/productos/botella-termica.svg',
      alt: 'Botella térmica reutilizable',
      titulo: 'Botella Térmica Piedra Azul',
      texto: 'Botella reutilizable de 600 ml para acompañar tu rutina diaria.',
      precio: '$54.900',
      categoria: 'Hidratación',
    },
    {
      imagen: 'imagenes/productos/banda-movilidad.svg',
      alt: 'Banda elástica para movilidad',
      titulo: 'Banda de Movilidad',
      texto: 'Accesorio de resistencia ligera para ejercicios de movilidad y estiramiento.',
      precio: '$29.900',
      categoria: 'Movimiento',
    },
    {
      imagen: 'imagenes/productos/cojin-cervical.svg',
      alt: 'Cojín cervical ergonómico',
      titulo: 'Cojín Cervical Ergonómico',
      texto: 'Soporte diseñado para acompañar momentos de descanso y trabajo sentado.',
      precio: '$74.900',
      categoria: 'Ergonomía',
    },
    {
      imagen: 'imagenes/productos/organizador.svg',
      alt: 'Organizador semanal de medicamentos',
      titulo: 'Organizador Semanal',
      texto: 'Compartimentos diarios para facilitar la organización de productos de cuidado personal.',
      precio: '$24.900',
      categoria: 'Organización',
    },
    {
      imagen: 'imagenes/productos/masaje-relax.svg',
      alt: 'Rodillo de masaje y relajación',
      titulo: 'Rodillo Relax',
      texto: 'Accesorio compacto para complementar rutinas de relajación y movilidad.',
      precio: '$46.900',
      categoria: 'Recuperación',
    },
  ];
}
