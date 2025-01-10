<script setup>
import { ref, computed, watch, onMounted, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Number,
  initialValue: { type: Number, default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: undefined },
  step: { type: Number, default: 1 },
  vertical: { type: Boolean, default: false },
  incrementAriaLabel: { type: String, default: undefined },
  decrementAriaLabel: { type: String, default: undefined },
  spinButtonAriaLabel: { type: String, default: undefined },
  formName: { type: String, default: 'integerPlusMinus' },
  disabled: { type: Boolean, default: false }
})

const intValue = ref(0)
const spinButton = ref(null)

const emit = defineEmits(['update:modelValue', 'ipm-input', 'ipm-increment', 'ipm-decrement'])

// computed
const canIncrement = computed(() => {
  if (props.disabled) return false
  return (props.max === undefined || ((intValue.value + props.step) <= props.max))
})
const canDecrement = computed(() => {
  if (props.disabled) return false
  return ((intValue.value - props.step) >= props.min)
})

onMounted(() => {
  window.addEventListener('keydown', keyUp)
  if (props.modelValue === undefined) {
    intValue.value = props.initialValue
  } else {
    intValue.value = props.modelValue
  }
})

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== intValue.value) intValue.value = newValue
})

// methods
const inputChange = () => {
  if (props.modelValue !== undefined) {
    emit('update:modelValue', intValue.value)
    emit('ipm-input', intValue.value)
  }
}
const isSpinButtonFocused = () => {
  return document.activeElement === spinButton.value
}
const setToMin = () => {
  if (props.disabled) return
  intValue.value = props.min
  inputChange()
}
const setToMax = () => {
  if (props.disabled) return
  intValue.value = props.max
  inputChange()
}
const increment = () => {
  if (canIncrement.value) {
    intValue.value = intValue.value + props.step
    emit('ipm-increment', intValue.value)
    inputChange()
  }
}
const decrement = () => {
  if (canDecrement.value) {
    intValue.value = intValue.value - props.step
    emit('ipm-decrement', intValue.value)
    inputChange()
  }
}
const keyUp = (event) => {
  if (isSpinButtonFocused()) {
    if (event.keyCode === 33 || event.keyCode === 38) { // page up || up arrow
      increment()
      event.preventDefault()
    }

    if (event.keyCode === 34 || event.keyCode === 40) { // page down || down arrow
      decrement()
      event.preventDefault()
    }

    if (event.keyCode === 36) { // home button
      setToMin()
      event.preventDefault()
    }

    // if max, set to max
    if (props.max !== undefined && event.keyCode === 35) { // end button
      setToMax()
      event.preventDefault()
    }
  }
}
const getBtnClass = (isFirstBtn) => {
  let btnClass = 'int-pm-'
  if ((isFirstBtn && !props.vertical) || (!isFirstBtn && props.vertical)) {
    btnClass += 'decrement'
    if (!canDecrement.value) btnClass += ' disabled'
  } else {
    btnClass += 'increment'
    if (!canIncrement.value) btnClass += ' disabled'
  }
  return btnClass
}

</script>

<template>
  <div class="int-pm" :class="{'int-pm-vertical': vertical}">
    <button class="int-pm-btn" :class="getBtnClass(true)" v-on:click="vertical ? increment() : decrement()"
            :aria-label="decrementAriaLabel" :disabled="disabled">
      <slot :name="vertical ? 'increment' : 'decrement'">{{ vertical ? '+' : '-' }}</slot>
    </button>
    <div class="int-pm-value" ref="spinButton" role="spinbutton" tabindex="0"
         :aria-valuenow="intValue" :aria-valuemin="min" :aria-valuemax="max" :aria-label="spinButtonAriaLabel">
      <slot>{{ intValue }}</slot>
    </div>
    <input type="hidden" :name="formName" :value="intValue" />
    <button class="int-pm-btn" :class="getBtnClass(false)" v-on:click="vertical ? decrement() : increment()"
            :aria-label="incrementAriaLabel" :disabled="disabled">
      <slot :name="vertical ? 'decrement' : 'increment'">{{ vertical ? '-' : '+' }}</slot>
    </button>
  </div>
</template>

<style>

</style>
