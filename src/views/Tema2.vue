<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Turismo comunitario
    

    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1  Fundamentos del turismo comunitario

    .bg12.mb-2(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img.d-none.d-lg-block(src='@/assets/curso/Tema2/img01.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .row.p-4
            .col-lg-2
              img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/Tema2/ico.svg', alt='')
            .col-lg-12.text-white
              p El turismo comunitario se define como una forma de gestión turística en la que las comunidades locales participan de manera activa en la planificación, operación y distribución de los beneficios derivados de la actividad turística en su territorio. Este modelo promueve el uso sostenible de los recursos naturales y culturales, la preservación de las tradiciones y el fortalecimiento de la economía local mediante la oferta de experiencias auténticas y responsables. Este enfoque reconoce a las comunidades como sujetas de derechos y protagonistas del desarrollo territorial, favoreciendo la toma de decisiones colectiva y la equidad en la distribución de beneficios. Asimismo, promueve relaciones respetuosas entre visitantes y comunidades anfitrionas, basadas en el intercambio cultural, la valoración del patrimonio y la sostenibilidad (MinCIT, 2021).
          
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white ¿Qué es el turismo comunitario?

    .row(data-aos="zoom-in-left")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Gestión local
          p.text-center Las comunidades planifican y operan la actividad turística.


      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Beneficios compartidos
          p.text-center La distribución de ingresos es equitativa y colectiva.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Patrimonio vivo 
          p.text-center  Se preservan recursos naturales, culturales y tradiciones.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Protagonismo comunitario 
          p.text-center La comunidad es sujeta de derechos, no solo proveedora de servicios.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Antecedentes


    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El turismo comunitario surge como respuesta a modelos turísticos tradicionales que concentraban los beneficios económicos en actores externos y generaban impactos negativos en los territorios. En América Latina, este enfoque se consolidó a partir de iniciativas rurales e indígenas orientadas a fortalecer la autonomía comunitaria, la conservación ambiental y la identidad cultural (ONU Turismo, 2021).
          br
          br
          | En Colombia, el turismo comunitario ha sido promovido por entidades gubernamentales, organizaciones sociales y el Servicio Nacional de Aprendizaje (SENA) como una estrategia de desarrollo local sostenible. La política de turismo sostenible y diversos lineamientos institucionales han impulsado la participación comunitaria, la asociatividad y la generación de ingresos mediante actividades turísticas responsables (MinCIT, 2022).
         

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Evolución del turismo comunitario en Colombia

    .tarjeta.fondot2.p-4(data-aos="zoom-in-left")
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1993")
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/Tema2/1.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5 Hito 1
            p Ley 99, base ambiental y desarrollo sostenible.
        
        .row(titulo="2012")
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/Tema2/1.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5 Hito 2
            p Lineamientos de política de turismo comunitario.
        
        .row(titulo="2020")
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/Tema2/1.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5 Hito 3
            p Ley 2068, modifica la Ley General de Turismo.
        
        .row(titulo="2021")
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/Tema2/1.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5 Hito 4
            p Política de turismo sostenible.
        
        .row(titulo="2025")
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/Tema2/1.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5 Hito 5
            p Actualización normativa vigente.
        
  
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Principios

    p.mb-4 El turismo comunitario se orienta por principios que garantizan su coherencia con el desarrollo sostenible. Entre ellos se encuentran la participación comunitaria, la equidad, la sostenibilidad ambiental, el respeto cultural y la inclusión social (MinCIT, 2021).
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 2.
              span Principios del turismo comunitario
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg2 Principio
                    th.bg2.text-izq Descripción
                tbody
                  tr
                    td Participación comunitaria
                    td.text-izq Las decisiones se toman de manera colectiva
                  tr
                    td Equidad
                    td.text-izq Distribución justa de beneficios económicos y sociales
                  tr
                    td Sostenibilidad
                    td.text-izq Uso responsable de recursos naturales y culturales
                  tr
                    td Respeto cultural
                    td.text-izq Valoración de saberes, tradiciones y cosmovisiones
                  tr
                    td Autonomía
                    td.text-izq Fortalecimiento de la gestión local
                  tr
                    td Inclusión
                    td.text-izq Acceso equitativo a oportunidades para todas las personas
      .col-lg-4.col-9.col-md-6
        img(src='@/assets/curso/Tema2/img05.svg', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Características

    p.mb-4 El turismo comunitario presenta características que lo diferencian de otros modelos turísticos:
    
    .fondot2_1.p-5.mb-4
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-3.col-10.mb-3.col-md-5
          img(src="@/assets/curso/Tema2/img06.svg")
        .col-lg-9
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
                .tarjeta.bg9.p-4
                  .row.justify-content-center.mb-3
                    .col-10.col-md-6
                      img(src='@/assets/curso/Tema2/1.svg' alt='')
                  p.text-center Gestión local del territorio
                .tarjeta.bg9.p-4
                  .row.justify-content-center.mb-3
                    .col-10.col-md-6
                      img(src='@/assets/curso/Tema2/2.svg' alt='')
                  p.text-center Participación de organizaciones comunitarias
                
                .tarjeta.bg9.p-4
                  .row.justify-content-center.mb-3
                    .col-10.col-md-6
                      img(src='@/assets/curso/Tema2/2.svg' alt='')
                  p.text-center Escala de operación pequeña o mediana
                
                .tarjeta.bg9.p-4
                  .row.justify-content-center.mb-3
                    .col-10.col-md-6
                      img(src='@/assets/curso/Tema2/2.svg' alt='')
                  p.text-center Integración de actividades culturales y ambientales
                
                .tarjeta.bg9.p-4
                  .row.justify-content-center.mb-3
                    .col-10.col-md-6
                      img(src='@/assets/curso/Tema2/2.svg' alt='')
                  p.text-center Enfoque educativo y de intercambio cultural
                  
                .tarjeta.bg9.p-4
                  .row.justify-content-center.mb-3
                    .col-10.col-md-6
                      img(src='@/assets/curso/Tema2/2.svg' alt='')
                  p.text-center Relación directa entre comunidad y visitantes

    p.mb-1 Estas características permiten generar experiencias auténticas y fortalecer procesos organizativos y productivos en el territorio.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Componentes del turismo comunitario

    p.mb-4 Los principales componentes del turismo comunitario son:
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3 Comunidad
              p Actor principal en la gestión y toma de decisiones.
            .col-md-3.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema2/7.svg', alt='Texto que describa la imagen')
          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema2/8.svg', alt='Texto que describa la imagen')

            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Territorio
              p.text-izq Espacio físico y cultural donde se desarrolla la actividad.

          .row
            .col-md-8.mb-4.mb-md-0.col-lg-10
              h3 Patrimonio natural y cultural
              p Base de la oferta turística.
            .col-md-4.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema2/9.svg', alt='Texto que describa la imagen')
    

          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema2/10.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Organización comunitaria
              p.text-izq Estructura de gestión y coordinación.

          .row
            .col-md-8.mb-4.mb-md-0.col-lg-10
              h3 Servicios turísticos
              p Actividades y productos ofrecidos.
            .col-md-4.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema2/11.svg', alt='Texto que describa la imagen')
          
          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema2/12.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Sostenibilidad
              p.text-izq Criterios ambientales, sociales y económicos.

    p.mb-0 La articulación de estos componentes permite consolidar procesos turísticos integrales y coherentes con el desarrollo territorial.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Objetivo

    p.mb-4 El objetivo del turismo comunitario consiste en generar bienestar colectivo mediante el aprovechamiento responsable de los recursos del territorio, promoviendo la conservación ambiental, el fortalecimiento cultural y la generación de ingresos para la comunidad. Este enfoque busca contribuir a la reducción de brechas sociales y al desarrollo sostenible (MinCIT, 2021).
    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      h5 Punto clave
      p El turismo comunitario no es solo una actividad económica. Es una herramienta de desarrollo territorial que fortalece la identidad, la organización y el bienestar de las comunidades.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Enfoque

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-3.col-8.col-md-6.mb-4
        img(src="@/assets/curso/Tema2/img07.png")
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-3.bg5.p-5.text-white
          .col-lg-12
            p El turismo comunitario se fundamenta en un enfoque territorial, participativo e inclusivo. Este reconoce la importancia de la gobernanza local y de la articulación entre actores comunitarios, institucionales y privados (ONU Turismo, 2021).
            p Asimismo, se promueve la accesibilidad universal como principio transversal. Esto implica que la información turística debe presentarse de manera comprensible para todas las personas, incluyendo descripciones detalladas de los espacios y actividades para quienes utilizan lectores de pantalla o requieren apoyos específicos.
        p.mb-0 El MinCIT (2021) destaca que la planificación turística debe incorporar criterios de sostenibilidad, inclusión y respeto por la diversidad cultural, con el fin de garantizar experiencias responsables y seguras.
    
    img(src='@/assets/curso/Tema7/podcast.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-left")
    .row.justify-content-center.g-0(data-aos="fade-right").mb-2
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.bg12
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
              texto="¿Qué es el turismo comunitario y por qué importa?"
              descripcion="Podcast: Para profundizar en el concepto y la importancia del turismo comunitario, se recomienda escuchar el podcast ¿Qué es el turismo comunitario y por qué importa?"
              :audio="require('@/assets/curso/Tema7/prueba.mp3')"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Buena práctica

    p.mb-0 Toda experiencia de turismo comunitario debe diseñarse garantizando accesibilidad física, comunicacional e informativa para personas con discapacidad. Esto amplía el mercado y fortalece el enfoque inclusivo del territorio.
    separador
    #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.2  Estrategias, impactos y actividades
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Estrategias de turismo comunitario

    p.mb-4 Entre las estrategias para fortalecer el turismo comunitario se destacan las siguientes (ONU Turismo, 2023):

    .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-4
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Formación y capacitación comunitaria.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Fortalecimiento organizativo y asociativo.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Diseño de productos turísticos sostenibles.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Promoción y comercialización responsable.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Articulación con instituciones públicas y privadas.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Implementación de prácticas ambientales sostenibles.
        .col-lg-8.col-10.col-md-8
          img(src="@/assets/curso/Tema2/img08.png")
        
    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      p.text-center Estas estrategias contribuyen a la consolidación de iniciativas turísticas viables y sostenibles en el tiempo (ONU Turismo, 2023).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Impactos del turismo comunitario

    p.mb-4 El turismo comunitario genera impactos positivos en cuatro dimensiones del desarrollo territorial. Se espera que estos impactos fortalezcan las regiones y contribuyan al bienestar colectivo de las comunidades (MinCIT, 2022):

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 3.
              span Impactos positivos del turismo comunitario por dimensión
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-12
                .tabla-a.color-acento-contenido
                  table
                    thead
                      tr
                        th.bg2.w-25 Dimensión
                        th.bg2.text-izq Impactos esperados
                    tbody
                      tr
                        td Social
                        td.text-izq Fortalecimiento del tejido social, mejora en la calidad de vida, gobernanza local y participación comunitaria
                      tr
                        td Económico
                        td.text-izq Generación de ingresos, diversificación productiva, reducción de pobreza y fortalecimiento del emprendimiento
                      tr
                        td Ambiental
                        td.text-izq Conservación de ecosistemas, uso responsable de recursos naturales y conciencia ambiental
                      tr
                        td Cultural
                        td.text-izq Preservación del patrimonio, valoración de saberes ancestrales e identidad territorial
      .col-lg-4.col-9.col-md-6.mb-4
        img(src='@/assets/curso/Tema2/img09.png', alt='')

    .cajon.color-acento-botones.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-4.col-md-3
          img(src="@/assets/curso/Tema2/adv.svg")
        .col-lg-10.text-white
          h5 Advertencia
          p Los impactos pueden volverse negativos si el turismo no se planifica adecuadamente. La gestión irresponsable puede generar sobrecarga ambiental, conflictos sociales o pérdida de identidad cultural. La sostenibilidad debe ser siempre un eje transversal.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Actividades y servicios turísticos

    p.mb-2 El turismo comunitario integra diversas actividades y servicios que corresponden a distintas tipologías turísticas. Estas se estructuran en dos grandes grupos: el turismo de naturaleza y el turismo cultural y creativo (MinCIT, 2022):

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Tipologías de actividades en el turismo comunitario

    TabsC.color-primario(data-aos="zoom-in-left").mb-4
        .py-3.py-md-4(titulo="Turismo de naturaleza ")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-10.col-md-8
              img.mb-3(src='@/assets/curso/Tema2/img10.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              p Ecoturismo (experiencias en ecosistemas conservados), turismo rural (vida campesina y agropecuaria), senderismo (recorridos guiados en entornos naturales), avistamiento de fauna y flora, actividades de educación ambiental. 

        
        .py-3.py-md-4(titulo="Turismo cultural y creativo ")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-10.col-md-8
              img.mb-3(src='@/assets/curso/Tema2/img11.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              p Etnoturismo (inmersión en culturas indígenas y afrodescendientes), artesanías (procesos de elaboración tradicional), gastronomía local, música y danza, manifestaciones religiosas, históricas, arqueológicas y arquitectónicas. 


    p Todas las actividades deben desarrollarse con un enfoque de accesibilidad e inclusión, garantizando la participación de todas las personas, incluidas aquellas con discapacidad visual u otras necesidades específicas.

    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      h5 Buena práctica
      p Al diseñar actividades turísticas comunitarias, se debe incorporar siempre descripciones auditivas de los entornos naturales y culturales. Esto garantiza experiencias enriquecedoras para personas con discapacidad visual y fortalece el enfoque inclusivo del destino.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Modalidades de turismo: concepto y clasificación

    p.mb-2 El turismo se entiende como el conjunto de actividades que desarrollan las personas cuando se desplazan y permanecen temporalmente en lugares diferentes a su entorno habitual, por un período continuo menor a un año, con propósitos de recreación, negocios u otros motivos asociados al viaje. Estas actividades se caracterizan por no involucrar la realización de labores remuneradas en el destino visitado. Conocer las modalidades de turismo permite identificar tipologías, diseñar políticas y medir flujos de visitantes. También facilita la toma de decisiones basada en evidencias a nivel local, nacional e internacional (ONU Turismo, 2023).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Clasificación del turismo según ONU Turismo

    .tarjeta.bg10.p-5.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Turismo de aventura
            p Actividades físicas en entornos naturales como senderismo, #[em rafting], escalada y buceo. Puede implicar riesgo real o percibido.
            h5 Turismo de bienestar
            p Viajes orientados a mejorar la salud física, mental y emocional mediante relajación, alimentación saludable y cuidado personal.
            h5 Turismo costero, marítimo y de aguas interiores
            p Actividades en costas, mares, ríos y lagos: natación, surf, cruceros, navegación y deportes náuticos.
          .col-md-6
            figure
              img.img-t(src='@/assets/curso/Tema2/01.png', alt='Turismo de aventura')

        .row.justify-content-center.mt-5
          .col-lg-6.mb-4.mb-md-0
            h5 Turismo cultural
            p Viajes motivados por aprender y vivir el patrimonio cultural: artes, arquitectura, gastronomía, música y tradiciones.
            h5 Turismo deportivo
            p Viajes para observar o participar activamente en eventos deportivos competitivos, comerciales o no comerciales.
            h5 Turismo educativo
            p Viajes con propósito de aprendizaje: estudios académicos, viajes escolares, cursos de idiomas y desarrollo de habilidades.
          .col-md-6
            figure
              img.img-t(src='@/assets/curso/Tema2/02.png', alt='Turismo cultural')

        .row.justify-content-center.mt-5
          .col-lg-6.mb-4.mb-md-0
            h5 Turismo emisor
            p Actividades de visitantes residentes en el país de referencia que viajan hacia otros países como destino.
            h5 Turismo gastronómico
            p Viajes vinculados a experiencias culinarias: productos locales, festivales gastronómicos, clases de cocina y enoturismo.
            h5 Turismo interior
            p Combina el turismo interno y el receptor: visitantes residentes y no residentes que viajan dentro del país.
          .col-md-6
            figure
              img.img-t(src='@/assets/curso/Tema2/03.png', alt='Turismo gastronómico')

        .row.justify-content-center.mt-5
          .col-lg-6.mb-4.mb-md-0
            h5 Turismo internacional
            p Viajes de residentes al exterior (emisor) y de visitantes extranjeros al país de referencia (receptor).
            h5 Turismo interno
            p Actividades de visitantes residentes que viajan dentro de su propio país de referencia.
            h5 Turismo médico
            p Viajes para acceder a servicios de salud: diagnóstico, tratamiento, rehabilitación y procedimientos médicos.
          .col-md-6
            figure
              img.img-t(src='@/assets/curso/Tema2/04.png', alt='Turismo médico')

        .row.justify-content-center.mt-5
          .col-lg-6.mb-4.mb-md-0
            h5 Turismo de montaña
            p Actividades de ocio y deporte en colinas y montañas, aprovechando el paisaje, clima y biodiversidad del entorno.
            h5 Turismo nacional
            p Actividades de residentes que viajan tanto dentro como fuera de su país de referencia.
            h5 Turismo de negocios
            p Viajes por motivos profesionales para asistir a reuniones, congresos, ferias o eventos de la industria de reuniones.
          .col-md-6
            figure
              img.img-t(src='@/assets/curso/Tema2/05.png', alt='Turismo de montaña')

        .row.justify-content-center.mt-5
          .col-lg-6.mb-4.mb-md-0
            h5 Turismo receptor
            p Actividades de visitantes no residentes que llegan al país de referencia desde el exterior.
            h5 Turismo rural
            p Experiencias en entornos rurales de baja densidad poblacional, vinculadas a la agricultura, naturaleza y formas de vida tradicionales.
            h5 Turismo de salud
            p Viajes orientados al bienestar físico, mental o espiritual mediante actividades médicas y de bienestar. Incluye el turismo médico y de bienestar.
          .col-md-6
            figure
              img.img-t(src='@/assets/curso/Tema2/06.png', alt='Turismo rural')
     
    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      p La clasificación del turismo es fundamental porque permite identificar las distintas tipologías y orientar acciones que protejan el ambiente, respeten las culturas locales y promuevan beneficios económicos equitativos para las comunidades anfitrionas. Asimismo, facilita a los gobiernos, organizaciones y actores del sector diseñar políticas, planes y proyectos acordes con las características de cada modalidad y con las necesidades del territorio (ONU Turismo, 2023).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Marco normativo del turismo comunitario vigente en Colombia

    p.mb-2 En Colombia, el marco normativo del turismo comunitario se inicia con los lineamientos de política para su desarrollo, establecidos en 2012. Estos lineamientos se fundamentan en la Ley 99 de 1993, que define el desarrollo sostenible como:

    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-4.col-md-3
          img(src="@/assets/curso/Tema3/img07.svg")
        .col-lg-10
          h5 Definición legal — Ley 99 de 1993, artículo 3
          p "...el que conduzca al crecimiento económico, a la elevación de la calidad de la vida y al bienestar social, sin agotar la base de recursos naturales renovables en que se sustenta, ni deteriorar el medio ambiente o el derecho de las generaciones futuras a utilizarlo para la satisfacción de sus propias necesidades."

    .bg12.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img.d-none.d-lg-block(src='@/assets/curso/Tema2/img12.png', alt='')
        .col-lg-7(data-aos="fade-left").text-white.p-4
          p Para prestar servicios turísticos en Colombia, los prestadores deben inscribirse en el Registro Nacional de Turismo (RNT), requisito obligatorio para operar legalmente conforme a la Ley 300 de 1996 y sus modificaciones. Este registro se realiza de manera virtual y gratuita a través de la cámara de comercio correspondiente y permite acceder a programas de apoyo institucional, procesos de capacitación y mercados formales. A continuación, se presentan los requisitos y pasos para completar este trámite.

    .row.mb-4(data-aos="zoom-in-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/Tema2/001.svg' alt='')
          .tarjeta.bg9.text-center
            .p-4
              h5 Obtener registro mercantil vigente
              p.mb-0 Tramitarlo ante la Cámara de Comercio de la jurisdicción donde esté ubicado el operador de turismo.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/Tema2/002.svg' alt='')
          .tarjeta.bg9.text-center
            .p-4
              h5 Tener la cédula del representante legal
              p.mb-0 Documento de identidad vigente del responsable legal de la organización.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/Tema2/003.svg' alt='')
          .tarjeta.bg9.text-center
            .p-4
              h5 Ingresar a la plataforma RNT
              p.mb-0 Acceder a rnt.confecamaras.co. El trámite es 100 % virtual y gratuito.

    .row(data-aos="zoom-in-left")
      .col-md-6.mb-5.mb-md-0
        .tarjeta-avatar
          img(src='@/assets/curso/Tema2/004.svg' alt='')
          .tarjeta.bg9.text-center
            .p-4
              h5 Declarar información técnica y financiera
              p.mb-0 Diligenciar los formularios con los datos de la organización y sus servicios.

      .col-md-6
        .tarjeta-avatar
          img(src='@/assets/curso/Tema2/005.svg' alt='')
          .tarjeta.bg9.text-center
            .p-4
              h5 Cumplir los requisitos obligatorios
              p.mb-0 Adherirse al código de conducta para la prevención de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes (ESCNNA) y cumplir la norma técnica sectorial de sostenibilidad vigente.

        










</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
