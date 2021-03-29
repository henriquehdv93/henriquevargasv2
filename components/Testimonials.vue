<template>
<section class="testimonials section_padding">
        <span class="section_anchor" id="depoimentos"></span>
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="section_title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="title">Depoimentos de clientes</h2>
                    </div>
                    <div class="testimonials_carousel mt-4 mt-md-5">
                        <div class="item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-duration="1000">
                            <svg id="right_x5F_quote_x5F_alt" xmlns="http://www.w3.org/2000/svg" width="47.5" height="35.625" viewBox="0 0 47.5 35.625">
                            <g id="Group_25" data-name="Group 25">
                                <path id="Path_44" data-name="Path 44" d="M0,4V39.625L17.813,21.813V4Z" transform="translate(0 -4)"/>
                                <path id="Path_45" data-name="Path 45" d="M20,4V39.625L37.813,21.813V4Z" transform="translate(9.688 -4)"/>
                            </g>
                            </svg>
                            <div v-html="testimonials[0].text" class="text-center"></div>

                            <img :src="testimonials[0].image.url" :alt="testimonials[0].image.alt" :title="testimonials[0].image.title" class="img-fluid mb-4">
                            <h3 class="text-center">{{ testimonials[0].name }}</h3>
                            <h4 class="text-center">{{ testimonials[0].company }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        testimonials: [
            {
                name: 'Emanuele Kolbek',
                company: 'Proprietária da Kolbek Advocacia & Assessoria Jurídica',
                image: {
                    url: '/images/kolbek-logo.png',
                    alt: 'Logo Kolbek Advocacia',
                    title: 'Kolbek Advocacia & Assessoria Jurídica'
                },
                text: '<p>Contratei o Henrique para fazer o site do meu escritório de advocacia. O site ficou lindo, o atendimento dele é excelente, sempre atencioso e eficiente. Recomendo sem reservas.</p>'
            },
        ],
    })
}
</script>