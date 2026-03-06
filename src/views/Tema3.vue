<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sostenibilidad y turismo

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El concepto actual de sostenibilidad tiene su origen en el informe Nuestro futuro común, publicado por la Comisión Mundial sobre el Medio Ambiente y el Desarrollo (1987). Este documento define el desarrollo sostenible como aquel que satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades.
          br
          br
          | Este concepto articula de manera equilibrada las dimensiones ambiental, social y económica. Promueve el uso responsable de los recursos naturales, la equidad en el acceso a oportunidades y el fortalecimiento de procesos productivos viables en el largo plazo.

    p.mb-4 En 2012, la conferencia de las Naciones Unidas sobre Desarrollo Sostenible (Río de Janeiro) dio origen a los 17 Objetivos de Desarrollo Sostenible (ODS). A través de ellos, las naciones generan acciones para:

    .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Enfrentar los efectos del cambio climático con gestión responsable de recursos naturales.

            li.d-flex
              i.fas.fa-folder
              p.mb-0 Promover la igualdad de género y fortalecer condiciones integrales de salud.

            li.d-flex
              i.fas.fa-folder
              p.mb-0 Impulsar la paz y consolidar sociedades incluyentes que reduzcan desigualdades.

            li.d-flex
              i.fas.fa-folder
              p.mb-0 Mejorar la calidad de vida de las generaciones presentes y futuras.
           
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema3/img02.png")

    p.mb-3 El desarrollo sostenible no surgió de un día para otro. Su evolución ha sido el resultado de décadas de acuerdos internacionales y compromisos globales. La siguiente línea de tiempo muestra los hitos más importantes de este proceso:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white De Brundtland a los ODS: evolución del desarrollo sostenible

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-8
        LineaTiempoE.color-primario
          .row.justify-content-center.align-items-center(titulo="Hito 1" subtitulo="1987")
            .col-lg-3.mb-4.mb-lg-0.col-4
              figure
                img(src='@/assets/curso/Tema3/img03.svg', alt='Texto que describa la imagen')
            .col-lg-9
              p Informe Brundtland. Primer concepto formal de desarrollo sostenible.
            
          .row.justify-content-center.align-items-center(titulo="Hito 2" subtitulo="1992")
            .col-lg-3.mb-4.mb-lg-0.col-4
              figure
                img(src='@/assets/curso/Tema3/img04.svg', alt='Texto que describa la imagen')
            .col-lg-9
              p Cumbre de la Tierra, Río de Janeiro. Agenda 21 y compromisos ambientales globales.
          
          .row.justify-content-center.align-items-center(titulo="Hito 3" subtitulo="2012")
            .col-lg-3.mb-4.mb-lg-0.col-4
              figure
                img(src='@/assets/curso/Tema3/img05.svg', alt='Texto que describa la imagen')
            .col-lg-9
              p Conferencia Río+20. Impulso al proceso de formulación de los Objetivos de Desarrollo Sostenible (ODS).
          
          .row.justify-content-center.align-items-center(titulo="Hito 4" subtitulo="2015")
            .col-lg-3.mb-4.mb-lg-0.col-4
              figure
                img(src='@/assets/curso/Tema3/img06.svg', alt='Texto que describa la imagen')
            .col-lg-9
              p Agenda 2030. Adopción oficial de los ODS por las Naciones Unidas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Objetivos de Desarrollo Sostenible (ODS)

    p.mb-4 Para profundizar en los Objetivos de Desarrollo Sostenible (ODS) y su relación con el turismo comunitario, se recomienda consultar el video Los Objetivos de Desarrollo Sostenible.
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_oj2vI5DwFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Conceptos de desarrollo sostenible y educación ambiental

    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1  Concepto, importancia y principios

    p El artículo 2 de la Ley 2068 de 2020, que modifica la Ley General de Turismo, establece los principios del desarrollo turístico. En su numeral 9, reconoce el desarrollo sostenible y concibe la actividad turística como un derecho social de todas las personas, orientado al bienestar humano. Este desarrollo debe observar los principios de sostenibilidad definidos en el artículo 3 de la Ley 99 de 1993.
    
    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-4.col-md-3
          img(src="@/assets/curso/Tema3/img07.svg")
        .col-lg-10
          h5 Definición legal. Ley 99 de 1993, artículo 3
          p El desarrollo sostenible es aquel que conduzca al crecimiento económico, a la elevación de la calidad de la vida y al bienestar social, sin agotar la base de recursos naturales renovables en que se sustenta, ni deteriorar el medio ambiente o el derecho de las generaciones futuras a utilizarlo para la satisfacción de sus propias necesidades.
    
    p En este marco, la actividad turística debe propender por la conservación e integración del patrimonio cultural, natural y social. Asimismo, debe contribuir al mejoramiento de la calidad de vida de las comunidades locales o receptoras, promoviendo:

    .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-folder
              p.mb-0 El bienestar social y el crecimiento económico del territorio.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 La satisfacción de quienes visitan el destino.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 El uso responsable de los recursos naturales sin deteriorar el ambiente.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 La protección del derecho de las generaciones futuras al aprovechamiento de los recursos.
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema3/img09.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Pilares y principios de la sostenibilidad en el turismo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg2 Pilar
                th.bg2 Principio
                th.bg2.text-izq Descripción
            tbody
              tr
                th(rowspan="2") Gestión ambiental y preservación
                td Uso responsable de recursos
                td.text-izq Aprovechamiento adecuado del entorno natural y cultural.
              tr
                td Conservación y prevención
                td.text-izq Proteger el patrimonio natural reduciendo los impactos negativos.
              tr
                th(rowspan="2") Compromiso social y ético
                td Equidad
                td.text-izq Garantizar el acceso justo a oportunidades para todas las personas.
              tr
                td Responsabilidad intergeneracional
                td.text-izq Asegurar que las generaciones futuras cuenten con los recursos necesarios.

    separador
    #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.2  Relación con el turismo


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Las tres dimensiones del turismo sostenible

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La sostenibilidad turística se fundamenta en la articulación equilibrada de tres dimensiones interdependientes: la ambiental, la sociocultural y la económica, cuya integración garantiza la permanencia de la actividad turística en el largo plazo en los distintos destinos. El turismo sostenible no constituye una modalidad específica, sino un enfoque de gestión aplicable a cualquier tipo de turismo. En este sentido, toda iniciativa de turismo comunitario debe incorporar de manera coherente estas tres dimensiones para asegurar su viabilidad económica, la conservación de los recursos naturales y culturales, y el fortalecimiento del tejido social del territorio.
          br
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 5.
          span Dimensiones del turismo sostenible y sus compromisos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg2 Dimensión
                th.bg2 Compromiso principal
                th.bg2.text-izq Ejemplo de acción
            tbody
              tr
                td Ambiental
                td Preservar ecosistemas y biodiversidad.
                td.text-izq Senderos ecológicos con límite de visitantes.
              tr
                td Sociocultural
                td Conservar patrimonio y promover respeto intercultural.
                td.text-izq Festivales culturales comunitarios con protocolo de visitantes.
              tr
                td Económica
                td Distribuir beneficios de forma equitativa.
                td.text-izq Fondos comunitarios con reinversión local.




































</template>

<script>
export default {
  name: 'Tema3',
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
