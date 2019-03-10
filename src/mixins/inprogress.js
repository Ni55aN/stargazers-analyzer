export default {
    data() {
        return {
            inprogress: false
        }
    },
    methods: {
        async inprogressWrapper(callback) {
            try {
                this.inprogress = true;
                await callback();
            } catch(e) {
                throw e;
            } finally {
                this.inprogress = false;
            }
        }
    }
}