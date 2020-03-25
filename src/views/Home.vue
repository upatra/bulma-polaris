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

    <article class="message">
      <div class="message-header">
        <p>Order archived</p>
      </div>
      <div class="message-body">
        This order was archived on March 7, 2017 at 3:12pm EDT.
      </div>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
