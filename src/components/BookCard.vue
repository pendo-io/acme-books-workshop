<!-- The template is where you can define the structure of the component using html-->
<template>
    <!-- The v-card component is a Vuetify component that displays a card -->
     <v-card
        :title="title"
        text="text"/>
</template>

<!-- The script setup is where the logic goes.
 This is where you can define variables and functions that will be used in the template -->
<script setup>
    import { defineProps } from "vue";

    // Define the props that this component will accept
    defineProps({
        title: String,
    });
</script>

<!-- The style tag is where you can define styles that will only apply to this component -->
<style scoped>
</style>
