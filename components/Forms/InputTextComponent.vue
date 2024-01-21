<template>
  <div>
    <label v-if="label" class="form-label" :for="inputParams.elementId">
      {{ label }} <span v-if="required" class="text-danger">*</span>
      <v-menu v-if="help" placement="auto" class="d-inline-block">
        <span class="badge rounded-pill bg-primary form-help-badge">?</span>
        <template #popper>
          <div class="form-help-text" v-html="help" />
        </template>
      </v-menu>
    </label>
    <div
      class="form-input d-flex align-items-center"
      :class=" {
        'disabled': disabled,
        'has-before-icon': inputParams.hasBefore,
        'has-after-block': inputParams.hasAfter,
        'is-invalid': inputParams.hasError,
      }"
    >
      <template v-if="inputParams.hasBefore">
        <div class="before-input-icon">
          <slot name="before" />
        </div>
      </template>
      <input
        :id="inputParams.elementId"
        v-model="inputParams.value"
        :class="[inputParams.hasError ? 'is-invalid' : '']"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :enterkeyhint="enterKeyHint"
        :pattern="inputParams.pattern"
        :autocomplete="autocomplete !== '' ? autocomplete : null"
        class="form-control"
        @input="updateModelValue"
      >
      <div v-if="inputParams.hasAfter" ref="after">
        <div class="after-input-block">
          <slot name="after" />
        </div>
      </div>
    </div>
    <div v-if="inputParams.hasError" class="invalid-feedback" v-text="inputParams.errorMessage" />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, useSlots } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const slots = useSlots()

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  enterKeyHint: {
    type: String,
    default: ''
  },
  autocomplete: {
    type: String,
    default: ''
  },
  error: {
    type: [String, Number, Array],
    default: null
  },
  help: {
    type: [String, Number],
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  inputDelay: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits(['update:modelValue'])

const inputParams = reactive({
  value: props.modelValue,
  elementId: props.id ? props.id : props.name,
  hasError: computed(() => !!props.error),
  hasBefore: computed(() => !!slots.before),
  hasAfter: computed(() => !!slots.after),
  errorMessage: computed(() => {
    if (Array.isArray(props.error)) {
      return props.error.join(',')
    }
    return props.error
  }),
  pattern: computed(() => {
    if (props.type === 'number') {
      return '[0-9]*'
    }
    return null
  })
})

const updateModelValue = useDebounceFn(() => {
  emits('update:modelValue', inputParams.value)
}, props.inputDelay)
</script>

<style lang="scss" scoped>
.help {
  margin-top: 0.25rem;
}

.before-input-icon {
  margin: 0 0 0 14px;
  z-index: 2;
  position: relative;
}

.has-before-icon {
  .form-control {
    margin: 0 0 0 -39px;
    padding-left: 50px;
  }
}

.has-after-block {
  .form-control {
    padding-right: var(--input-right-padding, 16.5px);
  }
}

.after-input-block {
  margin-left: var(--after-input-block-margin-left, 0);
}
</style>
