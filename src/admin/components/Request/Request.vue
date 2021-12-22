<template>
    <div class="AdminRequestsPage">
        <h1>Заявки</h1>
        <div class="requests">
            <ul class="requests_ul">
                <li class="requests_ul__el">
                    элемент 1
                </li>
                <li class="requests_ul__el">
                    элемент 2
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            requests: 0,
        };
    },
    async mounted() {  
        this.$store.dispatch("getRequests");
    },
    computed: {
        Reviews() {
            return this.$store.state.Requests
        }
    },

    name: 'AdminRequestsPage',
}
</script>

<style scoped lang="scss" src="@/admin/assets/scss/Home/index.scss">