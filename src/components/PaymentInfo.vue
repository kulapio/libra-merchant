<template>
  <div class="wallet-container">
    <div
        v-if="!this.receiverAddress"
        class="card"
      >
      <img src="https://cdn.dribbble.com/users/1187836/screenshots/6012802/13-qrcode.gif">
      <div>
        Generating payment ...
      </div>
    </div>
    <div v-else class="card pd-t-36px">
      <div class="mg-bt-25px">
        Use
        <a href="https://dev.kulap.io/libra" target="_blank">
          <b>KULAP Libra Wallet POC</b>
        </a>
        to pay by scanning QR code.
      </div>
      <qrcode-vue
        :value="qrText"
        :size="size"
        background="#FFFFFF"
        level="H"
      />
      <!-- <div class="address content">
        <div>
          or copy address below to pay with other <b>Libra Wallet</b> manually.
        </div>
        <br>
        <b>{{ receiverAddress }}</b>
      </div> -->
      <div>
        <svg class="item-image" viewBox="0 0 338.13 330.24"><path d="M314.82,292.65a192,192,0,0,0,23.31-32.92l-39.45-19.64A120.78,120.78,0,0,1,278,266c-11,10.21-22.7,16.16-34.61,17.68-23,2.94-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.66-65.44,37.39A191.89,191.89,0,0,0,0,306.13l39.44,19.64a121.7,121.7,0,0,1,20.64-25.93c10.88-10.07,22.52-16,34.62-17.51a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,326.22,295.89,313.87,314.82,292.65Zm0-117.48a192,192,0,0,0,23.31-32.92l-39.45-19.64A121,121,0,0,1,278,148.53c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.65-65.44,37.39A191.5,191.5,0,0,0,0,188.65l39.44,19.64a122,122,0,0,1,20.64-25.94C71,172.29,82.6,166.4,94.7,164.85a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,208.74,295.89,196.39,314.82,175.17Zm0-117.48a192,192,0,0,0,23.31-32.92L298.68,5.13A121,121,0,0,1,278,31.05c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21C156.28,13.72,128.37-4.19,88.76.87,64.72,4,42.7,16.52,23.32,38.26A191.5,191.5,0,0,0,0,71.17L39.44,90.81A122,122,0,0,1,60.08,64.87C71,54.81,82.6,48.92,94.7,47.37a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.64,33.14,92.17,28C273.87,91.26,295.89,78.91,314.82,57.69Z"></path>
        </svg>
        <span class="total">{{ total }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PaymentInfo',
  components: {
    QrcodeVue
  },
  props: ['receiverAddress'],
  data () {
    return {
      size: 260
    }
  },
  computed: {
    ...mapState({
      userAddress: state => state.userAddress,
      total: state => state.total
    }),
    qrText () {
      return JSON.stringify({
        type: 'peer_to_peer_payment',
        address: this.receiverAddress,
        amount: this.total.toString(10),
        // merchant: 'Libra Coffee'
        merchant: 'CLASS CAFE'
      })
    },
    shareUrl () {
      return `https://dev.kulap.io/libra/#/receive?address=${this.userAddress}`
    },
    shareText () {
      return `Hi there, this's my Libra Merchant!
      Please send Libra coin to me at address :
      ${this.userAddress}`
    }
  },
  created () {
    // if (this.$route.query && this.$route.query.address) {
    //   this.updateUserAddress(this.$route.query.address)
    // } else if (this.userAddress) {
    //   this.updateUserAddress(this.userAddress)
    // } else {
    //   this.$router.push({ name: 'Wallet' })
    // }
  },
  methods: {
    ...mapActions({
      updateUserAddress: 'updateUserAddress',
      updateTotal: 'updateTotal'
    }),
    back () {
      this.$router.push({ name: 'Wallet' })
    },
    copyAddress () {
      this.copyText(this.userAddress)
    },
    copyText (text) {
      this.$copyText(text).then((e) => {
        this.$toast.open({
          message: 'Copied!',
          position: 'is-bottom',
          type: 'is-success'
        })
      }, (e) => {
        this.$toast.open({
          duration: 5000,
          message: 'Can\'t copy',
          position: 'is-bottom',
          type: 'is-danger'
        })
      })
    },
    copyPublicLink () {
      this.copyText(this.shareUrl)
    }
  }
}
</script>

<style lang="scss">
.card {
  margin-top: 0 !important;
}
.card-footer-item {
  padding: 0 !important;
  border: 0 !important;
}
.share-facebook-btn {
  width: 100%;
  button {
    width: 100%;
    max-width: 300px;
    height: 60px;
    margin-bottom: 20px;
  }
}
</style>

<style lang="scss" scoped>
.pd-t-36px {
  padding-top: 36px;
}
.mg-bt-25px {
  margin-bottom: 25px;
}
.wallet-container {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.wallet-body {
  padding-bottom: 2rem;
  padding-top: 2rem;
}
.card {
  width: 100%;
  height: 440px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 3px;
}
.address {
  margin-top: 10px;
  overflow-wrap: break-word;
}
.button-box {
  margin-top: 25px;
  padding: 0 30px;
  button {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    max-width: 300px;
  }
}
/* on desktop */
@media only screen and (min-width: 1025px) {
  .wallet-container {
    margin: 10px auto;
    width: 70%;
    border-radius: 3px;
  }
  .wallet-body {
    padding-bottom: 6rem;
    padding-top: 6rem;
  }
}
</style>
<style scoped>
.item-image {
  width: 42px;
  height: 42px;
  display: inline-block;
  fill: currentColor;
  color: #42318c;
}
.total {
  font-size: 55px;
  margin-left: 10px;
  color: #512da8;
}
</style>
