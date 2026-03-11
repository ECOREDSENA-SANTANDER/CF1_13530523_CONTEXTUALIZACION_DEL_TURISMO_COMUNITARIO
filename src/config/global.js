export default {
  global: {
    Name: 'Turismo comunitario: fundamentos y diagnóstico territorial',
    Description:
      'El turismo comunitario es una estrategia de desarrollo territorial que integra sostenibilidad, participación comunitaria y aprovechamiento responsable del patrimonio natural y cultural. Este componente aborda sus fundamentos conceptuales, normativos y éticos, y orienta al aprendiz en el diagnóstico de las potencialidades del territorio y el nivel de organización comunitaria para gestionar iniciativas turísticas sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tendencias turísticas mundiales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Turismo comunitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos del turismo comunitario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias, impactos y actividades',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sostenibilidad y turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto, importancia y principios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Relación con el turismo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelos de gestión comunitaria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Activos patrimoniales del territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Activos culturales, físicos y sociales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Activos humanos, económicos y ambientales',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Emprendimiento y formalización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Ética y estrategia turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Código mundial de ética',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Estrategia de turismo comunitario',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Sostenibilidad',
      significado:
        'Enfoque de desarrollo que satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras, integrando dimensiones ambiental, social y económica.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'Proceso mediante el cual la comunidad interviene en la toma de decisiones relacionadas con el desarrollo turístico de su territorio.',
    },
    {
      termino: 'Equidad',
      significado:
        'Distribución justa de beneficios económicos, sociales y oportunidades entre las personas que integran la comunidad.',
    },
    {
      termino: 'Respeto cultural',
      significado:
        'Valoración y protección de tradiciones, saberes, cosmovisiones y manifestaciones culturales del territorio.',
    },
    {
      termino: 'Autonomía comunitaria',
      significado:
        'Capacidad de la comunidad para gestionar sus propios procesos organizativos, productivos y turísticos.',
    },
    {
      termino: 'Inclusión social',
      significado:
        'Garantía de acceso equitativo a la participación y a las oportunidades del turismo para todas las personas, sin discriminación.',
    },
    {
      termino: 'Territorio',
      significado:
        'Espacio físico, cultural y social donde se desarrolla la actividad turística comunitaria.',
    },
    {
      termino: 'Patrimonio natural',
      significado:
        'Conjunto de ecosistemas, paisajes, biodiversidad y recursos ambientales que constituyen la base del turismo de naturaleza.',
    },
    {
      termino: 'Patrimonio cultural',
      significado:
        'Bienes materiales e inmateriales como tradiciones, gastronomía, festividades, artes y saberes ancestrales que identifican a una comunidad.',
    },
    {
      termino: 'Activos patrimoniales',
      significado:
        'Recursos tangibles e intangibles del territorio (ambientales, culturales, sociales, humanos, físicos y económicos) que permiten el desarrollo turístico.',
    },
    {
      termino: 'Organización comunitaria',
      significado:
        'Estructura social que coordina la gestión, toma de decisiones y operación de iniciativas de turismo comunitario.',
    },
    {
      termino: 'Servicios turísticos',
      significado:
        'Actividades y productos ofrecidos a las personas visitantes, como alojamiento, alimentación, guianza y experiencias culturales o naturales.',
    },
    {
      termino: 'Cadena de valor turística',
      significado:
        'Conjunto de actores y procesos articulados (proveedores, operadores, comunidad e instituciones) que hacen posible la experiencia turística.',
    },
    {
      termino: 'Emprendimiento comunitario',
      significado:
        'Capacidad de identificar oportunidades y desarrollar iniciativas productivas que generen ingresos y fortalecimiento organizativo local.',
    },
  ],
  referencias: [
    {
      referencia:
        'García, M., & López, R. (2021). Turismo comunitario y desarrollo territorial en América Latina. Editorial Académica.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2020). Guía para el fortalecimiento de modelos de gestión en turismo comunitario. (MinCIT).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2021). Lineamientos de política para el desarrollo del turismo comunitario en Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Política de turismo sostenible.',
      link: '',
    },
    {
      referencia: 'ONU Turismo. (2021). Turismo y comunidades locales.',
      link: '',
    },
    {
      referencia:
        'ONU Turismo. (2023). Panorama del turismo internacional 2023.',
      link: '',
    },
    {
      referencia:
        'ONU Turismo. (2025). Panorama del turismo internacional 2025.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (1993). Ley 99 de 1993, por la cual se crea el Ministerio del Medio Ambiente. Congreso de la República.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (1996). Ley 300 de 1996, Ley General de Turismo. Congreso de la República.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2020). Ley 2068 de 2020, por la cual se modifica la Ley General de Turismo. Congreso de la República.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). Estrategias para el fortalecimiento del emprendimiento comunitario. SENA.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
