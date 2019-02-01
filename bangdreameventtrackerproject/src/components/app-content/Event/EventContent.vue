<template>
    <div class="container">
        <Event :eventJSONData="eventJSONData"></Event>
    </div>
</template>

<script>
import Event from './Event';

export default {
    data(){
        return{
            eventJSONData: {}
        }
    },
    components:{
        Event
    },
    async mounted(){
    const bandoriAPI = require('node-dori');
    const API = new bandoriAPI({
        region: 'en'
    });

    await API.getEvent()
        .then(response => {
            this.eventJSONData = response;
            if(this.eventJSONData != null){
                console.log('Data found!');
                console.log(this.eventJSONData);
            }

            else{
                console.log('Data not found')
            }
        })
        .catch(({response}) => {
            console.log(JSON.stringify(response.data))
        })
    }
}
</script>

<style>

</style>
