import Vue from 'vue';

import App from './App.vue';
import { mixinTranslations } from './mixins/mixinTranslations';
import router from './router';

Vue.config.productionTip = false

Vue.mixin(mixinTranslations);
//CHANGE LANGUAGE ***french or english***
Vue.language= Vue.prototype.language = 'fr';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
