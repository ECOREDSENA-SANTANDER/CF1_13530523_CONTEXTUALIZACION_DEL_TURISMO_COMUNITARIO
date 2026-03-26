<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Tendencias turísticas mundiales
        
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 De acuerdo con la ONU Turismo (2025) el sector turístico mantuvo una trayectoria ascendente a pesar de la inflación en los servicios y la incertidumbre por conflictos geopolíticos. Las proyecciones sugieren que esta tendencia persistirá, impulsada por la estabilidad económica global. Este escenario favorecerá la recuperación de las regiones más apartadas y permitirá superar los niveles de 2019, año referente de la última década.
            br
            br
         
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Llegadas turísticas internacionales por región, 2025.
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.bg2 Región
                  th.bg2 Llegadas
                  th.bg2 Variación respecto a 2024
                  th.bg2 Dato destacado
              tbody
                tr
                  td Europa
                  td 793 millones
                  td +4 %
                  td Zona central y oriental: +6 %
                tr
                  td Las Américas
                  td 218 millones
                  td Sudamérica +7 %
                  td Leve desaceleración en segundo semestre
                tr
                  td África
                  td 81 millones
                  td +8 %
                  td Norte de África: +11 %
                tr
                  td Oriente Medio
                  td ~100 millones
                  td +3 %
                  td +39 % frente a 2019 – máximo histórico
                tr
                  td Asia y el Pacífico
                  td 331 millones
                  td +6 %
                  td Noreste de Asia +13 %

























  </template>

<script>
export default {
  name: 'Tema1',
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
