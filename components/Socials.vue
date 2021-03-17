<template>
  <div class="footer--socials d-flex justify-content-center py-5">
    <a v-for="(item, index) in socials" :key="index" :href="item.url" rel="nofollow" :title="item.title" :aria-label="item.title">
        <i :class="item.icon" aria-hidden="true" ></i>
    </a>
  </div>
</template>
<script>  
  export default {
    data: () => ({
        socials: [
          {
            name: 'Instagram',
            url: 'https://www.instagram.com/henriquehdv',
            title: 'Siga-me no Instagram',
            icon: 'fab fa-instagram'
          },
          {
            name: 'WhatsApp',
            url: 'https://api.whatsapp.com/send?phone=+5553999933485',
            title: 'Fale comigo no WhatsApp',
            icon: 'fab fa-whatsapp'
          },
          {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/henrique-vargas-149002136/',
            title: 'Visite meu perfil no LinkedIn',
            icon: 'fab fa-linkedin'
          },
          {
            name: 'Github',
            url: 'https://github.com/henriquehdv93',
            title: 'Veja meu perfil no Github',
            icon: 'fab fa-github'
          }
        ],
    }),
  }
</script>