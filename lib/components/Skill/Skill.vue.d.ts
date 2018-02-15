import Vue from 'vue';
export default class Skill extends Vue {
    languages: {
        lv: number;
        icon: string;
        name: string;
    }[];
    frameworks: {
        lv: number;
        icon: string;
        name: string;
    }[];
    others: {
        lv: number;
        icon: string;
        name: string;
    }[];
}
