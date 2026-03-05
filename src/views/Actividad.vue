<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecoredsena.dev/ecored-pkg-sena/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Turismo comunitario: fundamentos y diagnóstico territorial',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la capacidad de las y los aprendices para identificar las potencialidades del territorio, analizar el nivel de participación de la comunidad y reconocer los componentes del turismo comunitario, de acuerdo con sus características, con el fin de evidenciar la apropiación conceptual y su aplicación en contextos reales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'El turismo comunitario se caracteriza principalmente por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión externa del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Participación local activa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Explotación intensiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependencia económica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,
          texto: 'Uno de los objetivos del turismo comunitario es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Concentración de beneficios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Equidad en la distribución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusión social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso ilimitado de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,
          texto: '¿Cuál es un componente del turismo comunitario?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visitantes internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Infraestructura hotelera externa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunidad local.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Publicidad masiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,
          texto: 'La sostenibilidad turística integra principalmente:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dimensión política únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo crecimiento económico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Explotación de recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dimensiones ambiental, social y económica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,
          texto: 'Un activo patrimonial cultural corresponde a:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tradiciones y gastronomía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carreteras nacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hoteles de cadena.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Centros comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'La formalización turística en Colombia exige:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo promoción digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No requiere trámites.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro Nacional de Turismo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permiso verbal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,
          texto: 'El emprendimiento comunitario busca:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dependencia externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generación de ingresos locales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pérdida de identidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,
          texto: 'Un impacto positivo del turismo comunitario es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deterioro ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Migración forzada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecimiento cultural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Conflictos sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,
          texto: 'La participación comunitaria permite:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Excluir actores locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tomar decisiones colectivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Centralizar beneficios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir oportunidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,
          texto: 'El código de ética del turismo promueve:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Irrespeto cultural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso irresponsable de recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Relaciones respetuosas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusión social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 11,
          texto:
            '¿Qué principio del turismo comunitario garantiza que todos participen en las decisiones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusión social.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Centralización de beneficios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Participación comunitaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dependencia externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál de los siguientes es un activo patrimonial ambiental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Artesanías locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vías de acceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Biodiversidad y ecosistemas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organizaciones comunitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,
          texto:
            '¿Cuál es el primer paso para formalizar una iniciativa turística en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inscripción en el RUT.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro en Cámara de Comercio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Obtener permisos ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Afiliación a seguridad social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto:
            '¿Qué tipo de gestión se basa en la propiedad colectiva y la distribución equitativa de beneficios?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Joint venture.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fundación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Consorcio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cooperativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto:
            'El Informe Brundtland (1987) definió el desarrollo sostenible como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crecimiento económico sin límites.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Satisfacer necesidades presentes sin comprometer las futuras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Explotación intensiva de recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desarrollo exclusivo de países industrializados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto: '¿Cuál de los siguientes es un activo patrimonial social?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gastronomía local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ecosistemas naturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Redes de cooperación comunitaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Infraestructura vial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto:
            '¿Qué organismo internacional impulsó el Código Mundial de Ética para el Turismo?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Banco Mundial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ONU Turismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fondo Monetario Internacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'UNESCO.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto:
            '¿Cuál de las siguientes es una característica del turismo comunitario?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escala de operación masiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestión externa del territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Relación directa entre comunidad y visitantes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Concentración de beneficios en intermediarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto:
            '¿Cuál de los siguientes lineamientos hace parte de la Política de Turismo Comunitario en Colombia?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción de la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Privatización de los recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecimiento organizativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminación del marco normativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto: '¿Qué busca el enfoque territorial del turismo comunitario?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centralizar decisiones en entidades externas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Excluir actores privados del territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reconocer la gobernanza local y la articulación entre actores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar la participación de la comunidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los fundamentos, principios y componentes del turismo comunitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. PRUEBA ELIMINAR',
    },
  }),
}
</script>
