<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Activos patrimoniales del territorio

    .bg11.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img.d-none.d-lg-block(src='@/assets/curso/Tema5/img01.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .row.p-4
            .col-lg-2
              img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/Tema5/ico.svg', alt='')
            .col-lg-12.text-white
              p Los activos patrimoniales son los recursos tangibles e intangibles que posee un territorio y que pueden contribuir al desarrollo turístico, social y económico. Estos activos constituyen la base para la construcción de experiencias turísticas sostenibles y la valoración del patrimonio local.
              p Según el Ministerio de Comercio, Industria y Turismo, el reconocimiento de los activos territoriales permite fortalecer la identidad cultural y promover el desarrollo local mediante iniciativas responsables (MinCIT, 2021).
    
    p.mb-4(data-aos="zoom-in-left") Identificar los activos patrimoniales del territorio es el primer paso para diseñar una oferta turística comunitaria auténtica, sostenible y diferenciada. Sin ese reconocimiento, no es posible planificar experiencias que generen valor real para la comunidad.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Activos patrimoniales en el turismo comunitario

    ImagenInfografica.color-acento-botones.mb-4(data-aos="zoom-in-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/Tema5/fig1.svg', alt='Diagrama interactivo con seis activos patrimoniales del turismo comunitario distribuidos alrededor de un centro. Activos culturales: tradiciones, expresiones artísticas y gastronomía. Activos físicos: infraestructura, equipamientos y vías de acceso. Activos sociales: organización comunitaria, redes de cooperación y liderazgo local. Activos humanos: conocimientos, habilidades y experiencias. Activos económicos: recursos financieros, actividades productivas y oportunidades de ingresos. Activos ambientales: ecosistemas, paisajes y biodiversidad.')
      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="2" x="50%" y="12%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Activos Humanos
          p Conocimientos, habilidades, experiencias.
      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="5" x="50%" y="82%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Sociales
          p Organización comunitaria, redes de cooperación, liderazgo local.
      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="3" x="84%" y="28%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Activos Físicos
          p Infraestructura, equipamientos, vías de acceso.
      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="1" x="16%" y="29%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Activos Culturales
          p Tradiciones, expresiones artísticas, gastronomía.
      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="4" x="8%" y="66%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Activos Económicos
          p Recursos financieros, actividades productivas, oportunidades de ingresos.
      .tarjeta.row.img-infog.bg4.align-items-center.p-4(numero="6" x="92%" y="66%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido.text-white
          h5 Activos Ambientales
          p Ecosistemas, paisajes, biodiversidad.
    
    
    separador
    #t_5_1.titulo-segundo.mb-2(data-aos="zoom-in-left")
      h2 5.1  Activos culturales, físicos y sociales

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Activos culturales

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="zoom-in-left")
      .col-lg-7.d-flex.mb-4
        .cajon.color-primario.p-4.h-100.d-flex.align-items-center
          div
            p Los activos culturales comprenden las tradiciones, expresiones artísticas, gastronomía, festividades, saberes ancestrales y prácticas comunitarias que configuran la identidad de un territorio. Estos elementos constituyen un componente fundamental del turismo comunitario, al permitir la construcción de experiencias basadas en el intercambio cultural y la valoración del patrimonio inmaterial.
            p La Organización Mundial del Turismo (ONU Turismo, 2021) señala que el patrimonio cultural fortalece el sentido de pertenencia y contribuye a la diversificación de la oferta turística.

      .col-lg-5.d-flex.col-md-8
        img.img-t.h-100(src="@/assets/curso/Tema5/img02.png", alt="Activos culturales")

    p.mb-4 Entre los principales activos culturales se encuentran:

    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
      .tarjeta.bg10.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-4
            img(src='@/assets/curso/Tema5/1.svg' alt='')
        p.text-center Tradiciones y festividades comunitarias.
      .tarjeta.bg10.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-4
            img(src='@/assets/curso/Tema5/2.svg' alt='')
        p.text-center Expresiones artísticas: música, danza, artesanías.

      .tarjeta.bg10.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-4
            img(src='@/assets/curso/Tema5/3.svg' alt='')
        p.text-center Gastronomía local y saberes culinarios.

      .tarjeta.bg10.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-4
            img(src='@/assets/curso/Tema5/4.svg' alt='')
        p.text-center Saberes ancestrales y prácticas tradicionales.

      .tarjeta.bg10.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-4
            img(src='@/assets/curso/Tema5/5.svg' alt='')
        p.text-center Patrimonio histórico, arqueológico y arquitectónico.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Activos físicos 

    .bloque-texto-g.bloque-texto-g--inverso.bg11.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema5/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los activos físicos incluyen la infraestructura, los equipamientos, las vías de acceso, los espacios comunitarios y los recursos materiales disponibles en el territorio. Estos activos permiten el desarrollo de actividades turísticas y facilitan la prestación de servicios.
            br
            br
            | El MinCIT (2022) indica que la identificación de estos recursos es esencial para planificar la oferta turística y garantizar condiciones adecuadas para las personas visitantes y la comunidad.

    p.mb-4 Los activos físicos más relevantes para el turismo comunitario son:

    .row(data-aos="zoom-in-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Infraestructura de alojamiento y alimentación.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Vías de acceso y conectividad.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Equipamientos comunitarios y espacios de encuentro.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Señalización turística y accesibilidad universal.
     
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Activos sociales

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.d-flex.mb-4.col-md-8
        img.img-t.h-100(src="@/assets/curso/Tema5/img04.png", alt="Activos culturales")    
      .col-lg-8.bg3.p-5.text-white
        p Los activos sociales se relacionan con la organización comunitaria, las redes de cooperación, el liderazgo local y la participación social. Estos activos fortalecen la gobernanza y la toma de decisiones colectivas en torno al turismo.
        p La ONU Turismo (2021) destaca que el capital social es determinante para la sostenibilidad de las iniciativas turísticas comunitarias.
           
    p.mb-4 Los principales activos sociales incluyen:    
    
    .row(data-aos="zoom-in-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Organizaciones comunitarias activas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Redes de cooperación entre actores del territorio.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Liderazgo local y capacidad de gestión colectiva.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Participación social en la toma de decisiones.


    separador
    #t_5_2.titulo-segundo.mb-2(data-aos="zoom-in-left")
      h2 5.2  Activos humanos, económicos y ambientales
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Activos humanos

    p Los activos humanos comprenden los conocimientos, habilidades y experiencias de las personas que integran la comunidad. La formación, la transmisión de saberes y el liderazgo son elementos clave para el desarrollo del turismo comunitario.
    p El SENA (2021) resalta la importancia de fortalecer las capacidades humanas para garantizar la calidad de los servicios turísticos y la sostenibilidad de las iniciativas.
    p.mb-4 Los activos humanos más relevantes son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        img(src="@/assets/curso/Tema5/img05.png")

    .row(data-aos="zoom-in-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Conocimientos técnicos en servicios turísticos.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Habilidades en guianza, cocina y artesanías.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Experiencias en gestión comunitaria.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Capacidad de liderazgo y emprendimiento.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Activos económicos

    .bg6.mb-5(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img.d-none.d-lg-block(src='@/assets/curso/Tema5/img06.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .row.p-4
            .col-lg-12.text-white
              p Los activos económicos incluyen los recursos financieros, las actividades productivas y las oportunidades de generación de ingresos vinculadas al turismo. La diversificación económica y la asociatividad contribuyen al fortalecimiento de estos activos (MinCIT, 2022).

    p.mb-4 Entre los activos económicos se destacan:

    .row(data-aos="zoom-in-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Recursos financieros comunitarios y acceso a crédito.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Actividades productivas vinculadas al turismo.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Oportunidades de generación de ingresos diversificados.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Fondos comunitarios y mecanismos de reinversión local.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Activos ambientales
    
    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema5/img07.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los activos ambientales comprenden los ecosistemas, paisajes, biodiversidad y recursos naturales del territorio. Su conservación es fundamental para el desarrollo del turismo sostenible.
            br
            br
            | La ONU Turismo (2021) señala que la protección del entorno natural es un requisito para garantizar la permanencia de los destinos turísticos en el tiempo.


    p Los principales activos ambientales son:

    .row.mb-4(data-aos="zoom-in-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Ecosistemas naturales conservados.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Paisajes y recursos hídricos.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Biodiversidad: flora y fauna.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100.w-100
          p.text-center.mb-0.text-white Recursos naturales renovables del territorio.

    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      h5 Buena práctica
      p Un diagnóstico territorial completo debe identificar los seis tipos de activos patrimoniales. Reconocer tanto los activos tangibles (físicos, económicos, ambientales) como los intangibles (culturales, humanos, sociales) permite diseñar una oferta turística integral y sostenible.




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
