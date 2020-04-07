<template>
  <div class="container">
    <h1 class="title">
      Bulma - Polaris
    </h1>

    <p class="subtitle">
    Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
    <br/>
    </p>

    <dropdown-checkbox
      v-bind:dropDownTitle="dropDownTitle"
      v-bind:dropDownItems="dropDownItems"
      @checked="dropDownStatusChecked"
      @clearChecked="dropDownCheckedClear">
    </dropdown-checkbox>

    <div class="section-card">
      <div class="section-card-title">
        Section card title
      </div>
      <div class="section-card-content">
        Section Content
      </div>
    </div>


    <div class="section-card">
      <div class="section-card-title">
        Form
      </div>
      <div class="section-card-content">
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="Input">
          </div>
        </div>

        <div class="field">
          <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
          </p>
        </div>

        <div class="buttons">
          <a class="button is-primary">Primary</a>
          <a class="is-link">Link</a>
        </div>
      </div>
    </div>

    <article class="polaris-message">
      <div class="polaris-message-header">
        <p>Order archived</p>
      </div>
      <div class="polaris-message-body">
        This order was archived on March 7, 2017 at 3:12pm EDT.
      </div>
    </article>

    <div class="section-card">
      <button class="button is-primary" data-tooltip="Tooltip Text">Tooltip</button>

      <button class="button is-primary" data-tooltip="Test page loader" @click="enablePageLoader()">Page loader</button>
      <PLoading :active="loading" message="Waiting for us">
      </PLoading>

      <PUpload v-model="testFile"></PUpload>
    </div>
  </div>
</template>

<script>
import PLoading from '@/components/PLoading/PLoading.vue';
import PUpload from '@/components/PUpload/PUpload.vue';
import DropdownCheckbox from '@/components/DropdownCheckbox/DropdownCheckbox.vue';

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    PLoading,
    PUpload,
    DropdownCheckbox,
  },
  data() {
    return {
      loading: false,
      testFile: null,
      dropDownTitle: 'Sample Title Hoho',
      dropDownItems: [
          {value: 'sample_value_1', text: 'Sample Text 1'},
          {value: 'sample_value_2', text: 'Sample Text 2'},
          {value: 'sample_value_3', text: 'Sample Text 3'},
          {value: 'sample_value_4', text: 'Sample Text 4'},
      ],
    };
  },
  methods: {
    enablePageLoader: function() {
      this.loading = true;

      const self = this;
      setTimeout(() => {
        self.loading = false;
      }, 3000);
    },
    dropDownStatusChecked(value) {
      console.log(value);
    },
    dropDownCheckedClear(value) {
      console.log(value);
    },
  },
};
</script>
