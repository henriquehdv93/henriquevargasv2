<template>
  <div>
    <Header :site_info="site_info" />
    <main class="content">
      <Banner />
      <Specialties />
      <Portfolio />
      <Testimonials />
      <About_me />
    </main>
    <Footer :site_info="site_info" />
    <a :href="site_info.whatsapp_url" target="_blank" rel="nofollow" class="btn_whatsapp"  data-toggle="tooltip" data-placement="left" title="Converse comigo no WhatsApp!">
    <img src="/images/whatsapp.svg" alt="WhatsApp" title="Converse comigo no WhatsApp!">
    </a>
  </div>
</template>
<script>
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";
  import Banner from "~/components/Banner.vue";
  import Specialties from '../components/Specialties.vue';
  import Portfolio from '../components/Portfolio.vue';
  import Testimonials from '../components/Testimonials.vue';
  import About_me from '../components/About_me.vue';
  export default {
    methods: {},
    components: {
        Header,
        Footer,
        Banner,
        Specialties,
        Portfolio,
        Testimonials,
        About_me,
    },
    data: () => ({
      site_info: {
          name: 'Henrique Vargas - Desenvolvedor Web',
          logo: {
            url: '/images/henriquevargas.png',
            title: 'Henrique Vargas',
            target: '_blank',
          },
          phone: '(53) 99993-3485',
          whatsapp_url: 'https://api.whatsapp.com/send?phone=+5553999933485',
          email: 'contato@henriquevargas.com.br',
      }
    }),
    // async asyncData({params, query, res, $axios, req, app, error, redirect, route}) {
    //   const menu = await $axios.$get('https://api.henriquevargas.com.br/menu/');
    //   try {
    //     return {
    //       menu: menu.data,
    //     }
    //   } catch (e) {
    //     console.error(e)
    //     return error({statusCode: 404, message: e.message})
    //   }
    // }
  }
</script>
