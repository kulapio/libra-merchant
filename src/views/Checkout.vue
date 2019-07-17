<template>
  <div>
    <PaymentInfo/>
    <b-button type="is-primary" size="is-large" @click="back()">Back</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import BigNumber from 'bignumber.js'
import PaymentInfo from '@/components/PaymentInfo'
import Footer from '@/components/Footer'

export default {
  name: 'checkout',
  components: {
    PaymentInfo,
    Footer
  },
  methods: {
    ...mapActions({
      updateTotal: 'updateTotal'
    }),
    back () {
      this.updateTotal(BigNumber(0))
      this.$router.push({ name: 'Merchant' })
    }
  }
}
</script>
