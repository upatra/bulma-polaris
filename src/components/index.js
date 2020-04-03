import Vue from 'vue';
import '@/styles/main.scss';

import PLoading from './PLoading/PLoading.vue'
import PUpload from './PUpload/PUpload.vue'

const Components = {
  PLoading,
  PUpload
};

const BulmaPolaris = {
  install(Vue, options = {}) {
    for (let componentKey in Components) {
      Vue.component(componentKey, Components[componentKey]);
    }
  },
};

export default BulmaPolaris;
