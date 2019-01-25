<template>
    <div class="menu">
        <ul class="menu nav nav-tabs justify-content-center" red>
            <li v-for="tabOption in tabOptions" :key="tabOption.id" class="nav-item">
                <a @click="makeActive(tabOption)" class="nav-link" :class="{active: tabOption.highlight}" href="#">{{tabOption.title}}</a>
            </li>
        </ul>
    </div>
</template>
 
 <script>
export default {
         data() {
             return{
                 tabOptions :[
                {
                    id: 1,
                    title: 'Event',
                    highlight: true
                },

                {
                    id: 2,
                    title: 'Calculator',
                    highlight: false
                },

                {
                    id: 3,
                    title: 'Planner',
                    highlight: false
                },

                {
                    id: 4,
                    title: 'About',
                    highlight: false
                }
                ]
            }
     },
     methods:{
         makeActive: function(val) {
             for (let i = 0; i < this.tabOptions.length; ++i) {
                 this.tabOptions[i].highlight = false;
             }
             this.tabOptions[val.id - 1].highlight = true;
            //  if(val.highlight == false){
            //     this.removeActive();
            //     val.highlight = !val.highlight;
            //  }
         },

        removeActive: function() {
            this.tabOptions.forEach(element => {
                if(element.highlight == true){
                    element.highlight = false;
                }
            });
         }
     }
 }
 </script>
 
<style>
    @import './Tabs.css';
</style>