import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
// import vueAxios from 'vue-axios';

Vue.use(Vuex, Axios);

export default new Vuex.Store({
    // variables para almacenar datos 
    state:{
        world: [],
        name: 'Hugo',
        second: 'Carlos',
        totalWorld: 0,
        before: "There's no characthers yet"
    },
    // cambios en las variables state commit
    mutations:{
        setWorld(state, world){
            state.world = world
        },
        totalWorld(state){
            state.totalWorld = state.world.length;
        }
    },
    // metodos dispatch asyncronous
    actions:{
        getWorld({commit}){
            Axios
                .get('/api/world')
                .then(res=>{
                    let world = res.data; 
                    commit('setWorld', world)
                })
                .catch(err=>{
                    console.log(err)
                })
        },
    },
    // obtener informacion una vez cambiada en mutaciones
    getters:{

    }
})