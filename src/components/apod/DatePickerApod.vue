<template>
    <div>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="selectedDate"
        class="mb-2"
        @input="dateChanged($event)"
      ></b-form-datepicker>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import moment from 'moment'

    export default Vue.extend({
        data() {
            return {
                selectedDate: moment().format('YYYY-MM-DD'),
            }
        },
        props: {
            date: String,
        },
        watch: {
            date(newDate: string) {
                this.selectedDate = newDate;
            },
        },
        methods: {
            dateChanged(event: any) {
                this.$emit('date-changed', event)
            }
        }
        
    })
</script>

<style scoped>

</style>