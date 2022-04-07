<template>
  <label :id="`label_${id}`" :for="`input_${id}`" :class="labelClass" ref="label">{{ label }}</label>
  <slot v-if="override" :id="id"></slot>
  <input v-if="!override" :id="`input_${id}`" :type="type"
         :class="inputClass"
         :required="required"
         :disabled="disabled"
         :value="value"
         ref="input"
         @input="handleInput"/>
</template>

<script lang="ts">
import * as uuid from 'uuid';
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'AppTextField',
  props: {
    id: {
      type: String,
      default: () => uuid.v4(),
    },
    label: {
      type: String,
      default: ""
    },
    labelClass: {
      type: [Object, Array, String],
      default: "",
    },
    inputClass: {
      type: [Object, Array, String],
      default: "",
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    override: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event);
    }
  }
})
</script>