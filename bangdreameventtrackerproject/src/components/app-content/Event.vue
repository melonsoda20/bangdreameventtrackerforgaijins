<template>
    <div class="form-group" align-center>
        <img class="responsive" :src=eventBanner>
        <APlayer
            :music="{
                title: eventName,
                src: eventMusic,
                pic: eventLogo
            }" 
            repeat = 'repeat-one'
        />
    </div>
</template>

<script>
import APlayer from 'vue-aplayer';
export default {
    data(){
        return{
            eventJSONData: {},
            eventBanner: '',
            eventMusic: '',
            eventName: '',
            eventLogo: ''
        }
    },
    components: {
        APlayer
    },
    created(){
        const bandoriAPI = require('node-dori');
        const API = new bandoriAPI({
            region: 'en'
        });

        API.getEvent()
            .then(response => {
                this.eventJSONData = response;
                console.log(this.eventJSONData);
                this.eventBanner = 'https://res.bandori.ga/assets-en/homebanner_rip/banner_event' + this.eventJSONData.eventId + '.png';
                this.eventMusic = 'https://res.bandori.ga/assets/sound/chorus097_rip/' + this.eventJSONData.bgmFileName + '.mp3';
                this.eventName = this.eventJSONData.eventName + ' - Event BGM'
                this.eventLogo = 'https://res.bandori.ga/assets/event/' + this.eventJSONData.assetBundleName +'/images_rip/logo.png'
            })
            .catch(({response}) => {
                console.log(JSON.stringify(response.data))
            })
    }
}
</script>

<style scoped>

</style>
