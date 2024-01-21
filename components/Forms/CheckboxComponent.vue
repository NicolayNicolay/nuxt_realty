<template>
  <div class="form-check">
    <input
      :id="inputParams.elementId"
      v-model="inputParams.value"
      :name="name"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :class="{'is-invalid': inputParams.hasError}"
      class="form-check-input cursor-pointer"
      type="checkbox"
      @change="updateModelValue"
    >
    <label class="form-check-label cursor-pointer" :for="inputParams.elementId" v-text="label" />
    <span v-if="inputParams.hasError" class="invalid-feedback mt-0" v-text="inputParams.errorMessage" />
    <div v-if="help" class="small help opacity-75" v-text="help" />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

const props = defineProps<{
  modelValue?: string | boolean,
  label: string,
  name: string,
  id?: string | number,
  error?: string | number | [],
  help?: string | number
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
}>()

const emits = defineEmits(['update:modelValue'])

const inputParams = reactive({
  value: props.modelValue,
  elementId: props.id ? props.id : props.name,
  hasError: computed(() => !!props.error),
  errorMessage: computed(() => {
    if (Array.isArray(props.error)) {
      return props.error.join(',')
    }
    return props.error
  })
})

function updateModelValue () {
  emits('update:modelValue', inputParams.value)
}
</script>
