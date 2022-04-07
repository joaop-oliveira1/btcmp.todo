<template>
  <header id="header" data-state="inactive">
    <div class="container">
      <div class="box-logo">
        <img src="../assets/images/todo-logo.png" alt="Logo Todo">
      </div>

      <nav class="menu-header">
        <ul>
          <li><a class="menu-option" href="#">Features</a></li>
          <li><a class="menu-option" href="#">Sobre</a></li>
          <li><a class="menu-option" href="#">Preços</a></li>
          <li><a class="menu-option" href="#">Contato</a></li>
          <li class="login-button"><a href="./login.html">Entrar</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
})
</script>