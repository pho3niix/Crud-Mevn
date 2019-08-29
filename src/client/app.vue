<template>
    <div id="app">
        <div id="nav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/world">World</router-link>
                </li>
            </ul>
        </div>
    <router-view/>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>
    #nav{
        height: 10vh;
        width: 100vw;
        background-color: #324759;
        display: flex;
        align-items: center;

        a{
            color: rgb(255, 255, 255);
            text-decoration: none;
            &.router-link-exact-active{
                color: #42b983;
            }
        }

         ul{
             li{
                 float: left;
                 margin-left: 1vw;
                 list-style: none;
                 font-size: 1.4vw;
             }
         }
    }

</style>