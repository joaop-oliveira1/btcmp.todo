<template>
  <AppHeader />
  <main>
    <AppBanner :title="state.title" :sub-title="state.subTitle" />
    <AppContactForm />
    <AppAboutProduct />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      state: {
        title: "",
        subTitle: "",
      },
    };
  },
  async mounted() {
    const contentResponse = await this.$contentful.fetchHeroSectionContent();
    this.state.title = contentResponse.fields.title;
    this.state.subTitle = contentResponse.fields.subTitle;
  },
});
</script>
