new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0
    },
    computed:{//Las propiedades computadas se pueden llamar directamente sin usar funcion. No tienen que volver a ser recalculadas
        //son el método preferido
        c: function(){
            return Number(this.a) + Number(this.b);
        }        
    }
});