const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      randomNum: Math.ceil(Math.random() * 100),
    };
  },
  methods: {
    increaseCounter(num){
      this.counter += num;
    },
    decreaseCounter(num){
      this.counter -= num;
    },
    submitForm(event){
      alert('Form submitted');
      event.preventDefault();
    },
    confirmInputName(){
      this.confirmedName = this.name;
    },
  },
  computed: {
    fullName(){
      if(this.confirmedName != ''){
        return this.confirmedName + this.randomNum;
      }
    }
  },
  watch: {
    counter(value){
      if(value < 0){
        this.counter = 0;
      }
    }
  }
});

app.mount('#events');
