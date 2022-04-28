<template>
  <label
    :id="`label_${id}`"
    :for="`input_${id}`"
    :class="labelClass"
    ref="label"
    >{{ label }}</label
  >
  <slot v-if="override" :id="id"></slot>
  <input
    v-if="!override"
    :id="`input_${id}`"
    :name="name"
    :type="type"
    :class="inputClass"
    :required="required"
    :disabled="disabled"
    :value="modelValue"
    ref="input"
    @input="handleInput"
  />
</template>

<script lang="ts">
import * as uuid from "uuid";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTextField",
  props: {
    id: {
      type: String,
      default: () => uuid.v4(),
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
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
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
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
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>
