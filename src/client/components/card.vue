<template>
    <div class="card">
        <p>{{ name | capital}}</p>
        <p>{{ power | capital}}</p>
        <p>{{ life | capital}}</p>
        <input type="button" id="edit" value="Editar">
        <input type="button"
        v-on:click="delWorld()"
        id="del" value="Borrar">
    </div>
</template>

<script>
    export default {
        name: 'card',
        props:{
            name: String,
            power: Number,
            life: Number
        },
        methods: {
            delWorld(){
                this.$emit('created')
            },
        },
        filters: {
            capital(value){
                if(!value){ return '' }

                value = value.toString();

                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .card{
        display: inline-block;
        border-radius: 1vw;
        padding: .5vw;
        width: 20vw;
        height: 23.3vh;
        background-color: #324759;
        color: white;
        // margin-right: 2vw;
        margin-left: 2vw;
        margin-top: 2vh;
        box-shadow: 0 0 2px black;

        #edit, #del{
            background-color: #24A65C;
            border: none;
            width: 8vw;
            margin-left: 1vw;
            color: white;
            border-radius: 1vw;
            box-shadow: 0 0 2px black;
        }
    }

</style>