<template>
  <stripe-checkout
    ref="checkoutRef"
    :pk="publishableKey"
    :items="items"
    :successUrl="successUrl"
    :cancelUrl="cancelUrl"
    :clientReferenceId=refId
  >
    <template slot="checkout-button">
      <button class="button is-danger is-rounded" @click="checkout">
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'money-check-alt']" />
        </span>
        <span>Buy</span>
      </button>
    </template>
  </stripe-checkout>
</template>
 
<script>

import { StripeCheckout } from "vue-stripe-checkout";

export default {
  components: {
    StripeCheckout
  },
  props: {
    insult: String
  },  
  data() {
    return {
      loading: false,
      publishableKey: process.env.PUBLISHABLE_KEY, 
      refId: this.insult,
      items: [
        {
          sku: "sku_GMpIviMabpF4Ad",
          quantity: 1
        }
      ],
      successUrl: "http://your-success-url",
      cancelUrl: "http://your-cancel-url"
    };
  },
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
};
</script> 