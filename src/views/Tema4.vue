<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelos de gestión comunitaria

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema4/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Para el desarrollo del turismo comunitario es fundamental que las comunidades se organicen para la operación de los diferentes servicios turísticos que pueden ofrecer. Existen diversas formas de gestión que permiten estructurar esta organización de manera formal y sostenible.
            br
            br
    p.mb-4 A continuación se relacionan los principales tipos:
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Tipos de gestión para el turismo comunitario

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Cooperativa")
        .col-lg-6.mb-2.mb-md-0
          p Organización basada en la propiedad colectiva, la participación democrática y la distribución equitativa de beneficios.
        .col-lg-5.col-md-8.col-10 
          figure
            img(src='@/assets/curso/Tema4/1.png', alt='')
      .row.justify-content-center(titulo="Asociativa")
        .col-lg-6.mb-2.mb-md-0
          p Unión voluntaria de personas o entidades que comparten intereses comunes para desarrollar actividades productivas o sociales.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema4/2.png', alt='')
      
      .row.justify-content-center(titulo="Comunitaria")
        .col-lg-6.mb-2.mb-md-0
          p Modelo liderado por la comunidad local, orientado al bienestar colectivo y al aprovechamiento sostenible del territorio.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema4/3.png', alt='')
      
      .row.justify-content-center(titulo="<i>Joint venture</i>")
        .col-lg-6.mb-2.mb-md-0
          p Alianza estratégica entre dos o más organizaciones para desarrollar un proyecto específico, compartiendo riesgos y beneficios.
        .col-lg-5.col-md-8.col-10  
          figure
            img(src='@/assets/curso/Tema4/4.png', alt='')
      
      .row.justify-content-center(titulo="Consorcio")
        .col-lg-6.mb-2.mb-md-0
          p Acuerdo temporal entre varias entidades para ejecutar conjuntamente una actividad o contrato determinado.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema4/5.png', alt='')
      
      .row.justify-content-center(titulo="Multifamiliar")
        .col-lg-6.mb-2.mb-md-0
          p Iniciativa gestionada por varias familias que integran recursos, trabajo y beneficios en un mismo proyecto.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema4/6.png', alt='')
      .row.justify-content-center(titulo="Fundación")
        .col-lg-6.mb-2.mb-md-0
          p Entidad sin ánimo de lucro orientada a fines sociales, culturales, ambientales o educativos.
        .col-lg-5.col-md-8.col-10
          figure
            img(src='@/assets/curso/Tema4/7.png', alt='')
    
    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      h5 Punto clave
      p No existe un modelo único de gestión para el turismo comunitario. La elección depende del tamaño de la comunidad, sus recursos y sus objetivos. Lo fundamental es que garantice participación, equidad y sostenibilidad.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Modelo de gestión del turismo comunitario

    p El modelo de gestión del turismo comunitario integra condiciones organizativas, recursos del territorio y estrategias de mercado para el desarrollo de iniciativas sostenibles. Este modelo se estructura en tres componentes fundamentales que deben articularse de manera equilibrada:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Componentes del modelo de gestión del turismo comunitario

    TabsA.color-acento-botones(data-aos="zoom-in-left").mb-3
      .tarjeta.color-acento-botones--borde.p-4(titulo="Condiciones básicas de la comunidad")
        p Organización comunitaria, participación social, liderazgo local, identificación de activos patrimoniales e interés en el desarrollo turístico. Según el MinCIT (2021), la participación activa de la comunidad es esencial para la sostenibilidad de las iniciativas turísticas.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Elementos clave de la oferta")
        p Recursos naturales y culturales, servicios turísticos, infraestructura, talento humano y experiencias turísticas. La ONU Turismo señala que la oferta turística debe responder a las características del territorio y a la capacidad de la comunidad. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Elementos clave de la demanda")
        p Perfil de visitantes, motivaciones de viaje, tendencias de mercado, accesibilidad y expectativas de experiencia. La comprensión de la demanda permite diseñar productos turísticos pertinentes y sostenibles (MinCIT, 2022).
  
    p.mb-4 Un modelo de gestión exitoso articula los tres componentes: comunidad organizada, oferta estructurada y conocimiento de la demanda. La debilidad en cualquiera de estos frentes compromete la sostenibilidad de la iniciativa turística.













</template>

<script>
export default {
  name: 'Tema4',
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
