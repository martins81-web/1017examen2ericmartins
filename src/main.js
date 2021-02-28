import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';

import App from './App.vue';
import { mixinTranslations } from './mixins/mixinTranslations';
import router from './router';
import store from './store';

Vue.use(ToggleButton)

Vue.config.productionTip = false


Vue.mixin(mixinTranslations);
//CHANGE LANGUAGE ***french or english***
Vue.language= Vue.prototype.language = 'fr';




new Vue({
  router,store,ToggleButton,
  render: h => h(App),
}).$mount('#app')

