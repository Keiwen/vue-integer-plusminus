<template>
    <div class="int-pm" :class="{'int-pm-vertical': vertical}">
        <div class="int-pm-btn" :class="getBtnClass(true)" v-on:click="vertical ? increment() : decrement()">
            <slot :name="vertical ? 'increment' : 'decrement'">{{ vertical ? '+' : '-' }}</slot>
        </div>
        <div class="int-pm-value">
            <slot>{{ intValue }}</slot>
        </div>
        <div class="int-pm-btn" :class="getBtnClass(false)" v-on:click="vertical ? decrement() : increment()">
            <slot :name="vertical ? 'decrement' : 'increment'">{{ vertical ? '-' : '+' }}</slot>
        </div>
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
      }
    },
    data () {
      return {
        intValue: 0
      }
    },
    computed: {
      canIncrement () {
        return (this.max === undefined || ((this.intValue + this.step) <= this.max))
      },
      canDecrement () {
        return ((this.intValue - this.step) >= this.min)
      },
    },
    methods: {
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
        display: table;
        text-align: center;
        position: relative;

        div {
            display: table-cell;
            vertical-align: middle;
        }

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
            display: inline-block;
            div {
                display: block;
            }
            .int-pm-value {
                border-width: 0 1px;
                padding: 5px 10px;
            }
        }
    }
</style>
