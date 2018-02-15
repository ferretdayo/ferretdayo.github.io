import Vue from 'vue';
export default class Picture extends Vue {
    albums: {
        name: string;
        startDate: string;
        endDate: string;
        pictures: ({
            name: string;
            caption: string;
            verticle?: undefined;
        } | {
            name: string;
            caption: string;
            verticle: boolean;
        })[];
    }[];
}
