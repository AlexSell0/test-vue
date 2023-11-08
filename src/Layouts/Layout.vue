<template>
  <AuthHeaderComponent v-if="$store.state.auth.isAuth && this.$route.name !== 'home'"></AuthHeaderComponent>
  <GuestHeaderComponent v-else></GuestHeaderComponent>
  <main class="container">
    <slot />
  </main>
</template>

<script>
import GuestHeaderComponent from "../Components/Header/GuestHeaderComponent.vue";
import AuthHeaderComponent from "../Components/Header/AuthHeaderComponent.vue";

export default {
    name: 'Layout',
    components: {AuthHeaderComponent, GuestHeaderComponent},

    data(){
      return {

      }
    },

}
</script>

<style lang="scss" scoped>

</style>
