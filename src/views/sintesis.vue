<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El turismo comunitario constituye una estrategia de desarrollo territorial que articula la sostenibilidad, la participación comunitaria y el emprendimiento responsable. Su comprensión exige reconocer las tendencias globales del sector, los activos patrimoniales del territorio y los modelos de gestión que permiten a las comunidades convertirse en protagonistas de su propio desarrollo. La formalización, la ética y los lineamientos de política pública consolidan este enfoque como una alternativa viable, equitativa e incluyente para el desarrollo local sostenible.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de flujo titulado “Fundamentos para la siembra y establecimiento de cultivos urbanos”. Del título principal se desprenden dos ramas. En la rama izquierda aparece el subtítulo “Fundamentos para la preparación de la siembra”, seguido en secuencia por los temas: Equipos y herramientas de siembra, Insumos agrícolas, Agroinsumos, Fundamentos de la siembra y Condiciones edafoclimáticas. En la rama derecha aparece el subtítulo “Establecimiento del cultivo en contenedores”, seguido de Siembra en agricultura urbana, con los subtemas técnicas y profundidad, densidad y distancia; luego Línea de siembra, con los subtemas técnicas de trazado, técnicas de marcación, criterios de orientación y ventilación; y finalmente Relación suelo-clima-cultivo, con los subtemas aplicación en agricultura urbana, control de sombra, manejo del riego y control de ventilación.")
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
