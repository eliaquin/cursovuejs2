new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0

    },
    methods:{
        actualizar_coordenadas: function(e){
            this.x = e.clientX;
            this.y = e.clientY;           
        },
        alertame:function(){
            alert("Alerta");
        }

    }
});