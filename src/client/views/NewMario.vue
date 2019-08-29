<template>
    <div class="insert">
        <div id="image">
            <img src="../assets/way.jpeg" alt="super">
        </div>
        <div id="form">
            <h2 id="titulo">{{ msg }}</h2>
            <div id="forma">
                <input ref="first" v-on:keyup.enter="enviar()" v-model="char" type="text" name="nick" id="character" placeholder="Character Name"><br>
                <input v-on:keyup.enter="enviar()" v-model="power" type="text"
                v-on:keypress="number" name="power" id="power" placeholder="Power"><br>
                <input v-on:keyup.enter="enviar()" v-model="life" type="text" v-on:keypress="number" v-on:input="number" name="life" id="life" placeholder="Life"><br>
                <input type="button" value="Save" id="save" v-on:click="enviar()">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                char: null,
                power: null,
                life: null,
                msg: 'Welcome to the jungle'
            }
        },
        mounted() {
            this.$refs.first.focus();
        },
        methods: {
            enviar() {
                if(!this.char || !this.power==null || !this.life){
                    alert('Asegurese de llenar todos los campos');
                }else{
                    this.axios.post('/api/newMario', {
                            name: this.char,
                            power: parseInt(this.power),
                            life: parseInt(this.life)
                    })
                    .then((res)=>{
                        alert('Datos Guardados');
                        this.char = "";
                        this.power = "";
                        this.life = "";
                        this.$refs.first.focus();
                    })
                };
            },
            number ($event) {
                let keyCode = $event.keyCode;
                if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.price.indexOf('.') != -1)) {
                $event.preventDefault();
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    $altura: 90vh;

    .insert{
        display: flex;
        width: 100%;
        height: $altura;

        input[type="text"]{
            width: 100%;
            margin-top: 2vh;
            margin-bottom: 2vh;
            text-decoration: none;
            border: none;
            border-bottom: 2px solid gray;
            font-size: 2.5vh;
        }

        #image, #form{
            width: 50%;
            height: 100%;
        }

        #image{
            img{
                width: 100%;
                height: 100%;
            }
        }

        #form{
            display: flex;
            align-items: center;
            flex-direction: column;

            #titulo{
                margin-top: 4vh; 
            }

            #forma{
                margin-top: 5vh;
                width: 80%;
            }

            #save{
                background-color: #324759;
                color: white;
                padding: 1vw;
                border: none;
                border-radius: .5vw;
                margin-top: 2vh;
                transition: .5s;
                box-shadow: 0 0 2px black;
                &:hover{
                    box-shadow: 0 0 1vh black;

                }
            }
        }
    }
</style>