<!-- The template is where you can define the structure of the component using html-->
<template>
    <!-- The v-card component is a Vuetify component that displays a card -->
    <v-card
        :title="title"
        :text="text"
    />
</template>

<!-- <v-card-copy
    :subtitle="pageCount"
    :text="shortDescription"
/> -->

<!-- The script setup is where the logic goes.
This is where we define variables, properties and functions that will be used in the template. -->
<script setup>
    import { defineProps } from "vue";

    defineProps({
        title: String,
        // pageCount: String,
        // shortDescription: String
    });
</script>

<!-- The style tag is where you can define styles that will only apply to this component -->
<style scoped>
</style>
