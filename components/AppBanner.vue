<template>
  <section class="section-banner">
    <div>
      <div class="banner-title">
        <h1>{{ title }}</h1>

        <h2>{{ subTitle }}</h2>
      </div>

      <div class="banner-trial">
        <form action="">
          <input type="email" id="email" name="email" placeholder="Seu email de trabalho">
          <button type="submit">Teste grátis</button>
        </form>

        <small><strong>Sem riscos.</strong> Você não pagará nada caso não queria contratar. O teste grátis tem duração
          de 10 dias.</small>
      </div>
    </div>
    <!--      <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_t4m6huub.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px; z-index: 0"  loop autoplay></lottie-player>-->
    <!--   https://lottiefiles.com/98153-contact-me-green-version   -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppBanner',
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  }
})
</script>