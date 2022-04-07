<template>
  <section id="contact-section" class="contact-container">
    <form action="/" id="contact-form" method="POST" class="contact-form" data-state="idle" name="contact" netlify>
      <div class="fields-section">
        <div class="form-group">
          <AppTextField label="Email" />
        </div>

        <div class="form-group">
          <AppTextField label="Nome" />
        </div>

        <div class="form-group">
          <label>Sua Mensagem</label>
          <textarea id="message-field" name="message" rows="10"></textarea>
        </div>
        <button id="submit-contact" type="submit" data-state="idle">Enviar</button>
      </div>

      <!--        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_bt7iqzns.json"  background="transparent"  speed="1"  style="width: 600px; height: 600px; z-index: 0"  loop autoplay></lottie-player>-->
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppTextField from "~/components/AppTextField.vue";

export default defineComponent({
  name: 'AppContactForm',
  components: {AppTextField}
})
</script>