<script setup>
import { ref } from 'vue'
import { IntegerPlusminus } from '../src/index'

const ipmValue = ref(5)
const ipmMin = ref(0)
const ipmMax = ref(9)
const ipmStep = ref(1)
const ipmSlotHeader = ref('Your value is')
const ipmSlotDecr = ref('-1')
const ipmSlotIncr = ref('+1')
const ipmVertical = ref(false)
const ipmDisabled = ref(false)
const demoSlotValue = ref(50)

</script>

<template>
  <div class="container">

    <fieldset>
      <h1>Integer plus/minus</h1>

      <div class="playWith">
        <h2>Play with it</h2>

        <integer-plusminus :min="ipmMin"
                           :max="ipmMax"
                           :step="ipmStep"
                           :vertical="ipmVertical"
                           :disabled="ipmDisabled"
                           :increment-aria-label="'increase by 1'"
                           :decrement-aria-label="'decrease by 1'"
                           :spin-button-aria-label="'first example'"
                           v-model="ipmValue">
          <p v-if="ipmSlotHeader">{{ ipmSlotHeader }}</p>
          {{ ipmValue }}
          <template v-slot:decrement>
            {{ ipmSlotDecr }}
          </template>
          <template v-slot:increment>
            {{ ipmSlotIncr }}
          </template>
        </integer-plusminus>

        <hr/>

        <label for="ipmValue">Value:</label>
        <input type="number" v-model="ipmValue" id="ipmValue"/>

        <label for="ipmVertical">Vertical:</label>
        <input type="checkbox" v-model="ipmVertical" id="ipmVertical"/>

        <label for="ipmDisabled">Disabled:</label>
        <input type="checkbox" v-model="ipmDisabled" id="ipmDisabled"/>

        <br/><br/>

        <label for="ipmMin">Min:</label>
        <input type="number" v-model="ipmMin" id="ipmMin"/>

        <label for="ipmMax">Max:</label>
        <input type="number" v-model="ipmMax" id="ipmMax"/>

        <label for="ipmStep">Step:</label>
        <input type="number" v-model="ipmStep" id="ipmStep"/>

        <br/><br/>

        <label for="ipmSlotHeader">Additional text:</label>
        <input type="text" v-model="ipmSlotHeader" id="ipmSlotHeader"/>

        <br/><br/>

        <label for="ipmSlotDecr">Decrement button:</label>
        <input type="text" v-model="ipmSlotDecr" id="ipmSlotDecr"/>

        <label for="ipmSlotIncr">Increment button:</label>
        <input type="text" v-model="ipmSlotIncr" id="ipmSlotIncr"/>

      </div>

      <div class="gallery">
        <h2>Gallery</h2>

        <integer-plusminus :min="1" :max="3" :initial-value="2" :increment-aria-label="'increase by 1'" :decrement-aria-label="'decrease by 1'" spin-button-aria-label="example two"></integer-plusminus>
        <br/>
        <integer-plusminus :min="0" :max="100" :step="10" :increment-aria-label="'increase score by 10'" :decrement-aria-label="'decrease score by 10'" spin-button-aria-label="game points" v-model="demoSlotValue">
          <p>You have {{ demoSlotValue }} points</p>
          <i>Games worth 10 points</i>
          <template v-slot:increment>Win</template>
          <template v-slot:decrement>Loss</template>
        </integer-plusminus>
        <br/>
        <integer-plusminus class="demo-vertical" :min="0" :max="9" :vertical="true" :initial-value="5" :increment-aria-label="'increase by 1'" :decrement-aria-label="'decrease by 1'" spin-button-aria-label="example 3"></integer-plusminus>

      </div>

    </fieldset>

  </div>
</template>

<style>
h1 {
  margin-top: 0;
  margin-bottom: 0;
}

.container {
  margin-top: 20px;
}

.playWith {
  width: 70%;
  float: left;
}

.gallery {
  float: right;
  width: 20%;
}

.half {
  width: 50%;
  float: left;
}

</style>
