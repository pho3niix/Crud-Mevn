<template>
    <div class="edit">
        <div id="modal">
            <input class="item" style="background-color:#bbbbbb;" type="text" readonly v-model="id">
            <input class="item" type="text" v-model="name">
            <input class="item" type="text" v-model="power">
            <input class="item" type="text" v-model="life">
            <input type="button" id="edit" value="Actualizar">
            <input type="button"
            id="save" value="Cancelar" v-on:click="close">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'edit',
        props:{
            name: String,
            power: Number,
            life: Number,
            id: String
        },
        methods:{
            close() {
                this.$emit('close')
            },
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>

    .edit{
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }

    #modal{
        display: inline-block;
        border-radius: 1vw;
        padding: .5vw;
        width: 20vw;
        height: 31.5vh;
        background-color: #324759;
        color: white;
        // margin-right: 2vw;
        margin-left: 2vw;
        margin-top: 2vh;
        box-shadow: 0 0 2px black;

        .item{
            width: 87.8%;
            margin: 1vh;
            margin-left: 2.4vh;
        }

        .item:nth-child(4){
            margin-bottom: 2.5vh;
        }

        #edit, #save{
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