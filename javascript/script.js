const app1 = {
    data() {
        return {
            contactos: [],//objetos
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: 'familiar',
            maxContactos: 25,
            maxLlamadas: 15,
            maxMensajes: 25,
        };
    },
    methods: {
        agregarNuevoContacto() {//cuenta cuantos contactos hay actualmente
            if (this.contactos.length < this.maxContactos && this.nuevoNombre && this.nuevoTelefono && this.nuevaCategoria) {
                this.contactos.push({// length es una propiedad de los arrays 
                    //que devuelve el número de elementos en el array.
                    nombre: this.nuevoNombre,//push añade un nuevo elemento al final del array contactos.
                    // Aquí, estamos añadiendo un objeto que representa un nuevo contacto.
                    telefono: this.nuevoTelefono,
                    categoria: this.nuevaCategoria,
                    llamadas: 0,
                    mensajes: 0
                });//si el campo no contiene elementos fallara y no se puede avanzar
                this.nuevoNombre = '';
                this.nuevoTelefono = '';//datos introducidos por los usuarios
                this.nuevaCategoria = 'familiar';
            } else {
                alert('No puedes agregar más contactos o faltan datos');
            }
        },
        eliminarContacto(index) {//Utiliza el método splice para 
            //eliminar 1 elemento de la lista contactos en la posición especificada por index
            this.contactos.splice(index, 1);
        },
        llamarContacto(index) {
            if (this.contactos[index].llamadas < this.maxLlamadas) {
                this.contactos[index].llamadas++;
            } else {
                alert('Este contacto ha alcanzado el máximo de llamadas');
            }
        },
        enviarMensaje(index) {
            if (this.contactos[index].mensajes < this.maxMensajes) {
                this.contactos[index].mensajes++;
            } else {
                alert('Este contacto ha alcanzado el máximo de mensajes');//manda alerta de tope de msjs
            }
        }
    },
    computed: {//computadas permite calcular valores de data sin ejecutarse manualmente
        totalContactos() {
            return this.contactos.length;
        },//metodo de array que  reducelos elementos de un array a un valor unico
        totalLlamadas() {//funcion de flecha
            return this.contactos.reduce((total, contacto) => total + contacto.llamadas, 0);
        },//(contador,variable)
        totalMensajes() {
            return this.contactos.reduce((total, contacto) => total + contacto.mensajes, 0);
        }
    }
};
Vue.createApp(app1).mount('#seccion');
