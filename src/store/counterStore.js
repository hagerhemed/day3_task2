import {defineStore} from 'pinia'

export const useCounterStore=defineStore("counterStore",{
    state:()=>(
        {
            counter:10
        }
    ),
    actions:{
        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        },
    }
})