<template>
    <div>
        <h1>Dezimal zu Binär- und Hexadezimalumrechner</h1>
        <label for="decimalInput">Geben Sie eine Dezimalzahl ein:</label>
        <input id="decimalInput" v-model="decimalValue" @input="convert" @keypress="validateInput"/>
        <p>Binär: {{ binaryValue }}</p>
        <p>Hexadezimal: {{ hexValue }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        decimalValue: "",
        binaryValue: "",
        hexValue: "",
        };
    },
    methods: {
        convert() {
            const decimal = parseInt(this.decimalValue, 10);
            if (!isNaN(decimal)) {
                this.binaryValue = decimal.toString(2);
                this.hexValue = decimal.toString(16);
            } else {
                this.binaryValue = "";
                this.hexValue = "";
            }
        },
        validateInput(event) {
            const allowedChars = "0123456789";
            if (event.key && allowedChars.indexOf(event.key) === -1) {
            event.preventDefault();
            }
        },
    },
};
</script>

<style>
    h1 {
        color:lightblue;
    }

    input {
        margin-left: 10px;
    }
</style>
