<template>
    <div id="app">
        <nav id="nav">
            <ul>
                <li>
                <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li>
                <router-link class="nav-link" to="/world">World</router-link>
                </li>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    *{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    input[type='button']{
        cursor: pointer;
        outline: none;
    }

    input[type=text]:focus{
        outline: none;
    }

    button:focus{
        outline: 0;
    }

    #app{
        height: 100vh;
        overflow-x: hidden;
    }

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
                 margin-left: 2vw;
                 list-style: none;
                 font-size: 1.4vw;
             }
         }
    }

</style>