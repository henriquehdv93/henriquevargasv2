<template>
  <footer class="footer">
    <div class="container">
        <div class="d-flex text-center justify-content-center flex-column">
            <h3>{{ contact.title }}</h3>
            <div v-html="contact.text"></div>
            <div class="footer--email_phone d-sm-flex justify-content-center pt-5">
                <div class="d-flex align-items-center mb-3 mb-sm-0">
                    <i class="fas fa-envelope"></i>
                    <span>{{ site_info.email }}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fas fa-phone"></i>
                    <span>{{ site_info.phone }}</span>
                </div>
            </div>
            <Socials />
        </div>
    </div>
    <div class="footer--bottom">
        <div class="container">
            <div class="d-md-flex justify-content-center justify-content-md-between text-center">
                    <p class="d-sm-flex mb-3 mb-md-0">{{ copyright }}    </p>
                    <img :src="site_info.logo.url" :alt="site_info.logo.title" :title="site_info.logo.title">
            </div>
        </div>
    </div>
  </footer>
</template>
<script>
import Socials from './Socials.vue'
  export default {
  components: { Socials },
    props: [
        'site_info',
    ],
    data: () => ({
        contact: {
            title: 'Vamos conversar sobre seu projeto?',
            text: '<p>Estou sempre à disposição para tirar dúvidas e conversar.</p><p>Me mande um e-mail ou me chame via WhatsApp, estou sempre à disposição :) </p>'
        },
        copyright: 'Henrique Vargas - Todos os direitos reservados'
      }),
  }
</script>
