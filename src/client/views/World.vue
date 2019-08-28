<template>
    <div class="world">
        <div id="title">
            <h2>Mario Universe</h2>
        </div>
        <div id="content">
            <div id="deck">
                <h3 id="else" v-if="totalWorld==0">{{ before }}</h3>
                <card v-else 
                v-for="dato in world"
                :key="dato.id" 
                :name='dato.name' 
                :power="dato.power" 
                :life="dato.life" 
                @deleted="deleteM(dato._id)" 
                @selected="isOpen = true"
                />
            </div>

            <modal
            v-show="isOpen"
            @close="isOpen = false"
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
                before: this.$store.state.before,
                url: '/api/world',
                status: false,
                characther: null,
                isOpen: false
            }
        },
        methods: {
            deleteM(i){
                if(confirm('estas seguro?')){
                    this.axios.delete('/api/delWorld/' + i)
                    .then((res)=>{
                        this.$store.dispatch('getWorld');
                    })
                }
            },
        },
        mounted(){
            this.$store.dispatch('getWorld')
        },
        computed:{
            ...mapState([
                'world'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .world{
        display: flex;
        width: 100vw;
        height: 90vh;
        flex-wrap: wrap;
        position: relative;
        justify-content: center;
        flex-direction: row;

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