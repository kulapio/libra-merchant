<template>
  <div class="content">
    <div v-for="group in groupItmes" v-bind:key="group[0].title" class="tile is-ancestor">
      <div v-for="item in group" v-bind:key="item.title" class="tile is-parent">
        <article v-if="item.title === 'empty'" class="tile is-child box hidden">
        </article>
        <article v-else class="tile is-child box pointer" @click="order(item)">
          <p class="title">{{ item.title }}</p>
          <p class="subtitle">{{ item.subtitle }}</p>
            <img :src="require(`../assets/img/${item.image}.jpg`)"
                  :srcset="require(`../assets/img/${item.image}@2x.jpg`) + ' 2x,' + require(`../assets/img/${item.image}@3x.jpg`) + ' 3x'"
                class="Image-coffee1">
          <div style="width:100%;">
            <div style="width:fit-content;margin: 0 auto;">
              <img :src="require(`../assets/img/libra/icon-libra2.svg`)" class="icon-libra">
              <span class="item-price">{{ item.price | numberWithCommas }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BigNumber from 'bignumber.js'

export default {
  name: 'ItemList',
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
      },
      {
        title: 'Kick Frappe',
        subtitle: 'Locally Roasted',
        price: 7.50,
        image: 'kick_frappe/image-coffee-4'
      },
      {
        title: 'Cappuccino',
        subtitle: 'Decaf Colombia',
        price: 4.50,
        image: 'cappuccino/image-coffee-5'
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
    }),
    groupItmes () {
      let groups = []

      // Grouping items into line of 3
      for (var i = 0; i < this.items.length; i++) {
        if (i % 3 === 0) {
          groups.push([this.items[i]])
        } else {
          groups[groups.length - 1].push(this.items[i])
        }
      }
      if (groups.length >= 1) {
        // adding remaining items of the line with empty items
        const remaingInTheLineCount = 3 - groups[groups.length - 1].length
        for (var j = 0; j < remaingInTheLineCount; j++) {
          console.log(j)
          groups[groups.length - 1].push({
            title: 'empty'
          })
        }
      }
      return groups
    }
  }
}
</script>

<style scoped>
.content {
  width: 639px;
  margin: 0 auto;
}
.title {
  text-align: left;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #666666;
}
.subtitle {
  text-align: left;
  font-family: Avenir;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #919191;
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
.icon-libra {
  width: 20px;
  height: 22px;
  object-fit: contain;
}
.item-price {
  display: inline-block;
  font-family: Avenir;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #7a49ff;
  vertical-align: super;
  margin-left: 5px;
}
.hidden {
  display: none;
}
.pointer {
  cursor: pointer;
}
</style>
