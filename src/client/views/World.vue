<template>
    <div class="world">
        <div id="title">
            <h2>Mario Universe</h2>
        </div>
        <div id="content">
            <div id="deck">
                <h3 id="else" v-if="totalWorld==0">{{ before }}</h3>
                <card v-else v-for="dato in world"
                :key="dato.id" :name='dato.name' 
                :power="dato.power" :life="dato.life" 
                @created="deleteM(dato._id)"/>
            </div>
        </div>
    </div>
</template>

<script>
    import card from '../components/card.vue';

    export default {
        name: 'world',
        components:{
            card
        },
        data() {
            return{
                world: null,
                totalWorld: 0,
                before: 'Loading...',
                url: '/api/world',
                status: false
            }
        },
        methods: {
            getWorld(e) {
                    this.axios.get(e)
                    .then((res) =>{
                    this.world = res.data;
                })
                .then(()=>{
                    this.totalWorld = this.world.length;
                })
                .finally(()=>{
                    if(this.totalWorld==0){
                        this.before = "There's no characthers yet"
                    }
                })
            },
            deleteM(e){
                this.axios.delete('/api/delWorld/' + e)
                .then((res)=>{
                    this.getWorld(this.url);
                })
            }
        },
        mounted() {
            this.getWorld(this.url);
        },
    }
</script>

<style lang="scss" scoped>
    .world{
        display: flex;
        width: 100vw;
        height: 89vh;
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