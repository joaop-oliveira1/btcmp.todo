<template>
  <header id="header" data-state="inactive">
    <div class="container">
      <div class="box-logo">
        <span>Coloque Sua imagem Aqui</span>
      </div>

     <slot></slot>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>
