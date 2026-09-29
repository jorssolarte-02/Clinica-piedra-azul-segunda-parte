import { Component, OnDestroy, OnInit } from '@angular/core';

interface SlidePromocion {
  imagen: string;
  alt: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  detalle: string;
}

@Component({
  imports: [],
  selector: 'app-carrusel',
  styleUrl: './carrusel.css',
  templateUrl: './carrusel.html',
})
export class Carrusel implements OnInit, OnDestroy {
  indice = 0;
  private temporizador: ReturnType<typeof setInterval> | undefined;

  readonly slides: SlidePromocion[] = [
    {
      imagen: 'imagenes/promociones/jornada-bienestar.svg',
      alt: 'Jornada de bienestar y prevención de Clínica Piedra Azul',
      etiqueta: 'Jornada de bienestar',
      titulo: 'Cuida tu salud antes de que aparezcan las señales',
      texto: 'Valoración integral de medicina general con orientación preventiva y seguimiento personalizado.',
      detalle: 'Agenda tu valoración y recibe orientación sobre los próximos pasos de tu cuidado.',
    },
    {
      imagen: 'imagenes/promociones/psicologia.svg',
      alt: 'Espacio de bienestar emocional y psicología',
      etiqueta: 'Bienestar emocional',
      titulo: 'Un espacio para hablar, comprender y avanzar',
      texto: 'Primera orientación psicológica con un enfoque humano, confidencial y centrado en tus necesidades.',
      detalle: 'Atención para manejo emocional, hábitos, duelo y situaciones de cambio.',
    },
    {
      imagen: 'imagenes/promociones/movimiento-saludable.svg',
      alt: 'Programa de movimiento y rehabilitación',
      etiqueta: 'Movimiento saludable',
      titulo: 'Recupera movimiento con acompañamiento profesional',
      texto: 'Programa de fisioterapia y quiropraxia diseñado para apoyar tu movilidad y tus hábitos de movimiento.',
      detalle: 'Incluye valoración inicial y recomendaciones para continuar el proceso en casa.',
    },
    {
      imagen: 'imagenes/promociones/nutricion.svg',
      alt: 'Programa de nutrición clínica',
      etiqueta: 'Nutrición clínica',
      titulo: 'Alimentación que se adapta a tu rutina',
      texto: 'Orientación nutricional personalizada para construir hábitos sostenibles y realistas.',
      detalle: 'Consulta individual, objetivos claros y seguimiento de tus avances.',
    },
  ];

  ngOnInit(): void {
    this.temporizador = setInterval(() => this.siguiente(), 5200);
  }

  ngOnDestroy(): void {
    if (this.temporizador) clearInterval(this.temporizador);
  }

  irA(indice: number): void { this.indice = indice; }
  siguiente(): void { this.indice = (this.indice + 1) % this.slides.length; }
  anterior(): void { this.indice = (this.indice - 1 + this.slides.length) % this.slides.length; }
}
