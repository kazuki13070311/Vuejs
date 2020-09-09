<template>
    <div>
        <h2>{{ title | lowerCase | upperCase }}</h2>
        <p>{{ subTitle |upperCase | lowerCase }}</p>
        <p>{{ number }}</p>
        <button @click="number++">+1</button>
    </div>
</template>

<script>
import { mieNumber } from "@/mieNumber";

export default {
    mixins: [mieNumber],
    created() {
        console.log("created in component");
    }
};
</script>