<template>
  <section id="contact-section" class="contact-container">
    <form
      action="/"
      id="contact-form"
      method="POST"
      class="contact-form"
      data-state="idle"
      name="contact"
      @submit.prevent="handleSubmitContactForm"
      netlify
    >
      <div class="fields-section">
        <div class="form-group">
          <AppTextField
            v-model="state.form.fields.email.value"
            name="email"
            label="Email"
          />
        </div>

        <div class="form-group">
          <AppTextField
            v-model="state.form.fields.name.value"
            name="name"
            label="Nome"
          />
        </div>

        <div class="form-group">
          <label>Sua Mensagem</label>
          <textarea
            v-model="state.form.fields.message.value"
            id="message-field"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button id="submit-contact" type="submit" data-state="idle">
          Enviar
        </button>
      </div>

      <!--        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_bt7iqzns.json"  background="transparent"  speed="1"  style="width: 600px; height: 600px; z-index: 0"  loop autoplay></lottie-player>-->
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default defineComponent({
  name: "AppContactForm",
  data() {
    return {
      state: {
        form: {
          validation: {
            schema: Yup.object({
              email: Yup.string().email().required(),
              name: Yup.string().min(3),
              message: Yup.string().min(3),
            }),
          },
          fields: {
            email: {
              value: "",
            },
            name: {
              value: "",
            },
            message: {
              value: "",
            },
          },
        },
      },
    };
  },
  methods: {
    async handleSubmitContactForm() {
      try {
        const payload = this.createContactPayload();
        await this.state.form.validation.schema.validate(payload);
        // TODO: Chamar o servidor caso a validacao esteja correta.
      } catch (error) {
        window.alert(error.message);
        console.error(error);
      }
    },
    createContactPayload() {
      return {
        email: this.state.form.fields.email.value,
        name: this.state.form.fields.name.value,
        message: this.state.form.fields.message.value,
      };
    },
    showToast() {},
  },
});
</script>
