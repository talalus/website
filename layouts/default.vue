<template>
  <div class="min-h-screen flex flex-col justify-between">
    <header class="p-3 flex items-center justify-between absolute w-full">
      <nuxt-link to="/">
        <inlineSvg class="logo w-40" src="logo" />
      </nuxt-link>
      <nuxt-link to="/contact" class="uppercase">
        Contact
      </nuxt-link>
    </header>
    <div class="main-content pl-1 pr-1 pt-32">
      <nuxt />
    </div>
    <footer
      class="p-2 w-full flex items-center justify-between border-t border-gray text-black"
    >
      <div>
        <small class="text-xs">&copy; Copyright 2020, HOOPOE.MEDIA</small>
      </div>
      <div class="flex w-1/2 justify-end content-center">
        <a
          href="https://github.com/talalus"
          title="Talal Suhail on Github"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/talalus/"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="linkedin" />
        </a>
        <a
          href="https://twitter.com/HoopoeMediaApps"
          title="@HoopoeMediaApps"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="twitter" />
        </a>
        <a
          href="https://www.facebook.com/HoopoeMediaApps/"
          title="@HoopoeMediaApps"
          target="_blank"
          rel="nofollow"
        >
          <inlineSvg class="w-12 p-2" src="facebook" />
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
