<template>
  <div>
    <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Thank you
          </h1>
          <h2 class="subtitle">
            We've received {{ this.amountReceived || numberWithCommas }}
          </h2>
        </div>
      </div>
    </section>
    <br />
    <b-button type="is-primary" size="is-large" @click="back()">Back</b-button>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js'

export default {
  name: 'thankyou',
  data () {
    return {
      amountReceived: BigNumber(0)
    }
  },
  filters: {
    numberWithCommas (x) {
      let parts = x.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
  },
  components: {
  },
  created () {
    if (this.$route.query && this.$route.query.amountReceived) {
      this.amountReceived = this.$route.query.amountReceived
    }
  },
  methods: {
    back () {
      this.$router.push({ name: 'Merchant' })
    }
  }
}
</script>
