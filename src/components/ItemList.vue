<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-for="(item, i) in items[menuPage]"
      :key="i"
      class="column is-4"
    >
      <div class="item" @click="order(item)">
        <div class="item-title is-dots">
          {{ item.title }}
        </div>
        <div class="sub is-dots">
          {{ item.subtitle }}
        </div>
        <div class="img-item">
          <img :src="require(`../assets/img/${item.image}`)">
        </div>
        <div class="price">
          <img :src="require('@/assets/img/libra/icon-libra.png')">
          <span>{{ item.price | numberWithCommas }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BigNumber from 'bignumber.js'
import { menuList } from '@/constants'

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
      items: menuList
    }
  },
  methods: {
    ...mapActions({
      updateTotal: 'updateTotal',
      addItem: 'addItem'
    }),
    getImgUrl (pet) {
      var images = require.context('../assets/img/', false, /\.jpg$/)
      return images('./' + pet + '.jpg')
    },
    openCheckout () {
      this.$router.push({ name: 'Checkout' })
    },
    order (item) {
      this.addItem(item)
    },
    clear () {
      this.updateTotal(BigNumber(0))
    }
  },
  computed: {
    ...mapState({
      total: state => state.total,
      menuPage: state => state.menuPage
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

<style lang="scss" scoped>
.item {
  cursor: pointer;
  padding: 12px 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
.item-title {
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  color: #666666;
}
.sub {
  font-family: Avenir;
  font-size: 13px;
  font-weight: 500;
  color: #919191;
}
.img-item {
  width: 100%;
  text-align: center;
  padding-top: 15px;
  img {
    height: 120px;
  }
}
.price {
  margin-top: 15px;
  text-align: center;
  * {
    line-height: 25px;
    vertical-align: middle;
  }
  img {
    height: 25px;
    margin-right: 10px;
  }
  span {
    font-family: Avenir;
    font-size: 18px;
    font-weight: 500;
    color: #7a49ff;
    line-height: 25px;
    vertical-align: middle;
  }
}
.is-dots {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
