<template>
    <div class="form-group" align-center>
        <img class="responsive" :src="eventBanner">
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
    props:['eventJSONData'],
    data(){
        return{
            eventBanner: '',
            eventMusic: '',
            eventName: '',
            eventLogo: '',
            isEventJSONDataFilled: false
        }
    },
    components: {
        APlayer
    },
    async created(){
        await this.getEventData();
    },
    methods:{
        getEventData: function(){
            this.eventBanner = 'https://res.bandori.ga/assets-en/homebanner_rip/banner_event' + this.eventJSONData.eventId + '.png';
            this.eventMusic = 'https://res.bandori.ga/assets/sound/scenario/bgm/' + this.eventJSONData.bgmFileName.toLowerCase() + '_rip/' + this.eventJSONData.bgmFileName + '.mp3';
            this.eventName = this.eventJSONData.eventName + ' - Event BGM';
            this.eventLogo = 'https://res.bandori.ga/assets/event/' + this.eventJSONData.assetBundleName +'/images_rip/logo.png';
        }
    },
    watch:{
        eventJSONData: async function(){
            await this.getEventData();
        }
    }
}
</script>

<style scoped>

</style>
