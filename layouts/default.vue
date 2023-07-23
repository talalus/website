<template>
  <div class="min-h-screen flex flex-col justify-between">
    <header class="p-3 flex items-center justify-between absolute w-full">
      <nuxt-link to="/">
        <inlineSvg class="logo w-40" src="logo" />
      </nuxt-link>
      <nuxt-link to="/contact" class="uppercase">
        Say Hi!
      </nuxt-link>
    </header>
    <div class="main-content pl-1 pr-1 pt-32">
      <nuxt />
    </div>
    <footer
      class="p-2 w-full flex flex-col-reverse md:flex-row items-center justify-between border-t border-gray text-dark-gray"
    >
      <div>
        <small class="text-xs">&copy; Copyright 2023, HOOPOE LTD</small>
      </div>
      <div class="flex justify-end content-center">
        <a
          href="https://github.com/hoopoecommerce"
          title="@hoopoecommerce"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2 fill-current" src="github" />
        </a>
        <a
          href="https://www.linkedin.com/company/hoopoecommerce/"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="linkedin" />
        </a>
        <a
          href="https://twitter.com/hoopoecommerce"
          title="@HoopoeMediaApps"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="twitter" />
        </a>
        <a
          href="https://www.facebook.com/hoopoecommerce/"
          title="@HoopoeMediaApps"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="facebook" />
        </a>
        <a
          href="https://www.instagram.com/hoopoecommerce/"
          title="@HoopoeMediaApps"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="instagram" />
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
import InlineSvg from '~/components/InlineSvg'
export default {
  components: {
    InlineSvg
  }
}
</script>
