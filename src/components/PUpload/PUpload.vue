<template>
  <div :class="{ 'upload-wrapper': true, 'drag-active': dragging }"
    @dragenter.prevent="onDragEnter"
    @dragleave.preevent="onDragLeave"
    @drop.prevent="onDrag"
    >
    <div class="upload-content">
      <img src="@/assets/dropzone.svg" class="upload-image" />
      <div class="upload-title">
        <template v-if="dragging">
          Drop file here to upload
        </template>
        <template v-else>
          Drop or click to upload
        </template>
      </div>
      <div class="upload-description">
        <slot></slot>
      </div>
    </div>
   <input type="file" @change="onChange">
  </div>
</template>

<script>
export default {
  name: 'PUpload',
  props: ['file'],
  data() {
    return {
      dragging: false
    }
  },
  methods: {
    mounted() {
    },
    onDragLeave(event) {
      this.dragging = false;
      event.preventDefault()
    },
    onDragEnter(event) {
      this.dragging = true;
      event.preventDefault()
    },
    onDrag(event) {
      this.onChange(event);
      event.preventDefault();
    },
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      
      if (!files.length) {
        this.dragging = false;
        return;
      }
      
      this.$emit('input', files[0]);
    },
  },
}
</script>

<style lang="scss">
</style>
