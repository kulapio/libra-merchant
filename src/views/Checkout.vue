<template>
  <div>
    <PaymentInfo/>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentInfo from '@/components/PaymentInfo'
import Footer from '@/components/Footer'

export default {
  name: 'checkout',
  components: {
    PaymentInfo,
    Footer
  }
}
</script>
