<template>
    <div class="header">
        <p class="bandori-header bandori-title" jest="app-title">{{bandoriTitle}}</p>
        <p class="bandori-header bandori-subs">{{bandoriSubtitle}}</p>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                bandoriTitle : "Bandori!",
                bandoriSubtitle : "Event Tracker, Predictions, Calculator and Planner!"
            }
        }
    }
</script>

<style>
    @import './Header.css';
</style>
