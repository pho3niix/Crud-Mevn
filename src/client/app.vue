<template>
    <div id="app">
        <div id="nav">
            <nav id="nave" class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/world">World</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    <router-view/>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>
    #nav a.router-link-exact-active {
        color: #42b983;
    }
    a{
        font-size: 18px;
    }

    #nave{
        height: 10vh;
    }

</style>