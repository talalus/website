<template>
  <div>
    <section
      class="h-screen container w-full flex items-center mx-auto -mt-32"
      style="min-height: 650px"
    >
      <div class="p-1 max-w-5xl mx-auto">
        <LazyImage
          data-src="overlay.png"
          alt="HOOPOE MEDIA Front End eCommerce services"
        />
        <div
          class="max-w-md lg:max-w-3xl mt-2 sm:mt-0 sm:bottom-0 sm:ml-32 sm:-mt-20 md:ml-40 md:-mt-24 lg:ml-48 lg:-mt-32"
        >
          <h1
            class="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none"
          >
            eCommerce Front End Development Services
          </h1>
        </div>
      </div>
    </section>
    <section class="py-16">
      <h2 class="text-3xl font-bold uppercase mb-4">Recent Work</h2>
      <div class="w-full flex items-center mb-4">
        <inlineSvg class="w-48 m-auto" src="jarir" />
      </div>
      <div class="w-full flex items-center">
        <div class="m-auto max-w-5xl">
          <lazy-image data-src="jarir.jpg" alt="Jarir.com" />
        </div>
      </div>
      <div class="text-center my-4">
        <a
          href="https://jarir.com"
          target="_blank"
          rel="nofollow"
          class="p-2 text-orange underline uppercase"
        >
          View Jarir.com
        </a>
      </div>
    </section>
    <section class="py-16 flex items-center flex-col-reverse md:flex-row">
      <div class="mb-auto md:m-0 md:w-6/12">
        <div class="max-w-md flex items-center flex-wrap m-auto">
          <div class="w-4/12">
            <inlineSvg src="magento" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="js" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="vuejs" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="vue-storefront" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="nuxt" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="webpack" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="sass" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="git" class="w-16 mx-auto my-4" />
          </div>
          <div class="w-4/12">
            <inlineSvg src="docker" class="w-16 mx-auto my-4" />
          </div>
        </div>
      </div>
      <div class="mt-auto md:m-0 md:w-6/12">
        <div class="mb-16 md:mb-0 max-w-md">
          <h2 class="text-3xl font-bold uppercase mb-4">Technologies</h2>
          <p class="text-xl">
            A concise list of some of the most valuable professional skills I
            possess. My tricks of the trade and what I can bring to the table.
          </p>
        </div>
      </div>
    </section>
    <section
      class="py-16 flex items-center flex-col-reverse md:flex-row overflow-hidden"
    >
      <div class="mb-auto md:m-0 md:w-6/12">
        <div
          class="max-w-md m-auto relative"
          style="min-height: 300px; min-width: 450px"
        >
          <lazy-image
            data-src="big_frontend_developer.png"
            alt="Magento certified frontend develop"
            class="absolute"
            style="right: 25%; top: 10%"
          />
          <lazy-image
            data-src="big_frontend_developer_m2.png"
            alt="Magento 2 certified frontend developer"
            class="absolute"
            style="left: 25%; top: 30%"
          />
        </div>
      </div>
      <div class="mt-auto md:m-0 md:w-6/12">
        <div class="mb-16 md:mb-0 max-w-md">
          <h2 class="text-3xl font-bold uppercase mb-4 max-w-sm leading-tight">
            Magento certified front end developer
          </h2>
          <a
            href="https://u.magento.com/certification/directory/dev/id/1813515/"
            target="_blank"
            rel="nofollow"
            class="py-2 text-orange underline uppercase"
          >
            View Certifications
          </a>
        </div>
      </div>
    </section>
    <section class="py-16 flex items-center flex-col-reverse md:flex-row">
      <div class="mb-auto md:m-0 md:w-6/12">
        <div class="max-w-md m-auto relative">
          <div
            class="m-auto rounded-md overflow-hidden"
            style="max-width: 200px"
          >
            <lazy-image data-src="talal_suhail.jpg" alt="Talal Suhail" />
          </div>
        </div>
      </div>
      <div class="mt-auto md:m-0 md:w-6/12">
        <div class="mb-16 md:mb-0 max-w-md">
          <p class="text-xl mb-4 max-w-sm leading-tight">
            HOOPOE is the independent consultancy of Talal Suhail. My focus is
            Front End development for eCommerce.
          </p>
        </div>
      </div>
    </section>
    <section class="py-16 text-center my-10">
      <nuxt-link
        to="contact"
        class="uppercase bg-orange text-white font-bold rounded px-8 py-3"
      >
        Contact Me
      </nuxt-link>
    </section>
  </div>
</template>
<script>
import LazyImage from '~/components/LazyImage.vue'
import InlineSvg from '~/components/InlineSvg.vue'

export default {
  components: {
    LazyImage,
    InlineSvg
  }
}
</script>
