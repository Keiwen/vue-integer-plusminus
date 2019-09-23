# vue-integer-plusminus
[![npm](https://img.shields.io/npm/v/vue-integer-plusminus.svg)](https://www.npmjs.com/package/vue-integer-plusminus)
[![npm](https://img.shields.io/npm/dt/vue-integer-plusminus.svg)](https://www.npmjs.com/package/vue-integer-plusminus)

Integer input with increment and decrement buttons

[Live demo here](https://keiwen.github.io/vue-integer-plusminus/)

This component fits as spinbutton, allowing keyboard functionalities (`up`/`down` arrows or `page up/down` to increment/decrement, `home`/`end` to min/max)

## Global use
- npm install
```
npm install --save vue-integer-plusminus
```
- import components
```
import { IntegerPlusminus } from 'vue-integer-plusminus'
```
- declare use or imported components in your vue script
```
export default {
    components: { IntegerPlusminus },
    methods: ...
}
```
- Use components as described below

## Components
### Integer plus/minus
```
<integer-plusminus></integer-plusminus>
```
```
<integer-plusminus :min="ipm_min"
                   :max="ipm_max"
                   :step="ipm_step"
                   :vertical="ipm_vertical"
                   :disabled="imp_disabled"
                   v-model="ipm_value">
    <p>Your value is</p>
    {{ ipm_value }}
    
    <template slot="decrement">{{ ipm_slot_decr }}</template>
    
    <template slot="increment">{{ ipm_slot_incr }}</template>
</integer-plusminus>
```


| Prop | Type | Note
| :--- | :--- | ---: |
| `min` | `number` | minimum possible value. Cannot decrement lower. Default is 0 |
| `max` | `number` | maximum possible value. Cannot increment over. Default is undefined |
| `step` | `number` | Incremental step. Must be greater than 0. Default is 1 |
| `vertical` | `Boolean` | Use vertical layout. Default is false |
| `disabled` | `Boolean` | Disabled buttons and keys events. Default is false |
| `spinButtonAriaLabel` | `string` | Set aria-label attribute on value element, optional |
| `incrementAriaLabel` | `string` | Set aria-label attribute on decrement button element, optional |
| `decrementAriaLabel` | `string` | Set aria-label attribute on increment button element, optional |

This component provide 3 slots
- Default slot is the middle part when value is usually displayed
- 'increment' slot is used for increment button.
Usually on right for horizontal layout,
or top for vertical layout.
- 'decrement' slot is used for decrement button.
Usually on left for horizontal layout,
or bottom for vertical layout.

Style could be overwritten using `!important` css keyword
```
.int-input-increment {
    background: #5CB85C !important;
}
```

Events:
- 'input' on value change
- 'ipm-increment' on value increment
- 'ipm-decrement' on value decrement

## Contribution
- Fork the repository
- Run `npm install`
- You can run `npm run dev`, site is at http://localhost:8081.
- Do your stuff
- When you're done, run `npm run build` command and commit your work for a pull request.
