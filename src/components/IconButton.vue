<template>
    <button @click.prevent="$emit('click')" class="button is-rounded" :class=buttonClass>
        <span class="icon">
          <font-awesome-icon :icon=iconArray />
        </span>
        <span>{{ text }}</span>
      </button>
</template>

<script>
export default {
    props: {
        icon: String,
        buttonStyle: String,
        text: String,
    },
    computed: {
        iconArray() {
            return ['fas', this.icon];
        },
        buttonClass() {            
            return 'is-'+this.buttonStyle;
        }
    }
}
</script>