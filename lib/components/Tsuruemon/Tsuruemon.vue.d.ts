import Vue from 'vue';
export default class Tsuruemon extends Vue {
    careers: {
        icon: string;
        content: string;
    }[];
    informations: ({
        icon: string;
        content: string;
        link?: undefined;
    } | {
        icon: string;
        content: string;
        link: string;
    })[];
}
