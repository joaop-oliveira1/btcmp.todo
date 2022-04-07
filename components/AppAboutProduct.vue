<template>
  <!-- Sobre o produto -->
  <section class="sobre-nos">
    <div class="container">
      <div class="titulo-sobre-nos">
        <div class="divisor-sobre-nos">
          <span></span>
        </div>

        <h2>Caracteristicas do Produto</h2>
        <div class="divisor-sobre-nos">
          <span></span>
        </div>
      </div>
    </div>

    <div class="sobre-nos-box">
      <div class="sobre-nos-divisor container">
        <div class="sobre-nos-box-detalhe">
          <i class="fa-store-alt fas"><b>2.500</b></i>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius cum ad, error quibusdam at impedit voluptates</p>
        </div>
        <div class="sobre-nos-box-detalhe">
          <i class="fa-users fas"><b>92.000</b></i>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius cum ad, error quibusdam at impedit voluptates</p>
        </div>
      </div>
      <div class="sobre-nos-divisor container">
        <div class="sobre-nos-box-detalhe">
          <i class="fa-credit-card far"><b>28.000.000</b></i>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius cum ad, error quibusdam at impedit voluptates</p>
        </div>
        <div class="sobre-nos-box-detalhe">
          <i class="fa-box-open fas"><b>10.000.000</b></i>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius cum ad, error quibusdam at impedit voluptates</p>
        </div>
      </div>

      <button><i class="fa-cookie-bite fas"></i>EXPERIMENTAR PROGRAMA GRATUITAMENTE</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppAboutProduct',
})
</script>