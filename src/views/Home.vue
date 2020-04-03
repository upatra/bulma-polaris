<template>
  <div class="container">
    <h1 class="title">
      Bulma - Polaris
    </h1>

    <p class="subtitle">
    Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
    <br/>
    </p>

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
import PLoading from '@/components/PLoading/PLoading.vue'
import PUpload from '@/components/PUpload/PUpload.vue'

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    PLoading,
    PUpload
  },
  data() {
    return {
      loading: false,
      testFile: null
    }
  },
  methods: {
    enablePageLoader: function() {
      this.loading = true

      const self = this;
      setTimeout(() => {
        self.loading = false;
      }, 3000)
    },
  },
}
</script>
