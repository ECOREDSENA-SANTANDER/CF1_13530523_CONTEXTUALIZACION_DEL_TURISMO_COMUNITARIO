<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El turismo comunitario constituye una estrategia de desarrollo territorial que articula la sostenibilidad, la participación comunitaria y el emprendimiento responsable. Su comprensión exige reconocer las tendencias globales del sector, los activos patrimoniales del territorio y los modelos de gestión que permiten a las comunidades convertirse en protagonistas de su propio desarrollo. La formalización, la ética y los lineamientos de política pública consolidan este enfoque como una alternativa viable, equitativa e incluyente para el desarrollo local sostenible.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt=" Infografía titulada “Turismo comunitario: fundamentos y diagnóstico territorial”. Presenta un diagrama vertical que organiza el contenido en seis apartados secuenciales: se fundamenta en tendencias turísticas mundiales, sostenibilidad ambiental, sociocultural y económica, y en el marco normativo como el RNT y la Ley 300; se define como la participación activa de la comunidad en la gestión del territorio y la distribución de beneficios; se orienta por principios de equidad, inclusión y autonomía, así como por el Código Mundial de Ética para el Turismo; requiere un diagnóstico territorial basado en los activos patrimoniales culturales, físicos, sociales, humanos, económicos y ambientales, y en el nivel de organización comunitaria; se gestiona mediante modelos organizativos como cooperativas, asociaciones o formas comunitarias; y se fortalece con el emprendimiento y la formalización a través del Registro Mercantil, el RUT y el RNT.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
