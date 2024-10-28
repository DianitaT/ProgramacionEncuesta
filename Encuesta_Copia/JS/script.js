const inst = {
    data() {
        return {
            legustaPro: '',
            edadPro: 0,
            expePro: '',
            agregarPro: '',
            proMa: [],
            resultadoPro: false
        };
    },
    methods: {
        insertarPro() {
            if (this.agregarPro) {
                this.proMa.push(this.agregarPro);
                this.agregarPro = '';
            }
        },
        
    }
};

const app = Vue.createApp(inst).mount('#componente');