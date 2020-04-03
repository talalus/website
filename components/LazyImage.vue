<template>
  <picture>
    <source
      :data-srcSet="require(`~/assets/images/${dataSrc}?webp`)"
      type="image/webp"
    />
    <source
      :data-srcSet="require(`~/assets/images/${dataSrc}?url`)"
      type="image/jpeg"
    />
    <img
      :data-src="require(`~/assets/images/${dataSrc}?url`)"
      :alt="alt"
      class="lazyload"
    />
  </picture>
</template>
<script>
export default {
  props: {
    dataSrc: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: null
    }
  }
}
</script>
