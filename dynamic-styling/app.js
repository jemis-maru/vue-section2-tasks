const app = Vue.createApp({
    data(){
        return{
            divASelected: false,
            divBSelected: false,
            divCSelected: false,
        }
    },
    methods: {
        divClick(box){
            if(box === 'A'){
                this.divASelected = !this.divASelected;
            }
            else if(box === 'B'){
                this.divBSelected = !this.divBSelected;
            }
            else if(box === 'C'){
                this.divCSelected = !this.divCSelected;
            }
        }
    },
    computed: {
        divAClasses(){
            return {
                activeDiv: this.divASelected,
            }
        },
        divBClasses(){
            return {
                activeDiv: this.divBSelected,
            }
        },
        divCClasses(){
            return {
                activeDiv: this.divCSelected,
            }
        }
    }
});

app.mount("#styling");