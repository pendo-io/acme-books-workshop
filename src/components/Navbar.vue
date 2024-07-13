<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <v-app-bar>
        <v-img class="ma-10" src="../assets/logo.png" max-height="40" max-width="40"/>
        <router-link :to="{ path: '/' }"> 
            <v-btn style="color:#ffffff" text="Home"/>
        </router-link>

        <router-link :to="{ path: '/all-books' }"> 
            <v-btn style="color:#ffffff" text="All Books"/>
        </router-link>
    </v-app-bar>
</template>
