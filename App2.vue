<template>
    <section class="counter">
        <h1>Counter Component</h1>
        <h1>updated {{counter}}</h1>
        <h1>Previous {{preValue}}</h1>
        <p ref="dom-ele">{{preValue}}</p>
    </section>
</template>

<script>
export default{
    name:'counter',
    props:[],
    mounted(){
        console.log("Mounted is called")
    },
    data(){
        return{
            counter:0,
            preValue:0
        }
    },
    beforeUpdate(){
        console.log("Before update values "+this.counter)
    },
    updated(){
        console.log(+this.$refs['dom-ele'].textContent==this.preValue)
        if(this.preValue==20)
        this.counter=0
    },
    created(){
        console.log("Created is called")
        setInterval(()=>{this.preValue=this.counter;
            this.counter++
        },1000)
    }
}
</script>

<style>

</style>
