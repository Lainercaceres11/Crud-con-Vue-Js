const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Agregar tareas',
        tareas:[],
        nuevaTarea:''
    

    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea='';
            localStorage.setItem('Gym-Vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('Gym-Vue', JSON.stringify(this.tareas));
        },
        eliminar: function(index){
           this.tareas.splice(index, 1);
           localStorage.setItem('Gym-Vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('Gym-Vue'));
        if(datosDB === null){
            this.tareas = [];

        }else{
            this.tareas = datosDB;

        }

    }
   
      
    
})