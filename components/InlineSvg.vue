<template>
  <div v-html="require(`~/assets/svg/${src}.svg?include`)"></div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
