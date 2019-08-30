<template>
    <div class="world">
        <div id="title">
            <h1>Mario Universe</h1>
        </div>
        <div id="content">
            <div id="deck">
                <h3 id="else" v-if="totalWorld == 0">{{ before }}</h3>
                <card v-else
                v-for="dato in world"
                :key="dato.id" 
                :name='dato.name' 
                :power="dato.power" 
                :life="dato.life" 
                @deleted="deleteM(dato._id)"
                @selected="isOpen = true"
                @click="findChar(dato._id)"
                />
            </div>
            <modal
            v-show="isOpen"
            @close="isOpen = false"
            :id="characther._id"
            :name="characther.name" 
            :power="characther.power"
            :life="characther.life"
            />
        </div>
    </div>
</template>

<script>
    import card from '../components/card.vue';
    import modal from '../components/editModal.vue';
    import {mapState, mapGetter, mapActions} from 'vuex';

    export default {
        name: 'world',
        components:{
            card,
            modal
        },
        data() {
            return{
                isOpen: false
            }
        },
        methods: {
            deleteM(i){
                this.$store.dispatch('deleteWorld', i)
            },
            findChar(a){
                this.$store.dispatch('findWorld',a)
            }
        },
        mounted(){
            this.$store.dispatch('getWorld');
        },
        computed:{
            ...mapState([
                'world',
                'totalWorld',
                'before',
                'characther'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .world{
        display: flex;
        width: 100vw;
        height: 90vh;
        flex-direction: column;
        position: relative;
        justify-content: center;

        h1{
            font-size: 2.5vw;
        }

        #title{
            width: 100vw;
            height: 5vh;
            text-align: center;
        }

        #content{
            display: flex;
            width: 100vw;
            height: 81vh;
            justify-content: center;

            #deck{
                display: flex;
                width: 90vw;
                height: 81vh;
                flex-wrap: wrap;

                #else{
                    display: block;
                    margin-right: auto;
                    margin-left: auto;
                    align-self: center;
                }
            }

        }
    }
</style>