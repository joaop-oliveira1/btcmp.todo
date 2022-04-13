<template>
  <!DOCTYPE html>
  <html lang="pt-br">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo - App</title>
    <link rel="icon" type="image/x-icon" href="../assets/images/favicon.ico">
    <!--    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>-->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  </head>
  <body>
  <AppHeader/>
  <main>
    <AppBanner :title="state.title" :sub-title="state.subTitle" />
    <AppContactForm/>
    <AppAboutProduct/>
  </main>
  </body>
  </html>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppHeader from "../components/AppHeader";
import AppBanner from "../components/AppBanner";
import AppContactForm from "../components/AppContactForm";
import AppAboutProduct from "../components/AppAboutProduct";


export default defineComponent({
  name: 'IndexPage',
  components: {AppAboutProduct, AppContactForm, AppBanner, AppHeader},
  data() {
    return {
      state: {
        title: "",
        subTitle: ""
      }
    }
  },
  async mounted() {
    const contentResponse = await this.$contentful.fetchHeroSectionContent();
    this.state.title = contentResponse.fields.title
    this.state.subTitle = contentResponse.fields.subTitle
  }
})
</script>