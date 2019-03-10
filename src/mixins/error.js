export default {
    methods: {
        async catchError(callback) {
            try {
                await callback();
            } catch(e) {
                this.$Message.error(e.response && e.response.data.message || e.message)
            }
        }
    }
}