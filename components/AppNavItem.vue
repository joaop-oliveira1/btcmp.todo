<template>
  <li><a class="menu-option" :href="link">{{ title }}</a></li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNavItem.vue",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
        type: String,
        required: true,
    }
  },
});
</script>