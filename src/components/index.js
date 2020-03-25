import Vue from 'vue';
import '@/styles/main.scss';

const Components = {
};

const PolarisVue = {
  install(Vue, options = {}) {
    for (let componentKey in Components) {
      Vue.component(componentKey, Components[componentKey]);
    }
  },
};

export default BulmaPolaris;
