<template>
  <div class="content">
    <ItemList />
    <br />
    <br />
    <div class="buttons" style="margin: 0 auto;width: fit-content;">
      <b-button type="is-primary" size="is-large" @click="openCheckout()">PAY <span v-if="this.total != 0">({{ this.total | numberWithCommas }})</span></b-button>
      <b-button type="is-primary" size="is-large" @click="clear()">Clear</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import BigNumber from 'bignumber.js'
import ItemList from '@/components/ItemList'

export default {
  name: 'merchant',
  components: {
    ItemList
  },
  filters: {
    numberWithCommas (x) {
      let parts = x.toFixed(2).split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions({
      updateTotal: 'updateTotal'
    }),
    openCheckout () {
      this.$router.push({ name: 'Checkout' })
    },
    clear () {
      this.updateTotal(BigNumber(0))
    }
  },
  computed: {
    ...mapState({
      total: state => state.total
    })
  }
}
</script>
