<template>
  <div class="bill">
    <div class="invoice">
      <div class="checkout-header">
        Checkout
      </div>
      <div class="table-head columns">
        <div class="column is-half">
          Name
        </div>
        <div class="column">
          Qty
        </div>
        <div class="column">
          Price
        </div>
        <div class="column"/>
      </div>
      <div
        v-for="(item, i) in items"
        :key="i"
        class="table-body columns"
      >
        <div class="column is-half is-dots">
          {{ item.title }}
        </div>
        <div class="column">
          {{ item.amount }}
        </div>
        <div class="column">
          {{ item.price }}
        </div>
        <div class="column">
          del
        </div>
      </div>
      <div class="summary">
        <div class="columns">
          <div class="column total">
            Total
          </div>
          <div class="column total">
            <img :src="require('@/assets/img/libra/icon-libra.png')">
            <span>{{ total | numberWithCommas }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pay-button" @click="openCheckout()">
      PAY ({{ total | numberWithCommas }})
    </div>
    <div class="clear-button" @click="clear()">
      CLEAR
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BigNumber from 'bignumber.js'

export default {
  name: 'Bill',
  filters: {
    numberWithCommas (x) {
      let parts = x.toFixed(2).split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.items,
      total: state => state.total
    })
  },
  methods: {
    ...mapActions({
      clearItems: 'clearItems'
    }),
    openCheckout () {
      if (this.items.length) {
        this.$router.push({ name: 'Checkout' })
      }
    },
    clear () {
      this.clearItems()
    }
  }
}
</script>

<style lang="scss" scoped>
.bill {
  width: 100%;

  .invoice {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    background-color: #f1f1f1;
    padding: 16px 0;
    height: 70vh;
    margin-bottom: 15px;
    font-family: Avenir;
    font-size: 14px;
    font-weight: 500;
    color: #5a5a5a;
    position: relative;

    .checkout-header {
      font-family: Avenir;
      font-size: 20px;
      font-weight: 900;
      color: #000000;
      text-align: center;
      margin-bottom: 10px;
    }
    .table-head {
      background-color: #d1d1d1;
      width: 100%;
      margin: 0 auto;
    }
    .table-body {
      width: 100%;
      margin: 0 auto;
      border-bottom: solid 1px #cacaca;
    }
  }

  .summary {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    color: #512da8;
  }

  .total {
    text-align: center;
    * {
      line-height: 25px;
      vertical-align: middle;
    }
    img {
      margin-right: 10px;
    }
  }

  .pay-button {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5);
    background-color: #9013fe;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    color: #ffffff;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  .clear-button {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    color: #000;
    text-align: center;
    padding: 20px;
    cursor: pointer;
  }
}
</style>
