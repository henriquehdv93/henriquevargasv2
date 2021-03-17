<template>
  <div>
    <section class="main_banner">
      <div class="main_banner--item" :style="{ backgroundImage: 'url(' + banner.url + ')' }">
        <div class="container">
            <h2 class="main_banner--item--title mb-4 mb-md-5 text-uppercase animated fadeInLeft">{{ banner.name }}</h2>
            <ul class="main_banner--item--list">
                <li class="animated fadeInLeft" v-for="(item, index) in banner.short_phrases" :key="index">{{ item.text }}</li>
            </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    
    data: () => ({
        banner: {
          name: 'Henrique Vargas',
          url: 'images/main_banner.jpg',
          short_phrases: [
            {
              text: 'Desenvolvedor web'
            },
            {
              text: 'Freelancer'
            },
            {
              text: 'Especialista em SEO'
            },
          ],
        },
      }),
    // async fetch() {
    //     this.banners = await this.$axios.$get('https://api.henriquevargas.com.br/banners/').then((res) => {
    //         return res.data
    //     });
    // }
  }
</script>
