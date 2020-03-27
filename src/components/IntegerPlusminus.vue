<template>
    <div class="int-pm" :class="{'int-pm-vertical': vertical}">
        <button class="int-pm-btn" :class="getBtnClass(true)" v-on:click="vertical ? increment() : decrement()"
                :aria-label="decrementAriaLabel" :disabled="disabled">
            <slot :name="vertical ? 'increment' : 'decrement'">{{ vertical ? '+' : '-' }}</slot>
        </button>
        <div class="int-pm-value" ref="spinbutton" role="spinbutton" tabindex="0"
             :aria-valuenow="value" :aria-valuemin="min" :aria-valuemax="max" :aria-label="spinButtonAriaLabel">
            <slot>{{ intValue }}</slot>
        </div>
        <input type="hidden" :name="formName" :value="intValue" />
        <button class="int-pm-btn" :class="getBtnClass(false)" v-on:click="vertical ? decrement() : increment()"
                :aria-label="incrementAriaLabel" :disabled="disabled">
            <slot :name="vertical ? 'decrement' : 'increment'">{{ vertical ? '-' : '+' }}</slot>
        </button>
    </div>
</template>

<script>
  export default {
    name: 'IntegerPlusminus',
    props: {
      value: {
        default: 0,
        type: Number
      },
      min: {
        default: 0,
        type: Number
      },
      max: {
        default: undefined,
        type: Number
      },
      step: {
        default: 1,
        type: Number
      },
      vertical: {
        default: false,
        type: Boolean
      },
      incrementAriaLabel: {
        default: null,
        type: String
      },
      decrementAriaLabel: {
        default: null,
        type: String
      },
      spinButtonAriaLabel: {
        default: null,
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      formName: {
        default: 'integerPlusMinus',
        type: String
      }
    },
    data () {
      return {
        intValue: 0
      }
    },
    computed: {
      canIncrement () {
        if (this.disabled) return false
        return (this.max === undefined || ((this.intValue + this.step) <= this.max))
      },
      canDecrement () {
        if (this.disabled) return false
        return ((this.intValue - this.step) >= this.min)
      },
    },
    mounted () {
      window.addEventListener('keydown', this.keyUp)
    },
    methods: {
      keyUp (event) {
        if (this.isSpinButtonFocused()) {
          if (event.keyCode === 33 || event.keyCode === 38) { // page up || up arrow
            this.increment()
            event.preventDefault()
          }

          if (event.keyCode === 34 || event.keyCode === 40) { // page down || down arrow
            this.decrement()
            event.preventDefault()
          }

          if (event.keyCode === 36) { // home button
            this.setToMin()
            event.preventDefault()
          }

          // if max, set to max
          if (this.max !== undefined && event.keyCode === 35) { // end button
            this.setToMax()
            event.preventDefault()
          }
        }
      },
      isSpinButtonFocused() {
        return document.activeElement === this.$refs.spinbutton
      },
      getBtnClass (firstBtn) {
        let btnClass = 'int-pm-'
        if ((firstBtn && !this.vertical) || (!firstBtn && this.vertical)) {
          btnClass += 'decrement'
          if (!this.canDecrement) btnClass += ' disabled'
        } else {
          btnClass += 'increment'
          if (!this.canIncrement) btnClass += ' disabled'
        }
        return btnClass
      },
      setToMin () {
        if (this.disabled) return
        this.intValue = this.min
        this.$emit('input', this.intValue)
      },
      setToMax() {
        if (this.disabled) return
        this.intValue = this.max
        this.$emit('input', this.intValue)
      },
      increment () {
        if (this.canIncrement) {
          this.intValue = this.intValue + this.step
          this.$emit('ipm-increment', this.intValue)
          this.$emit('input', this.intValue)
        }
      },
      decrement () {
        if (this.canDecrement) {
          this.intValue = this.intValue - this.step
          this.$emit('ipm-decrement', this.intValue)
          this.$emit('input', this.intValue)
        }
      }
    },
    watch: {
      value: {
        handler: function (newVal, oldVal) {
          this.intValue = newVal
        }
      }
    },
    created () {
      this.intValue = this.value
      if (this.step < 1) this.step = 1
      if (this.max < this.min) this.max = undefined
    }
  }
</script>

<style lang="scss" scoped>
    .int-pm {
        display: flex;
        text-align: center;

        .int-pm-value {
            border-width: 1px 0;
            border-color: #CCC;
            border-style: solid;
            padding: 0 10px;
        }

        .int-pm-btn {
            border: 1px solid #CCC;
            background-color: #DDD;
            cursor: pointer;
            padding: 5px 10px;

            &:hover {
                background-color: #CCC;
            }

            &.disabled {
                background-color: #EEE;
                color: #777;
                cursor: not-allowed;
                &:hover {
                    background-color: #EEE;
                }
            }
        }

        &.int-pm-vertical {
            flex-direction: column;

            .int-pm-value {
                border-width: 0 1px;
                padding: 5px 10px;
            }
        }
    }
</style>
