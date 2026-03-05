<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Emprendimiento y formalización

    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema6/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El emprendimiento se entiende como la capacidad de identificar oportunidades, desarrollar ideas innovadoras y gestionar proyectos productivos. En el contexto del turismo comunitario, el emprendimiento contribuye a la generación de ingresos, la diversificación económica y el fortalecimiento organizativo.
            br
            br

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Características del emprendimiento

    p.mb-4 El SENA (2021) señala que el emprendimiento comunitario fortalece la autonomía económica y promueve la participación en la economía local. Las principales características que lo definen son:


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta--container.row.mb-3
          .col-md.tarjeta.bg8.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/1.svg', alt='Texto que describa la imagen')          
            h3.text-center Innovación y creatividad 
            p.text-center Capacidad de generar ideas nuevas y soluciones originales. 

          .col-md.tarjeta.bg9.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/2.svg', alt='Texto que describa la imagen')          
            h3.text-center Identificación de oportunidades 
            p.text-center Habilidad para reconocer necesidades del mercado y del territorio. 

          .col-md.tarjeta.bg10.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/3.svg', alt='Texto que describa la imagen')          
            h3.text-center Gestión de recursos 
            p.text-center Uso eficiente del tiempo, el dinero y el talento humano. 

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .tarjeta--container.row.mb-3
          .col-md.tarjeta.bg5.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/4.svg', alt='Texto que describa la imagen')          
            h3.text-center.text-white Innovación y creatividad 
            p.text-center.text-white Capacidad de generar ideas nuevas y soluciones originales. 

          .col-md.tarjeta.bg6.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/5.svg', alt='Texto que describa la imagen')          
            h3.text-center.text-white Identificación de oportunidades 
            p.text-center.text-white Habilidad para reconocer necesidades del mercado y del territorio. 

          .col-md.tarjeta.bg7.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/6.svg', alt='Texto que describa la imagen')          
            h3.text-center Gestión de recursos 
            p.text-center Uso eficiente del tiempo, el dinero y el talento humano. 




















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
