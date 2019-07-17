<template>
  <div>
    <WalletInfo/>
  </div>
</template>

<script>
// @ is an alias to /src
import WalletInfo from '@/components/WalletInfo'
import Footer from '@/components/Footer'

export default {
  name: 'receive',
  components: {
    WalletInfo,
    Footer
  }
}
</script>
