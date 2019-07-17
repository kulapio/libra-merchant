<template>
  <div class="content">
    <div class="tile is-ancestor">
      <div v-for="item in items" v-bind:key="item.title" class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{ item.title }}</p>
          <p class="subtitle">{{ item.subtitle }}</p>
          <figure class="image is-4by3">
            <img :src="require(`../assets/img/${item.image}.jpg`)"
                  :srcset="require(`../assets/img/${item.image}@2x.jpg`) + ' 2x,' + require(`../assets/img/${item.image}@3x.jpg`) + ' 3x'"
                class="Image-coffee1">
          </figure>
          <div style="width:100%;">
            <div style="width:fit-content;margin: 0 auto;">
              <svg class="item-image" viewBox="0 0 338.13 330.24"><path d="M314.82,292.65a192,192,0,0,0,23.31-32.92l-39.45-19.64A120.78,120.78,0,0,1,278,266c-11,10.21-22.7,16.16-34.61,17.68-23,2.94-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.66-65.44,37.39A191.89,191.89,0,0,0,0,306.13l39.44,19.64a121.7,121.7,0,0,1,20.64-25.93c10.88-10.07,22.52-16,34.62-17.51a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,326.22,295.89,313.87,314.82,292.65Zm0-117.48a192,192,0,0,0,23.31-32.92l-39.45-19.64A121,121,0,0,1,278,148.53c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.65-65.44,37.39A191.5,191.5,0,0,0,0,188.65l39.44,19.64a122,122,0,0,1,20.64-25.94C71,172.29,82.6,166.4,94.7,164.85a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,208.74,295.89,196.39,314.82,175.17Zm0-117.48a192,192,0,0,0,23.31-32.92L298.68,5.13A121,121,0,0,1,278,31.05c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21C156.28,13.72,128.37-4.19,88.76.87,64.72,4,42.7,16.52,23.32,38.26A191.5,191.5,0,0,0,0,71.17L39.44,90.81A122,122,0,0,1,60.08,64.87C71,54.81,82.6,48.92,94.7,47.37a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.64,33.14,92.17,28C273.87,91.26,295.89,78.91,314.82,57.69Z"></path>
              </svg>
              <span class="item-price">{{ item.price | numberWithCommas }}</span>
            </div>
            <b-button type="is-info" size="is-large" @click="order(item)">Order</b-button>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div v-for="item in items" v-bind:key="item.title" class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{ item.title }}</p>
          <p class="subtitle">{{ item.subtitle }}</p>
          <figure class="image is-4by3">
            <img :src="require(`../assets/img/${item.image}.jpg`)"
                  :srcset="require(`../assets/img/${item.image}@2x.jpg`) + ' 2x,' + require(`../assets/img/${item.image}@3x.jpg`) + ' 3x'"
                class="Image-coffee1">
          </figure>
          <div style="width:100%;">
            <div style="width:fit-content;margin: 0 auto;">
              <svg class="item-image" viewBox="0 0 338.13 330.24"><path d="M314.82,292.65a192,192,0,0,0,23.31-32.92l-39.45-19.64A120.78,120.78,0,0,1,278,266c-11,10.21-22.7,16.16-34.61,17.68-23,2.94-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.66-65.44,37.39A191.89,191.89,0,0,0,0,306.13l39.44,19.64a121.7,121.7,0,0,1,20.64-25.93c10.88-10.07,22.52-16,34.62-17.51a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,326.22,295.89,313.87,314.82,292.65Zm0-117.48a192,192,0,0,0,23.31-32.92l-39.45-19.64A121,121,0,0,1,278,148.53c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24,3.08-46.06,15.65-65.44,37.39A191.5,191.5,0,0,0,0,188.65l39.44,19.64a122,122,0,0,1,20.64-25.94C71,172.29,82.6,166.4,94.7,164.85a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.66,33.15,92.17,28C273.87,208.74,295.89,196.39,314.82,175.17Zm0-117.48a192,192,0,0,0,23.31-32.92L298.68,5.13A121,121,0,0,1,278,31.05c-11,10.21-22.7,16.16-34.61,17.68-23,2.93-39.07-4.17-62.51-19.21C156.28,13.72,128.37-4.19,88.76.87,64.72,4,42.7,16.52,23.32,38.26A191.5,191.5,0,0,0,0,71.17L39.44,90.81A122,122,0,0,1,60.08,64.87C71,54.81,82.6,48.92,94.7,47.37a79.51,79.51,0,0,1,10-.66c18.14,0,32.71,7,52.52,19.71,23,14.77,51.64,33.14,92.17,28C273.87,91.26,295.89,78.91,314.82,57.69Z"></path>
              </svg>
              <span class="item-price">{{ item.price | numberWithCommas }}</span>
            </div>
            <b-button type="is-info" size="is-large" @click="order(item)">Order</b-button>
          </div>
        </article>
      </div>
    </div>
    <div class="buttons" style="margin: 0 auto;width: fit-content;">
      <b-button type="is-primary" size="is-large" @click="openCheckout()">Checkout {{ this.total | numberWithCommas }}</b-button>
      <b-button type="is-primary" size="is-large" @click="clear()">Clear</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WalletInfo from '@/components/WalletInfo'
import Footer from '@/components/Footer'
import { mapActions, mapState } from 'vuex'
import BigNumber from 'bignumber.js'

export default {
  name: 'merchant',
  components: {
    WalletInfo,
    Footer
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
      items: [{
        title: 'Espresso',
        subtitle: 'Blue Ridge Blend',
        price: 4.35,
        image: 'espresso/image-coffee-1'
      },
      {
        title: 'Choco Frappe',
        subtitle: 'Locally Roasted',
        price: 7.00,
        image: 'choco_frappe/image-coffee-2'
      },
      {
        title: 'Caramel Frappe',
        subtitle: 'Decaf Colombia',
        price: 7.50,
        image: 'caramel_frappe/image-coffee-3'
      }]
    }
  },
  methods: {
    ...mapActions({
      updateTotal: 'updateTotal'
    }),
    getImgUrl (pet) {
      var images = require.context('../assets/img/', false, /\.jpg$/)
      return images('./' + pet + '.jpg')
    },
    openCheckout () {
      this.$router.push({ name: 'Checkout' })
    },
    order (item) {
      this.updateTotal(this.total.plus(BigNumber(item.price)))
      console.log(this.total.toString(10))
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

<style scoped>
.content {
  width: 80%;
  margin: 0 auto;
}
.title {
  /* text-align: left; */
}
.subtitle {
  /* text-align: left; */
}
.Image-coffee1 {
  width: 144.4px;
  height: 144.4px;
  object-fit: contain;
}
.item-image {
  width: 42px;
  height: 42px;
  display: inline-block;
  fill: currentColor;
  color: #42318c;
}
.item-price {
  display: inline-block;
  font-size: 60px;
  margin-left: 15px;
}
</style>
