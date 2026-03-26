<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/intro.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El turismo comunitario constituye una estrategia de desarrollo territorial que articula las tendencias globales del sector con principios de sostenibilidad, gestión asociativa y emprendimiento (Organización Mundial del Turismo [OMT], 2023). Esta modalidad fomenta el aprovechamiento responsable de los patrimonios naturales, culturales y sociales, permitiendo fortalecer la identidad local y la participación de las poblaciones en sus territorios.
          br
          br
          | Su estudio resulta esencial para que las comunidades identifiquen las oportunidades del sector, autogestionen ingresos y dinamicen la economía local (Ministerio de Comercio, Industria y Turismo [MinCIT], 2020). Asimismo, este enfoque favorece los procesos de organización, formalización y gobernanza orientados al desarrollo sostenible.
    
    p.mb-4 El abordaje pedagógico integra el análisis de conceptos, antecedentes y el marco normativo vigente. De igual forma, contempla el reconocimiento de activos patrimoniales, modelos de gestión y códigos éticos. Estos elementos proporcionan bases sólidas para estructurar iniciativas turísticas pertinentes y responsables. Finalmente, el aprendizaje se orienta a la formulación de propuestas con impacto social, económico y ambiental positivo en los territorios (García & López, 2021).
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
