<template>
  <div class="thanks">
    <img src="https://cdn.dribbble.com/users/1735807/screenshots/4290582/03.gif">
    <div class="text">
      Your payment success ({{ this.amountReceived || numberWithCommas }} Libra)
      <div>
        This page will close in {{ timeout }} sec.
      </div>
    </div>
    <div class="back-btn" @click="back()">
      Continue
    </div>
    <!-- <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Thank you
          </h1>
          <h2 class="subtitle">
            We've received 
          </h2>
        </div>
      </div>
    </section>
    <br />
    <b-button type="is-primary" size="is-large" @click="back()">Back</b-button> -->
  </div>
</template>

<script>
import BigNumber from 'bignumber.js'

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
  components: {
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
    back () {
      this.$router.push({ name: 'Merchant' })
    }
  }
}
</script>

<style lang="scss" scoped>
.thanks {
  text-align: center;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5);

  img {
    border-radius: 3px;
  }
  .text {
    font-size: 24px;
    font-weight: bold;
    color: #228ec7;
    margin-top: 20px;
    background-color: #ffffffaa;
    border-radius: 3px;
    padding: 15px;
    width: 90%;
    margin: 15px auto;
  }
  .back-btn {
    width: 90%;
    margin: 0 auto;
    border-radius: 3px;
    background-color: #228ec7;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    color: #ffffff;
    text-align: center;
    padding: 20px;
    cursor: pointer;
  }
}
</style>
