<template>
  <form class="bg-red">
    <AppTextField label="Email" />
    <AppTextField label="Password" />
    <AppTextField label="Chave" override>
      <input placeholder="Tryelson" ref="tryelson" />
    </AppTextField>
  </form>
</template>

<script>
import {defineComponent} from 'vue';
import AppTextField from "./AppTextField";

export default defineComponent({
  name: 'AppLogin',
  components: {AppTextField},
  mounted() {
    console.log(this.$refs.tryelson)
  }
})
</script>
