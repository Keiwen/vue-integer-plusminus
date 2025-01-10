// Component imports
import IntegerPlusminus from './components/IntegerPlusminus.vue'
import './styles/common.scss'

// Default export for global usage
const install = (app) => {
  app.component('integer-plusminus', IntegerPlusminus)
}
export default install

// Named export for specific usage
export { install, IntegerPlusminus }
