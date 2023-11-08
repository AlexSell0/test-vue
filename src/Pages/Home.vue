<script>
// import MainComponent from "@/components/Main/MainComponent.vue";
import MainComponent from "../Components/Main/MainComponent.vue";
import Layout from "../Layouts/Layout.vue";
export default {
    name: 'Home',
    components: {MainComponent, Layout},

    layout: Layout
}
</script>

<template>
    <Layout>
    </Layout>


    <footer class="footer">

    </footer>
</template>

<style scoped>
    .footer{
        height: 300px;
        background-color: #44A7BA;
    }
</style>
