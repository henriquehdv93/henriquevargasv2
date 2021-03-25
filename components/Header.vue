<template>
  <header class="header" id="inicio">
    <nav id="main_navbar" class="navbar navbar-expand-lg navbar-light fixed-top justify-content-between">        
        <a class="navbar-brand mr-0 pt-2" href="#inicio" :title="site_info.name">
            <h1><img :src="site_info.logo.url" class="img-fluid" :alt="site_info.logo.title" :title="site_info.logo.title"></h1>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="bot&atilde;o do menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-3 mt-lg-0" id="navigation">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item" v-for="(item, index) in menu" :key="index">
                    <nuxt-link class="nav-link" :to="{ path: item.url, hash: item.hash}">{{ item.name }}</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="text-center d-none d-lg-block">
            <a :href="site_info.whatsapp_url" target="_blank" rel="nofollow" class="btn_default" title="contate-me">contate-me</a>
        </div>
    </nav>
  </header>
</template>

<script>  
  export default {
    scrollToTop: true,
    props: [
        'site_info',
    ],
    mounted() {
        window.addEventListener('scroll', function() {
            var navbar = document.querySelector('.navbar');
            var scrollValue = window.scrollY;
            if (scrollValue > 1){
                navbar.classList.add('bg-black');
            } 
            else{
                navbar.classList.remove('bg-black');
            }
        });
    },
    data: () => ({
        menu: [
            {
                name: 'Especialidades',
                url: '#especialidades',
                hash: '',
            },
            {
                name: 'Portfólio',
                url: '#portfolio',
                hash: '',
            },
            {
                name: 'Depoimentos',
                url: '#depoimentos',
                hash: '',
            },
            {
                name: 'Sobre mim',
                url: '#sobre_mim',
                hash: '',
            },
        ]
    }),
  }
</script>
