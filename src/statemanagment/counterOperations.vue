<template>
  <div class="container text-center">
    <button class="btn btn-primary" @click="counterStore.increase">+</button>
    <h4>counter : {{counterStore.counter}}</h4>
     <button class="btn btn-primary" @click="counterStore.decrease">-</button>
  </div>
</template>

<script>
import {useCounterStore} from '../store/counterStore'
export default {
    data:()=>({
        counterStore:useCounterStore()
    })

}
</script>

<style>

</style>