<template>
  <div>
    <div class="thanks">
      <div class="payment-success-img">
        <img src="https://sssc.vic.edu.au/wp-content/uploads/2018/08/checkmark.gif">
        <span>PAYMENT SUCCESS</span>
      </div>
      <div class="amount">
        <svg class="item-image" viewBox="0 0 338.13 330.24"><path d="M314.82,292.65a192,192,0,0,0,23.31-32.92l-39.45-19.64A120.78,120.78,0,0,1,278,266c-11,10.21-22.7,16.16-34.61,17.68-23,2.94-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.66-65.44,37.39A191.89,191.89,0,0,0,0,306.13l39.44,19.64a121.7,121.7,0,0,1,20.64-25.93c10.88-10.07,22.52-16,34.62-17.51a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,326.22,295.89,313.87,314.82,292.65Zm0-117.48a192,192,0,0,0,23.31-32.92l-39.45-19.64A121,121,0,0,1,278,148.53c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.65-65.44,37.39A191.5,191.5,0,0,0,0,188.65l39.44,19.64a122,122,0,0,1,20.64-25.94C71,172.29,82.6,166.4,94.7,164.85a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,208.74,295.89,196.39,314.82,175.17Zm0-117.48a192,192,0,0,0,23.31-32.92L298.68,5.13A121,121,0,0,1,278,31.05c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21C156.28,13.72,128.37-4.19,88.76.87,64.72,4,42.7,16.52,23.32,38.26A191.5,191.5,0,0,0,0,71.17L39.44,90.81A122,122,0,0,1,60.08,64.87C71,54.81,82.6,48.92,94.7,47.37a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.64,33.14,92.17,28C273.87,91.26,295.89,78.91,314.82,57.69Z"></path>
        </svg>
        <span class="total">
          {{ this.amountReceived || numberWithCommas }}
        </span>
      </div>
      <div class="text">
        This page will close in {{ timeout }} sec.
      </div>
    </div>
    <div class="back-btn" @click="back()">
      OK
    </div>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js'
import { mapActions } from 'vuex'

export default {
  name: 'thankyou',
  data () {
    return {
      amountReceived: BigNumber(0),
      timeout: 6
    }
  },
  filters: {
    numberWithCommas (x) {
      let parts = x.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
  },
  created () {
    if (this.$route.query && this.$route.query.amountReceived) {
      this.amountReceived = this.$route.query.amountReceived
    }
    setInterval(() => {
      this.timeout--
    }, 1000)
  },
  watch: {
    timeout (val) {
      if (val === 0) {
        this.back()
      }
    }
  },
  methods: {
    ...mapActions({
      clearItems: 'clearItems'
    }),
    back () {
      this.clearItems()
      this.$router.push({ name: 'Merchant' })
    }
  }
}
</script>

<style lang="scss" scoped>
.thanks {
  text-align: center;
  margin: 10px auto;
  width: 70%;
  background-color: #fff;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5);
  height: 440px;

  .payment-success-img {
    margin-top: 60px;
    margin-bottom: 20px;
    img {
      width: 42px;
      height: 42px;
      line-height: 42px;
      margin-right: 20px;
      vertical-align: middle;
    }
    span {
      font-size: 35px;
      color: #74b040;
      line-height: 42px;
      font-weight: bold;
      vertical-align: middle;
    }
  }
  .amount {
    .item-image {
      width: 42px;
      height: 42px;
      display: inline-block;
      fill: currentColor;
      color: #42318c;
    }
    .total {
      font-size: 55px;
      color: #512da8;
    }
  }
  .text {
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-top: 20px;
    background-color: #ffffffaa;
    border-radius: 3px;
    padding: 15px;
    width: 90%;
    margin: 15px auto;
  }
}
.back-btn {
  width: 200px;
  margin: 0 auto;
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
  margin-top: 30px;
}
</style>
