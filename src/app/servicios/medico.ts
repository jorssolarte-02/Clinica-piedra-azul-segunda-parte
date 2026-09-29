import { Injectable } from '@angular/core';
import { Especialidad } from '../modelos/especialidad';
import { Medico } from '../modelos/medico';

@Injectable({ providedIn: 'root' })
export class MedicoService {
  private siguienteId = 1;
  private readonly medicos: Medico[] = [];

  readonly especialidades: Especialidad[] = [
    {
      nombre: 'Terapia neural',
      descripcion:
        'Tratamiento regulador que usa anestésicos locales en baja dosis para aliviar dolor crónico y restaurar el equilibrio del sistema nervioso.',
    },
    {
      nombre: 'Quiropraxia',
      descripcion:
        'Especialidad enfocada en el diagnóstico y corrección de disfunciones de la columna y el sistema musculoesquelético mediante ajustes manuales.',
    },
    {
      nombre: 'Fisioterapia',
      descripcion:
        'Rehabilitación del movimiento con ejercicio terapéutico, agentes físicos y educación para recuperar función y prevenir recaídas.',
    },
    {
      nombre: 'Nutrición y Dietética Terapéutica',
      descripcion:
        'Planes de alimentación personalizados para prevenir y tratar enfermedades, mejorar el rendimiento y acompañar procesos clínicos.',
    },
    {
      nombre: 'Medicina general',
      descripcion:
        'Atención integral de primer nivel: valoración, diagnóstico inicial, seguimiento y remisión oportuna a otras especialidades.',
    },
    {
      nombre: 'Psicología',
      descripcion:
        'Acompañamiento en salud mental para ansiedad, duelo, hábitos y relaciones, con un enfoque clínico y humanizado.',
    },
  ];

  constructor() {
    this.cargarMedicosIniciales();
  }

  listarMedicos(): Medico[] {
    return [...this.medicos];
  }

  listarPorEspecialidad(especialidad: string): Medico[] {
    return this.medicos.filter((medico) => medico.especialidad === especialidad);
  }

  buscarPorId(id: number): Medico | undefined {
    return this.medicos.find((medico) => medico.id === id);
  }

  private registrar(
    nombres: string,
    apellidos: string,
    especialidad: string,
    horarioAtencion: string,
    aniosExperiencia: number,
    bibliografia: string,
    imagen: string,
    subespecialidades: string,
    motivacion: string
  ): void {
    this.medicos.push({
      id: this.siguienteId++,
      nombres,
      apellidos,
      especialidad,
      horarioAtencion,
      aniosExperiencia,
      bibliografia,
      imagen,
      subespecialidades,
      motivacion,
    });
  }

