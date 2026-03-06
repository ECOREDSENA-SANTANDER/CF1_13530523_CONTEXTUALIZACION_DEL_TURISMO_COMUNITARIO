<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Emprendimiento y formalización

    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-2(data-aos="zoom-in-left")
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


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
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

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        .tarjeta--container.row.mb-3
          .col-md.tarjeta.bg5.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/4.svg', alt='Texto que describa la imagen')          
            h3.text-center.text-white Trabajo colaborativo 
            p.text-center.text-white Capacidad de trabajar en equipo hacia objetivos comunes.

          .col-md.tarjeta.bg6.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/5.svg', alt='Texto que describa la imagen')          
            h3.text-center.text-white Enfoque sostenible   
            p.text-center.text-white Orientación hacia prácticas responsables con el ambiente y la comunidad.

          .col-md.tarjeta.bg7.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/Tema6/6.svg', alt='Texto que describa la imagen')          
            h3.text-center Responsabilidad social  
            p.text-center Compromiso con el bienestar colectivo y el territorio.

    .tarjeta.bg9.p-4.mb-2(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema6/cartilla.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Cartilla de emprendimiento SENA
              p.mb-0 Para ampliar la información sobre esta temática, se recomienda consultar la cartilla de emprendimiento disponible en el repositorio del SENA en el siguiente enlace:
            .col-sm-auto
              a.boton.bg7(href="https://repositorio.sena.edu.co/handle/11404/4646" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Trámites y formalización

    p Los procesos de formalización permiten que las iniciativas turísticas operen de manera legal y organizada. El MinCIT (2022) indica que la formalización facilita el acceso a programas de apoyo, capacitación y financiamiento.
    p.mb-2 Para formalizar una iniciativa de turismo comunitario en Colombia se deben adelantar los siguientes trámites:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Trámites para la formalización turística en Colombia

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3 Registro en Cámara de Comercio
              p Obtener el registro mercantil que acredita la existencia legal de la organización.
            .col-md-3.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema6/paso1.svg', alt='Texto que describa la imagen')
          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema6/paso2.svg', alt='Texto que describa la imagen')

            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Inscripción en el RUT
              p.text-izq Registrarse ante la DIAN para obtener el número de identificación tributaria.

          .row
            .col-md-8.mb-4.mb-md-0.col-lg-10
              h3 Registro Nacional de Turismo (RNT)
              p Tramitar el RNT en rnt.confecamaras.co. El proceso es virtual y gratuito.
            .col-md-4.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema6/paso3.svg', alt='Texto que describa la imagen')
    

          .row
            .col-md-3.col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/Tema6/paso4.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.col-lg-10
              h3.text-izq Permisos sanitarios y ambientales
              p.text-izq Obtener los permisos requeridos según el tipo de actividad turística y el territorio.

          .row
            .col-md-8.mb-4.mb-md-0.col-lg-10
              h3 Afiliación a seguridad social
              p Garantizar la afiliación de todos los colaboradores al sistema de seguridad social.
            .col-md-4.col-lg-2.col-6
              figure
                img(src='@/assets/curso/Tema6/paso5.svg', alt='Texto que describa la imagen')


    .tarjeta.bg9.p-4.mb-2(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema6/cartilla.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 ABC de la formalización turística en Colombia - MinCIT
              p.mb-0 Para ampliar la información sobre los trámites de formalización, se recomienda consultar la infografía oficial del Ministerio de Comercio, Industria y Turismo:
            .col-sm-auto
              a.boton.bg7(href="https://www.mincit.gov.co/getattachment/minturismo/eventos-y-publicaciones/publicaciones/abece-de-la-formalizacion-turistica-en-colombia-20/abece-formalizacion-turistica-en-colombia-2025.pdf.aspx" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema6/ico.svg")
          h3.bg4.py-2.w-card-text.text-white Beneficios de la formalización

    p.mb-4 Formalizar una iniciativa turística comunitaria genera ventajas concretas para la organización y el territorio. Los principales beneficios son:
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Posibilidad de vincularse a agencias, plataformas y canales oficiales de comercialización.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Los registros oficiales generan seguridad y credibilidad ante turistas nacionales e internacionales.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Acceso a líneas de financiamiento, subsidios y programas de fortalecimiento institucional.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 La formalización impulsa estándares de calidad y buenas prácticas en la prestación del servicio.
            li.d-flex
              i.fas.fa-folder
              p.mb-0 Operación dentro del marco legal que protege a la comunidad, los visitantes y el territorio.   
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema6/img02.png")

    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
      p No es necesario esperar a tener todo perfecto para iniciar la formalización. Comenzar el proceso de registro mercantil y el RNT desde el inicio abre puertas a apoyos institucionales, capacitación gratuita y mercados que sin formalización no son accesibles para la comunidad.







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
