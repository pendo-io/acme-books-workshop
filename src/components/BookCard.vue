<!-- The template is where you can define the structure of the component using html-->
<template>
    <!-- The v-card component is a Vuetify component that displays a card -->
    <v-card class="ma-2" width="500px">
        <v-row justify="start">
            <v-col cols="2.5">
                <v-img :src="imgSrc" height="100px" width="80px"/>
            </v-col>
            <v-col cols="7">
                <v-card-title style="word-wrap: break-word; white-space: normal;">{{ title }}</v-card-title>
                <v-card-text>{{ authors }}</v-card-text>
            </v-col>
            <v-col>
                <v-card-actions>
                    <v-btn
                        text="❤"
                        variant="text"
                        @click="unfavorite( isbn )"
                    />
                </v-card-actions>
            </v-col>
        </v-row>

        <v-card-actions>
            <v-btn
                :text="buttonText"
                variant="text"
                @click="buttonPress()"
            ></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <v-card v-if="reveal" width="100%">    
                <v-card-text>{{ shortDescription }}</v-card-text>
                <v-card-actions class="pt-0">
        </v-card-actions>
            </v-card>
        </v-expand-transition>
    </v-card>

</template>

<!-- The script setup is where the logic goes.
 This is where you can define variables and functions that will be used in the template -->
<script setup>
import { defineProps, ref } from "vue";

const buttonText = ref("Description");
const reveal = ref(false);

// Define the props that this component will accept
defineProps({
    title: String,
    isbn: String,
    authors: String,
    imgSrc: String,
    shortDescription: String,
    longDescription: String,
    unfavorite: Function,
});

const buttonPress = () => {
    reveal.value = !reveal.value;
    if (buttonText.value == "Description") buttonText.value = "Close";
    else buttonText.value = "Description"; 
}

</script>

<!-- The style tag is where you can define styles that will only apply to this component -->
<style scoped></style>
