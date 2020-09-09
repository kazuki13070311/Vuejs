export const mieNumber = {
    data(){
        return {
            title: "welcome to Mie",
            subTitle: "Mie is a great city",
            number: 0
        };
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        }
    },
    created() {
        console.log("created in Mixin");
    }
};