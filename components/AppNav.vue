<template>
  <nav class="menu-header">
    <ul>
      <AppNavItem link="#features" title="Features"/>
      <li><a class="menu-option" href="#">Sobre</a></li>
      <li><a class="menu-option" href="#">Preços</a></li>
      <li><a class="menu-option" href="#">Contato</a></li>
      <AppNavItem link="#login" title="Entrar"/>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNav",
});
</script>
