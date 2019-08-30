<template>
    <div class="card">
        <div id="content">
            <p>Name: {{ name | capital}}
            <p>Power: {{ power | capital}}</p>
            <p>Life: {{ life | capital}}</p>
            <input v-on:click="openModal(), findChar()" type="button" id="edit" value="Edit">
            <input type="button"
            v-on:click="delWorld()"
            id="del" value="Delete">
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'card',
        props:{
            name: String,
            power: Number,
            life: Number
        },
        data(){
            return{

            }  
        },
        methods: {
            delWorld(){
                this.$emit('deleted')
            },
            openModal(){
                this.$emit('selected');
            },
            findChar(){
                this.$emit('click')
            }
        },
        filters: {
            capital(value){
                if(!value){ return '' }

                value = value.toString();

                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>

    $size: 16px;

    .card{
        border-radius: 1vw;
        padding: .5vw;
        width: 19vw;
        height: 18vh;
        background-color: #324759;
        color: white;
        margin-left: 2vw;
        margin-top: 2vh;
        box-shadow: 0 0 2px black;
        #content{
            width: 100%;
            height: 100%;
        }

        p{
            font-size: $size;
            margin-top: 1vh;
            margin-bottom: 1vh;
            margin-left: 1.3vw;
        }

        #edit, #del{
            background-color: #24A65C;
            border: none;
            width: 8vw;
            height: 4vh;
            font-size: $size;
            margin-left: 1vw;
            color: white;
            border-radius: 1vw;
            box-shadow: 0 0 .5vh black;
        }
    }

</style>