  private cargarMedicosIniciales(): void {
    const iniciales: Omit<Medico, 'id'>[] = [
      {
        nombres: 'Laura',
        apellidos: 'Gómez',
        especialidad: 'Terapia neural',
        horarioAtencion: 'Lunes a viernes 8:00-16:00',
        aniosExperiencia: 8,
        bibliografia: 'Profesional enfocada en terapia neural y manejo del dolor, con atención cercana y centrada en el paciente.',
        imagen: 'imagenes/medicos/laura.jpg',
        subespecialidades: 'Manejo del dolor',
        motivacion: 'Escuchar al paciente es el primer paso para construir un buen proceso de atención.',
      },
      {
        nombres: 'Juan',
        apellidos: 'Pérez',
        especialidad: 'Quiropraxia',
        horarioAtencion: 'Martes a sábado 9:00-17:00',
        aniosExperiencia: 10,
        bibliografia: 'Profesional dedicado al cuidado musculoesquelético, con énfasis en columna y postura.',
        imagen: 'imagenes/medicos/juan.jpg',
        subespecialidades: 'Columna y postura',
        motivacion: 'Buscamos recuperar movimiento y confianza para que vuelvas a tus actividades.',
      },
      {
        nombres: 'María',
        apellidos: 'Rodríguez',
        especialidad: 'Fisioterapia',
        horarioAtencion: 'Lunes a viernes 7:00-15:00',
        aniosExperiencia: 6,
        bibliografia: 'Fisioterapeuta orientada a la rehabilitación funcional y recuperación del movimiento.',
        imagen: 'imagenes/medicos/maria.jpg',
        subespecialidades: 'Rehabilitación funcional',
        motivacion: 'Cada avance cuenta; acompañamos tu recuperación paso a paso.',
      },
      {
        nombres: 'Carlos',
        apellidos: 'Martínez',
        especialidad: 'Nutrición y Dietética Terapéutica',
        horarioAtencion: 'Lunes, miércoles y viernes 10:00-18:00',
        aniosExperiencia: 7,
        bibliografia: 'Profesional de nutrición clínica enfocado en educación alimentaria y bienestar.',
        imagen: 'imagenes/medicos/carlos.jpg',
        subespecialidades: 'Nutrición clínica',
        motivacion: 'Una alimentación adecuada puede convertirse en una herramienta para cuidar tu bienestar.',
      },
      {
        nombres: 'Ana',
        apellidos: 'López',
        especialidad: 'Terapia neural',
        horarioAtencion: 'Lunes a viernes 8:00-14:00',
        aniosExperiencia: 9,
        bibliografia: 'Profesional dedicada a la atención integral y al acompañamiento personalizado del paciente.',
        imagen: 'imagenes/medicos/ana.jpg',
        subespecialidades: 'Bienestar integral',
        motivacion: 'La atención cercana permite comprender mejor las necesidades de cada persona.',
      },
      {
        nombres: 'David',
        apellidos: 'García',
        especialidad: 'Quiropraxia',
        horarioAtencion: 'Martes a jueves 8:00-17:00',
        aniosExperiencia: 8,
        bibliografia: 'Profesional con enfoque en movilidad, postura y prevención de molestias musculoesqueléticas.',
        imagen: 'imagenes/medicos/david.jpg',
        subespecialidades: 'Movilidad y postura',
        motivacion: 'Movimiento, prevención y hábitos saludables hacen parte de nuestro acompañamiento.',
      },
      {
        nombres: 'Sofía',
        apellidos: 'Hernández',
        especialidad: 'Fisioterapia',
        horarioAtencion: 'Lunes a sábado 8:00-13:00',
        aniosExperiencia: 7,
        bibliografia: 'Fisioterapeuta orientada a la recuperación funcional y al acompañamiento de lesiones deportivas.',
        imagen: 'imagenes/medicos/sofia-azul.jpg',
        subespecialidades: 'Lesiones deportivas',
        motivacion: 'Trabajamos para que recuperes tus capacidades y retomes lo que disfrutas.',
      },
      {
        nombres: 'Miguel',
        apellidos: 'Ramírez',
        especialidad: 'Nutrición y Dietética Terapéutica',
        horarioAtencion: 'Jueves y viernes 9:00-16:00',
        aniosExperiencia: 6,
        bibliografia: 'Profesional de nutrición enfocado en hábitos saludables y cambios sostenibles.',
        imagen: 'imagenes/medicos/miguel.jpg',
        subespecialidades: 'Hábitos saludables',
        motivacion: 'Pequeños cambios sostenidos pueden convertirse en grandes avances para tu salud.',
      },
      {
        nombres: 'Camila',
        apellidos: 'Torres',
        especialidad: 'Medicina general',
        horarioAtencion: 'Lunes a viernes 7:30-15:30',
        aniosExperiencia: 8,
        bibliografia: 'Médica de atención primaria con enfoque preventivo, seguimiento clínico y orientación clara para cada paciente.',
        imagen: 'imagenes/medicos/camila.jpg',
        subespecialidades: 'Prevención y seguimiento',
        motivacion: 'Una buena consulta comienza escuchando y termina con un plan claro para el paciente.',
      },
      {
        nombres: 'Andrés',
        apellidos: 'Morales',
        especialidad: 'Psicología',
        horarioAtencion: 'Martes a sábado 9:00-17:00',
        aniosExperiencia: 7,
        bibliografia: 'Psicólogo clínico orientado al acompañamiento emocional, manejo de estrés y construcción de hábitos saludables.',
        imagen: 'imagenes/medicos/diego.jpg',
        subespecialidades: 'Bienestar emocional',
        motivacion: 'Encontrar un espacio seguro para hablar también es una forma de cuidar la salud.',
      },
    ];

    iniciales.forEach((medico) =>
      this.registrar(
        medico.nombres,
        medico.apellidos,
        medico.especialidad,
        medico.horarioAtencion,
        medico.aniosExperiencia,
        medico.bibliografia,
        medico.imagen,
        medico.subespecialidades,
        medico.motivacion
      )
    );
  }
}
