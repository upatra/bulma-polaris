import Vue from 'vue';
import '@/styles/main.scss';

import PLoading from './PLoading/PLoading.vue'
import PUpload from './PUpload/PUpload.vue'
import DropdownCheckbox from './DropdownCheckbox/DropdownCheckbox.vue'

const Components = {
  PLoading,
  PUpload,
  DropdownCheckbox,
};

const BulmaPolaris = {
  install(Vue, options = {}) {
    for (let componentKey in Components) {
      Vue.component(componentKey, Components[componentKey]);
    }
  },
};

export default BulmaPolaris;
