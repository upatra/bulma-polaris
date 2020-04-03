<template>
  <div :class="{ pageloader: true, 'is-active': active }"><span class="title">{{ message || 'Loading' }}</span></div>
</template>

<script>
export default {
  name: 'PLoading',
  props: ['active', 'message'],
}
</script>
