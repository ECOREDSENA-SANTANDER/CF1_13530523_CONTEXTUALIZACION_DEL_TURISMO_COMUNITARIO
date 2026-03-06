<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Ética y estrategia turística

    .bloque-texto-g.bloque-texto-g--inverso.bg11.p-3.p-sm-4.p-md-5.mb-2(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema7/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La ética y la estrategia son dos pilares que orientan el desarrollo responsable del turismo comunitario. Mientras la ética establece los principios que deben guiar el comportamiento de todos los actores, la estrategia define los lineamientos de política pública para fortalecer el sector.
            br
            br
    separador
    #t_7_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 7.1  Código mundial de ética

    p.mb-2 El Código Mundial de Ética para el Turismo establece principios y normas que orientan el comportamiento de las personas y organizaciones involucradas en la actividad turística. La ONU Turismo (2021) señala que este código promueve relaciones respetuosas entre visitantes y comunidades anfitrionas. 

    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Componentes del Código Mundial de Ética para el Turismo

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row.justify-content-center(titulo="Respeto por la cultura y la comunidad ")
        .col-lg-6.mb-2.mb-md-0
          p Valorar y preservar las expresiones culturales y los modos de vida de las comunidades anfitrionas. 
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema7/1.png', alt='')
      .row.justify-content-center(titulo="Conservación del entorno natural ")
        .col-lg-6.mb-2.mb-md-0
          p Proteger los ecosistemas y recursos naturales que sustentan la actividad turística.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema7/2.png', alt='')
      
      .row.justify-content-center(titulo="Uso responsable de los recursos")
        .col-lg-6.mb-2.mb-md-0
          p Gestionar de manera eficiente y sostenible los recursos del territorio.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema7/3.png', alt='')
      
      .row.justify-content-center(titulo="Trato digno e inclusivo ")
        .col-lg-6.mb-2.mb-md-0
          p Garantizar el respeto y la inclusión de todas las personas en la experiencia turística.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema7/4.png', alt='')
      
      .row.justify-content-center(titulo="Transparencia en la gestión ")
        .col-lg-6.mb-2.mb-md-0
          p Actuar con honestidad y claridad en todos los procesos organizativos y comerciales.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema7/5.png', alt='')
      
      .row.justify-content-center(titulo="Seguridad y bienestar de las personas visitantes ")
        .col-lg-6.mb-2.mb-md-0
          p Asegurar condiciones de seguridad física y emocional durante toda la experiencia.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema7/6.png', alt='')
    
    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      h5 Punto clave
      p El Código Mundial de Ética para el Turismo no es solo una declaración de intenciones. Es una guía práctica que orienta decisiones concretas en la gestión turística comunitaria, desde el diseño de experiencias hasta la relación con las personas visitantes.
     
    .tarjeta.bg9.p-4.mb-2(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema7/web.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Código Mundial de Ética para el Turismo. ONU Turismo
              p.mb-0 Para ampliar la información sobre los principios éticos del turismo, se recomienda consultar el documento oficial de la ONU Turismo:
            .col-sm-auto
              a.boton.bg7(href="https://www.untourism.int/es/codigo-etico-mundial-para-el-turismo" target="_blank")
                span Enlace web
                i.fas.fa-link

    separador
    #t_7_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 7.2  Estrategia de turismo comunitario
    
    p La estrategia de turismo comunitario se fundamenta en lineamientos de política pública orientados al desarrollo sostenible del sector. En Colombia, estos lineamientos buscan fortalecer la participación comunitaria, la formalización, la sostenibilidad y la competitividad de las iniciativas turísticas (MinCIT, 2021).
    p.mb-3 El MinCIT (2022) señala que estas acciones permiten consolidar el turismo comunitario como una estrategia de desarrollo territorial. Los lineamientos de la Política de Turismo Comunitario son:

    .row.justify-content-start.mb-2(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Lineamientos de la Política de Turismo Comunitario en Colombia


    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3 Fortalecimiento organizativo 
              p Apoyo a la consolidación de organizaciones comunitarias con capacidad de gestionar iniciativas turísticas sostenibles.
            .col-md-3.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema7/1.svg', alt='Texto que describa la imagen')
          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema7/3.svg', alt='Texto que describa la imagen')

            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Formación y capacitación
              p.text-izq Desarrollo de competencias técnicas, administrativas y de servicio al cliente en las comunidades que lideran el turismo.

          .row
            .col-md-8.mb-4.mb-md-0.col-lg-10
              h3 Promoción del turismo sostenible
              p Impulso a prácticas turísticas que protejan el patrimonio natural, cultural y social del territorio.
            .col-md-4.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema7/4.svg', alt='Texto que describa la imagen')
    

          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema7/5.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Articulación institucional
              p.text-izq Coordinación entre entidades públicas, privadas y comunitarias para el desarrollo integral del turismo.

          .row
            .col-md-8.mb-4.mb-md-0.col-lg-10
              h3 Conservación del patrimonio
              p Protección y valoración de los activos culturales, naturales y sociales como base de la oferta turística.
            .col-md-4.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema7/6.svg', alt='Texto que describa la imagen')
          
          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema7/2.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Inclusión social
              p.text-izq Garantía de participación equitativa de todos los miembros de la comunidad, con énfasis en poblaciones vulnerables.

    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      p El turismo comunitario es un sistema dinámico que integra diferentes actores y elementos del territorio. La siguiente tabla describe los componentes clave de esta dinámica y el rol que cumple cada uno:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6.
          span Dinámica del turismo comunitario
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg2 Elemento
                th.bg2 Descripción
            tbody
              tr
                td Turismo comunitario (centro)
                td.text-izq Concepto integrador que articula los elementos de la dinámica territorial, económica y sociocultural del turismo en el ámbito comunitario.
              tr
                td Comunidad
                td.text-izq Establece normas, roles y funciones. Participa directa o indirectamente en la planificación, gestión y prestación de actividades turísticas.
              tr
                td Cadena de valor del turismo
                td.text-izq Forma de organización que integra a los proveedores de productos y servicios que intervienen en la experiencia turística, desde la producción hasta la comercialización.
              tr
                td Emprendimiento
                td.text-izq Conjunto de variables y factores que intervienen en la creación y consolidación de una empresa turística, orientada a la identificación de oportunidades y al liderazgo local.
              tr
                td Oferta de servicios y experiencias
                td.text-izq Actividades turísticas, culturales, agropecuarias, pesqueras y ambientales que brindan servicios o experiencias vinculadas al territorio y a la identidad comunitaria.
              tr
                td Organización de Base Comunitaria (OBC)
                td.text-izq Agrupación colectiva integrada por diversas iniciativas y emprendimientos locales que ofrecen servicios o experiencias turísticas de base comunitaria.

    p.mb-4 El turismo comunitario se define fundamentalmente por el papel activo de la población local, que deja de ser un simple proveedor de servicios para convertirse en la gestora directa de su propio territorio. Esta dinámica se logra mediante la construcción de una cadena de valor que integra los saberes ancestrales y las riquezas ambientales con experiencias turísticas auténticas.

    img(src='@/assets/curso/Tema7/podcast.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-left")
    .row.justify-content-center.g-0(data-aos="fade-right").mb-4
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.bg12
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
              texto="Ética y estrategia: los pilares del turismo responsable."
              descripcion="Podcast: Para reflexionar sobre la ética y la estrategia en el turismo comunitario, se recomienda escuchar el podcast Ética y estrategia: los pilares del turismo responsable."
              :audio="require('@/assets/curso/Tema7/prueba.mp3')"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


























</template>

<script>
export default {
  name: 'Tema5',
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
