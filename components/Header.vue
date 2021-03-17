<template>
  <header class="header" id="inicio">
    <nav id="main_navbar" class="navbar navbar-expand-lg navbar-light fixed-top justify-content-between">        
        <a class="navbar-brand mr-0 pt-2" href="#inicio" title="Henrique Vargas - Desenvolvedor web">
            <h1><img src="/images/henriquevargas.png" class="img-fluid" alt="Henrique Vargas" title="Henrique Vargas"></h1>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="bot&atilde;o do menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-3 mt-lg-0" id="navigation">
            <ul class="navbar-nav mx-auto">
                <!-- <li class="nav-item active">
                    <nuxt-link class="nav-link" :to="{ path: '/',hash:'#inicio'}">Início</nuxt-link>
                </li> -->
                <li class="nav-item">
                    <nuxt-link class="nav-link" :to="{ path: '/',hash:'#especialidades'}">Especialidades</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" :to="{ path: '/',hash:'#portfolio'}">   Portifólio</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" :to="{ path: '/',hash:'#sobre_mim'}">Sobre mim</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="text-center d-none d-lg-block">
            <a href="https://api.whatsapp.com/send?phone=+5551996559833" target="_blank" rel="nofollow" class="btn_default" title="contate-me">contate-me</a>
        </div>
    </nav>
  </header>
</template>

<script>  
  export default {
    scrollToTop: true,
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
      
    }),
  }
</script>
