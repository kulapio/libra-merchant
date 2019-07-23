<template>
  <div class="sidebar-ctn">
    <img class="logo" src="@/assets/img/logo/app-logo.jpg">
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
    <div class="footer">
      <div class="kulap">
        <img src="@/assets/img/logo/KULAP-LOGO.png">
        <span>KULAP</span>
      </div>
      <div class="credit">
        Sponsored by <a href="https://www.kulap.io/" target="_blank">KULAP.io</a>, The Best Rate Decentralized Exchange.
      </div>
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
.sidebar-ctn {
  width: 100%;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 2px 14px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  text-align: center;
  position: relative;
}
.logo {
  width: 100px;
}
.libra-logo {
  width: 120px;
  float: right;
  margin-bottom: 10px;
}
.divider {
  width: 100%;
  height: 1px;
  float: left;
  background-color: #dedede;
}
.mg-bt-40px {
  margin-bottom: 20px;
}
.menu-item {
  cursor: pointer;
  float: left;
  width: 100%;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 25px;
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
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 15px;
  padding: 0 5px;

  .kulap {
    img {
      width: 25px;
      margin-right: 10px;
      line-height: 25px;
      vertical-align: middle;
    }
    span {
      font-weight: bold;
      line-height: 25px;
      vertical-align: middle;
      font-size: 20px;
    }
  }

  .credit {
    margin-top: 10px;
    font-size: 14px;
    a {
      font-weight: bold;
    }
  }
}
</style>
