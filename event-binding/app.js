const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    increaseCounter(num){
      this.counter += num;
    },
    decreaseCounter(num){
      this.counter -= num;
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(event){
      alert('Form submitted');
      event.preventDefault();
    },
    confirmInputName(){
      this.confirmedName = this.name;
    },
  }
});

app.mount('#events');
