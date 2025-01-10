# vue-integer-plusminus
[![npm](https://img.shields.io/npm/v/vue-integer-plusminus.svg)](https://www.npmjs.com/package/vue-integer-plusminus)
[![npm](https://img.shields.io/npm/dt/vue-integer-plusminus.svg)](https://www.npmjs.com/package/vue-integer-plusminus)

Integer input with increment and decrement buttons,
fitting as spinbutton, allowing keyboard functionalities.

[Live demo here](https://keiwen.github.io/vue-integer-plusminus/)

## Global use
- npm install in console
```
npm install --save vue-integer-plusminus
```
- import component in your code
```
import { IntegerPlusminus } from 'vue-integer-plusminus'
```
you may also import it globally in your app
```
import { createApp } from "vue";
import vueIntegerPlusminus from "vue-interger-plusminus";
createApp(App).use(vueIntegerPlusminus);
```
- Use component as described below

## Component usage
### In code
```
<integer-plusminus></integer-plusminus>
```
```
<integer-plusminus :min="ipmMin"
                   :max="ipmMax"
                   :step="ipmStep"
                   :vertical="ipmVertical"
                   :disabled="impDisabled"
                   form-name="integer_plus_minus"
                   v-model="ipmValue">
    <p>Your value is</p>
    {{ ipm_value }}
    
    <template v-slot:decrement>{{ ipmSlotDecr }}</template>
    
    <template v-slot:increment>{{ ipmSlotIncr }}</template>
</integer-plusminus>
```

| Prop                     | Type      |                                                                                Note |
|:-------------------------|:----------|------------------------------------------------------------------------------------:|
| `min`                    | `number`  |                        minimum possible value. Cannot decrement lower. Default is 0 |
| `max`                    | `number`  |                 maximum possible value. Cannot increment over. Default is undefined |
| `step`                   | `number`  |                              Incremental step. Must be greater than 0. Default is 1 |
| `vertical`               | `Boolean` |                                               Use vertical layout. Default is false |
| `disabled`               | `Boolean` |                                  Disabled buttons and keys events. Default is false |
| `spin-button-aria-label` | `string`  |                                 Set aria-label attribute on value element, optional |
| `increment-aria-label`   | `string`  |                      Set aria-label attribute on decrement button element, optional |
| `decrement-aria-label`   | `string`  |                      Set aria-label attribute on increment button element, optional |
| `form-name`              | `string`  | Set the 'name' attribute of the form input. Default is 'integerPlusMinus', optional |
| `initial-value`          | `number`  | When v-model is not used, use this attribute to initialized integer value, optional |

### Slots
This component provide 3 slots
- Default slot is the middle part when value is usually displayed
- 'increment' slot is used for increment button.
Usually on right for horizontal layout,
or top for vertical layout.
- 'decrement' slot is used for decrement button.
Usually on left for horizontal layout,
or bottom for vertical layout.

### Spinbutton
Spinbutton pattern (from WAI-ARIA specifications) is implemented on the middle part,
where value is usually displayed.
By focusing it (click on it), you can use keyboard to:
- increment (arrow up or page up keys),
- decrement (arrow down or page down keys),
- set min (home key)
- set max (end key, only if max defined).

Thanks to [codekipple](https://github.com/codekipple) for this.

### Style
You can override base CSS variable used, like colors.
After importing this library style, override CSS variable in root.
For example, the following CSS will set spinbutton part's background to fuchsia.
```
:root {
  --ipm-background-color: fuchsia;
}
```
Refer to `src/styles/variables.css` for the full list of variable used
in this library that you can override.

You can also override style regrouped under `.int-pm` class.

### Events
- 'ipm-input' is triggered on value change
- 'ipm-increment' is triggered on value increment
- 'ipm-decrement' is triggered on value decrement

## Contribution
This library is managed with vue-CLI
- Fork the repository
- Run `npm install`
- You can run `npm run serve`, the script will start the mini demo application
- Do your stuff
- When you're done, run `npm run build` command and commit your work for a pull request.
