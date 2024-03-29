<template>
  <div class="container mx-auto px-4 mb-10">
    <div class="md:flex justify-between">
      <div class="mb-10 md:w-6/12">
        <h1 class="text-3xl font-bold uppercase mb-4">
          Contact Me
        </h1>
        <address
          class="not-italic"
          itemprop="address"
          itemscope=""
          itemtype="http://schema.org/PostalAddress"
        >
          <span itemprop="name">HOOPOE LTD</span>
          <br />
          Phone:
          <a href="tel:+1 (650) 319-8016" itemprop="telephone">
           +1 (650) 319-8016
          </a>
          <br />
          Email:
          <a href="mailto:talal@hoopoecommerce.com" itemprop="email">
            talal@hoopoecommerce.com
          </a>
        </address>
      </div>
      <div class="md:w-6/12">
        <form @submit.prevent="submit">
          <div :class="['mb-4', $v.name.$error && 'error']">
            <label
              :class="['block mb-1', $v.name.$error && 'text-red']"
              for="name"
            >
              Name
            </label>
            <input
              id="name"
              :class="[
                'border radius rounded border-gray p-2 w-full',
                $v.name.$error && 'border-red'
              ]"
              v-model.trim="$v.name.$model"
              type="text"
              placeholder="Your name"
              autocomplete="name"
              autofocus
            />
            <div v-if="$v.name.$error" class="mt-1">
              <div v-if="!$v.name.required" class="text-xs text-red">
                Field is required.
              </div>
            </div>
          </div>
          <div :class="['mb-4', $v.email.$error && 'error']">
            <label
              :class="['block mb-1', $v.email.$error && 'text-red']"
              for="email"
            >
              Email
            </label>
            <input
              id="email"
              :class="[
                'border radius rounded border-gray p-2 w-full',
                $v.email.$error && 'border-red'
              ]"
              v-model.trim="$v.email.$model"
              type="email"
              autocomplete="email"
              placeholder="Your email address"
            />
            <div v-if="$v.email.$error" class="mt-1">
              <div v-if="!$v.email.required" class="text-xs text-red">
                Field is required.
              </div>
              <div v-if="!$v.email.email" class="text-xs text-red">
                Please enter a valid email address.
              </div>
            </div>
          </div>
          <div :class="['mb-4', $v.phone.$error && 'error']">
            <label
              :class="['block mb-1', $v.phone.$error && 'text-red']"
              for="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              :class="[
                'border radius rounded border-gray p-2 w-full',
                $v.phone.$error && 'border-red'
              ]"
              v-model.trim="$v.phone.$model"
              type="text"
              placeholder="Phone number"
              autocomplete="tel"
            />
            <div v-if="$v.phone.$error" class="mt-1">
              <div v-if="!$v.phone.required" class="text-xs text-red">
                Field is required.
              </div>
            </div>
          </div>
          <div :class="['mb-4', $v.message.$error && 'error']">
            <label
              :class="['block mb-1', $v.message.$error && 'text-red']"
              for="message"
            >
              Message
            </label>
            <textarea
              id="message"
              :class="[
                'border radius rounded border-gray p-2 w-full',
                $v.message.$error && 'border-red'
              ]"
              v-model="$v.message.$model"
              rows="6"
              placeholder="Message"
            />
            <div v-if="$v.message.$error" class="mt-1">
              <div v-if="!$v.message.required" class="text-xs text-red">
                Field is required.
              </div>
            </div>
          </div>
          <div class="my-4">
            <p
              v-if="submitStatus === 'ERROR' && errorMessage"
              class="p-2 text-red border-red border rounded flex items-center"
            >
              <inlineSvg class="w-5 mr-2" src="cloud_mail" />
              <span>{{ errorMessage }}</span>
            </p>
            <p
              v-if="submitStatus === 'OK'"
              class="p-2 text-green border-green border rounded flex items-center"
            >
              <inlineSvg class="w-5 mr-2" src="ok" />
              <span>Thanks for contacting me!, I'll get back to you soon.</span>
            </p>
            <p
              v-if="submitStatus === 'PENDING'"
              class="p-2 text-green border-green border rounded flex items-center"
            >
              <inlineSvg class="w-5 mr-2" src="cloud_mail" />
              <span>Sending...</span>
            </p>
          </div>
          <button
            :class="[
              'uppercase bg-orange text-white font-bold rounded px-8 py-3 flex items-center justify-center w-full',
              { 'bg-gray': submitStatus === 'PENDING' }
            ]"
            :disabled="submitStatus === 'PENDING'"
            type="submit"
          >
            <inlineSvg class="w-5 mr-2" src="cloud_mail" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import InlineSvg from '~/components/InlineSvg'

export default {
  components: {
    InlineSvg
  },
  mixins: [validationMixin],
  data() {
    return {
      submitStatus: null,
      errorMessage: null,
      email: null,
      name: null,
      message: null,
      phone: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required
    },
    phone: {
      required
    },
    message: {
      required
    }
  },
  methods: {
    setPhone(event) {
      this.phone = event
    },
    async submit() {
      this.$v.$touch()
      this.errorMessage = null
      this.submitStatus = null
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        const res = await this.$http.$post(`${window.origin}/api/contact`, {
          email: this.email,
          name: this.name,
          phone: this.phone,
          message: this.message
        })
        if (res.statusCode === 200) {
          this.submitStatus = 'OK'
          this.$v.$reset()
          this.email = null
          this.name = null
          this.message = null
          this.phone = null
        } else {
          this.submitStatus = 'ERROR'
          this.errorMessage = res.body
        }
      }
    }
  }
}
</script>

<style>
.error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
}

@keyframes shakeError {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(0.375rem);
  }
  30% {
    transform: translateX(-0.375rem);
  }
  45% {
    transform: translateX(0.375rem);
  }
  60% {
    transform: translateX(-0.375rem);
  }
  75% {
    transform: translateX(0.375rem);
  }
  90% {
    transform: translateX(-0.375rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
