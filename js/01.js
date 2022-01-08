//Instanciamos Vue js
const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre:'Manzana', cantidad: 10},
            {nombre:'Pera', cantidad: 24},
            {nombre:'Uva', cantidad: 0}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 22
            });
            this.nuevaFruta= ''
        }
      
     

    },
    computed: {
        sumarFrutas(){
            this.total=0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;

            }
            return this.total;


        }
    }

})