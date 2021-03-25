<template>
  <section class="portfolio section_bg section_padding_large">
        <span class="section_anchor" id="portfolio"></span>
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2 text-center section_title" data-aos="fade-up"  data-aos-duration="1000">
                    <h2 class="mb-4 mb-md-5 title">{{ portfolio.title }}</h2>
                    <p class="text">{{ portfolio.text }}</p>
                </div>
            </div>
            <div class="row mt-5 portfolio--list" data-aos="fade-up"  data-aos-duration="1000">
                <div class="col-6 col-md-4 pb-4 portfolio--list--item" v-for="(item, index) in portfolio.list" :key="index">
                    <a :href="item.url" target="_blank" rel="nofollow" class="d-flex flex-column">
                        <i class="fa fa-external-link-alt portfolio--list--item--icon"></i>
                        <div class="portfolio--list--item--img" :style="{ backgroundImage: 'url(' + item.image + ')' }">
                        </div>
                        <div class="portfolio--list--item--desc">
                            <h3>{{ item.name }}</h3>
                            <p v-if="item.agency != ''">Agência: {{ item.agency }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data: () => ({
        portfolio: {
          title: 'Últimos projetos',
          text: 'Confira alguns projetos que já foram desenvolvidos',
          list: [
          {
            name: 'Kolbek Advocacia & Assessoria Jurídica',
            image: '/images/kolbek-advocacia.jpg',
            url: 'https://www.kolbek.adv.br',
            agency: '',
          },
          {
            name: 'Loja Sweet Home',
            image: '/images/lojasweethome.jpg',
            url: 'https://www.lojasweethome.com.br',
            agency: 'WD House',
          },
          {
            name: 'SMMAS - Secretaria de Município de Mobilidade, Acessibilidade e Segurança de Rio Grande',
            image: '/images/smmas.jpg',
            url: 'https://smmas.riogrande.rs.gov.br',
            agency: 'WD House',
          },
          {
            name: 'Extremo Sul - Soluções Ambientais',
            image: '/images/extremosulamb.jpg',
            url: 'https://www.extremosulamb.com.br',
            agency: 'WD House',
          },
          {
            name: 'Mosteiro São José',
            image: '/images/mosteirosaojose.jpg',
            url: 'https://www.mosteirosaojose.com.br',
            agency: 'WD House',
          },
        ],
        }
    }),
  }
</script>