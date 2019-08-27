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
            v-for="char in world"
            :key="char._id"
            />
        </div>
    </div>
</template>

<script>
    import card from '../components/card.vue';
    import modal from '../components/editModal.vue';

    export default {
        name: 'world',
        components:{
            card,
            modal
        },
        data() {
            return{
                world: null,
                totalWorld: 0,
                before: 'Loading...',
                url: '/api/world',
                status: false,
                characther: null,
                isOpen: false
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
            deleteM(i){
                this.axios.delete('/api/delWorld/' + i)
                .then((res)=>{
                    this.getWorld(this.url);
                })
            },
            editWorld(a) {
                this.axios.get('/api/findChar/' + a)
                .then((res)=>{
                    this.characther = res.data;
                    console.log(this.characther);
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