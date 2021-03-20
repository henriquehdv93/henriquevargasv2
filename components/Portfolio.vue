<template>
  <section class="portfolio section_bg section_padding_large">
        <span class="section_anchor" id="portfolio"></span>
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2 text-center section_title">
                    <h2 class="mb-4 mb-md-5 title">{{ portfolio.title }}</h2>
                    <p class="text">{{ portfolio.text }}</p>
                </div>
            </div>
            <div class="row mt-5 portfolio--list">
                <div class="col-6 col-md-4 pb-4 portfolio--list--item" v-for="(item, index) in portfolio.list" :key="index">
                    <a :href="item.url" target="_blank" rel="nofollow">
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
            name: 'SMMAS - Secretaria de Município de Mobilidade, Acessibilidade e Segurança de Rio Grande',
            image: '/images/smmas.jpg',
            url: 'https://smmas.riogrande.rs.gov.br',
            agency: 'WD Houseeee',
          },
        ],
        }
    }),
  }
</script>