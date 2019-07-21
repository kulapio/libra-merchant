<template>
  <div class="content">
    <div class="item-list">
      <ItemList/>
    </div>
    <div class="m-bill">
      <Bill/>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList'
import Bill from '@/components/Bill'

export default {
  name: 'merchant',
  components: {
    ItemList,
    Bill
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  width: calc(65% - 1rem);
  float: left;
  margin-right: 1rem;
}
.m-bill {
  width: 35%;
  float: left;
}
</style>
