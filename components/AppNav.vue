<template>
  <nav class="menu-header">
    <ul>
      <li><a class="menu-option" href="#">Features</a></li>
      <li><a class="menu-option" href="#">Sobre</a></li>
      <li><a class="menu-option" href="#">Preços</a></li>
      <li><a class="menu-option" href="#">Contato</a></li>
      <li class="login-button"><a href="./login.html">Entrar</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNav",
});
</script>
