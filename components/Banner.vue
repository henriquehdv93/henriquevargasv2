<template>
  <div>
    <section class="main_banner">
      <div class="main_banner--item" style="background-image: url('images/main_banner.jpg')">
        <div class="container">
            <h2 class="main_banner--item--title mb-4 mb-md-5 text-uppercase animated fadeInLeft">Henrique Vargas</h2>
            <ul class="main_banner--item--list">
                <li class="animated fadeInLeft">Desenvolvedor web</li>
                <li class="animated fadeInLeft">Freelancer</li>
                <li class="animated fadeInLeft">Especialista em SEO</li>
            </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    // props: {
    //   area: {},
    // },
    data: () => ({
      
      }),
    // async fetch() {
    //     this.banners = await this.$axios.$get(`api/v1/banner/area/?area=${this.area}`).then((res) => {
    //         return res.data
    //     });
    // }
  }
</script>
