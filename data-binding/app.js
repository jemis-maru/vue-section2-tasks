const app = Vue.createApp({
    data() {
        return{
            htmlText: '<h3>This is heading goal</h3>',
            courseGoalA: 'Learn vue',
            courseGoalB: 'Master vue',
            vueDocumentationLink: 'https://vuejs.org/v2/guide/',
        }
    },
    methods: {
        displayGoal(){
            const num = Math.random();
            if(num < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');