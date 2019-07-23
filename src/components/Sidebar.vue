<template>
  <div class="ctn">
    <img class="logo" src="@/assets/img/logo/kulap-bakery-logo@2x.jpg">
    <img class="libra-logo" src="@/assets/img/logo.png">
    <div class="divider mg-bt-40px"/>
    <div class="menu-item" @click="selectMenu('coffee')">
      <img src="@/assets/img/sidebar-item/coffee.svg">
      <span :class="{ 'is-active': menuPage === 'coffee'  }">
        Coffee
      </span>
    </div>
    <div class="menu-item" @click="selectMenu('breakfast')">
      <img src="@/assets/img/sidebar-item/breakfast.svg">
      <span :class="{ 'is-active': menuPage === 'breakfast'  }">
        Breakfast
      </span>
    </div>
    <div class="menu-item" @click="selectMenu('snack')">
      <img src="@/assets/img/sidebar-item/munchies.svg">
      <span :class="{ 'is-active': menuPage === 'snack'  }">
        Snack
      </span>
    </div>
    <div class="menu-item" @click="selectMenu('fastfood')">
      <img src="@/assets/img/sidebar-item/sandwiches.svg">
      <span :class="{ 'is-active': menuPage === 'fastfood'  }">
        Fast food
      </span>
    </div>
    <div class="menu-item" @click="selectMenu('specialdrink')">
      <img src="@/assets/img/sidebar-item/special-drinks.svg">
      <span :class="{ 'is-active': menuPage === 'specialdrink'  }">
        Special Drinks
      </span>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    Footer
  },
  computed: {
    ...mapState({
      menuPage: state => state.menuPage
    })
  },
  methods: {
    ...mapActions({
      setMenuPage: 'setMenuPage'
    }),
    selectMenu (menu) {
      this.setMenuPage(menu)
    }
  }
}
</script>

<style lang="scss" scoped>
.ctn {
  width: 100%;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 2px 14px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  text-align: center;
}
.logo {
  width: 100%;
}
.libra-logo {
  width: 120px;
  float: right;
  margin-bottom: 20px;
}
.divider {
  width: 100%;
  height: 1px;
  float: left;
  background-color: #dedede;
}
.mg-bt-40px {
  margin-bottom: 40px;
}
.menu-item {
  cursor: pointer;
  float: left;
  width: 100%;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 30px;
  padding-left: 10px;
  text-align: left;

  img {
    margin-right: 10px;
  }
}
.menu-item:hover {
  opacity: 0.5;
}
.is-active {
  border-bottom: solid 5px #512da8;
  padding-right: 20px;
}
</style>
