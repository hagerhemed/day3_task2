<template>
<div>
  <h3> counter component</h3>
  <p>counter {{counterStore.counter}}</p>
  <div class="row border">
    <counterOperations/>
  </div>
  </div>
</template>

<script>
import {useCounterStore} from '../store/counterStore'
import counterOperations from '../statemanagment/counterOperations.vue'
export default {
    data:()=>({
        counterStore:useCounterStore()
    }),
    components:{
        counterOperations
    }

}
</script>

<style>

</style>