<template>
<section class="about section_bg section_padding_large">
        <span class="section_anchor" id="sobre_mim"></span>
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2 text-center section_title" data-aos="fade-up" data-aos-duration="1000">
                    <h2 class="mb-4 mb-md-5 title">{{ about.title }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <figure class="figure_float_left" data-aos="fade-right" data-aos-duration="1000">
                        <img :src="about.image" :title="about.title" :alt="about.title" >
                    </figure>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <div v-html="about.text"></div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data: () => ({
    about: {
          title: 'Minha história',
          image: '/images/about.svg',
          text: '<p><b>Sou programador e desenvolvedor front-end há mais de 7 anos atuando diretamente no mercado.</b></p><p>Meu início na carreira foi em 2012, quando surgiu uma oportunidade de trabalhar em uma agência digital na área de suporte, onde aprendi os princípios do relacionamento interpessoal tanto com a equipe de trabalho, quanto com o cliente.</p><p>Após concluír a faculdade de Sistemas para Internet na faculdade Anhanguera Educacional em 2015, passei a exercer o cargo de Desenvolvedor Web, desenvolvendo aplicações para grandes empresas locais e também para fora do Rio Grande do Sul.</p><p>Desde então, venho me aperfeiçoando para desenvolver projetos com as tecnologias mais atuais que existem no mercado e entregar a melhor solução para o seu negócio.</p>',
        }
  }),
}
</script>