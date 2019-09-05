<template>
    <div class="container">

        <fieldset>
            <h1>Integer plus/minus</h1>

            <div class="playWith">
                <h2>Play with it</h2>

                <integer-plusminus :min="parseInt(ipm_min)"
                           :max="parseInt(ipm_max)"
                           :step="parseInt(ipm_step)"
                           :vertical="ipm_vertical"
                           :increment-aria-label="'increase by 1'"
                           :decrement-aria-label="'decrease by 1'"
                           :spin-button-aria-label="'first example'"
                           v-model="ipm_value">
                    <p v-if="ipm_slot_header">{{ ipm_slot_header }}</p>
                    {{ ipm_value }}
                    <template slot="decrement">
                        {{ ipm_slot_decr }}
                    </template>
                    <template slot="increment">
                        {{ ipm_slot_incr }}
                    </template>
                </integer-plusminus>

                <hr/>

                <label for="ipm_value">Value:</label>
                <input type="number" v-model="ipm_value" id="ipm_value"/>

                <label for="ipm_vertical">Vertical:</label>
                <input type="checkbox" v-model="ipm_vertical" id="ipm_vertical"/>

                <br/><br/>

                <label for="ipm_min">Min:</label>
                <input type="number" v-model="ipm_min" id="ipm_min"/>

                <label for="ipm_max">Max:</label>
                <input type="number" v-model="ipm_max" id="ipm_max"/>

                <label for="ipm_step">Step:</label>
                <input type="number" v-model="ipm_step" id="ipm_step"/>

                <br/><br/>

                <label for="ipm_slot_header">Additional text:</label>
                <input type="text" v-model="ipm_slot_header" id="ipm_slot_header"/>

                <br/><br/>

                <label for="ipm_slot_decr">Decrement button:</label>
                <input type="text" v-model="ipm_slot_decr" id="ipm_slot_decr"/>

                <label for="ipm_slot_incr">Increment button:</label>
                <input type="text" v-model="ipm_slot_incr" id="ipm_slot_incr"/>


            </div>

            <div class="gallery">
              <h2>Gallery</h2>

                <integer-plusminus :min="1" :max="3" :value="2" :increment-aria-label="'increase by 1'" :decrement-aria-label="'decrease by 1'" :spin-button-aria-label="'example two'"></integer-plusminus>
                <br/>
                <integer-plusminus :min="0" :max="100" :step="10" :increment-aria-label="'increase score by 10'" :decrement-aria-label="'decrease score by 10'" :spin-button-aria-label="'game points'" v-model="demo_slot_value">
                    <p>You have {{ demo_slot_value }} points</p>
                    <i>Games worth 10 points</i>
                    <template slot="increment">Win</template>
                    <template slot="decrement">Loss</template>
                </integer-plusminus>
                <br/>
                <integer-plusminus class="demo-vertical" :min="0" :max="9" :vertical="true" :value="5" :increment-aria-label="'increase by 1'" :decrement-aria-label="'decrease by 1'" :spin-button-aria-label="'example 3'"></integer-plusminus>


            </div>

        </fieldset>

    </div>
</template>


<script>
  import { IntegerPlusminus } from '../../src/main'

  export default {
    components: { IntegerPlusminus },
    data () {
      return {
        ipm_value: 5,
        ipm_min: 0,
        ipm_max: 9,
        ipm_step: 1,
        ipm_slot_header: 'Your value is',
        ipm_slot_decr: '-1',
        ipm_slot_incr: '+1',
        ipm_vertical: false,
        demo_slot_value: 50
      }
    }
  }
</script>


<style lang="scss">
    h1 {
        margin-top: 0;
        margin-bottom: 0;
    }

    .container {
        margin-top: 20px;
    }

    .playWith {
        width: 60%;
        float: left;
    }

    .gallery {
        float: right;
        width: 30%;
    }

    .int-pm {
        &.demo-vertical {
            max-width: 90px;

            font-size: 1.5em;
            .int-pm-value {
                background-color: black;
                color: white;
                font-size: 2em;
                padding: 5px 30px !important;
                border: 1px solid black !important;
                line-height: 1;
            }
            .int-pm-btn {
                border: none !important;
                color: white;
            }
            .int-pm-increment {
                background: #5cb85c !important;
            }
            .int-pm-decrement {
                background: #d9534f !important;
            }
         }
    }

</style>
