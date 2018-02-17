import { ActionContext } from 'vuex';
declare const _default: {
    init(context: ActionContext<ResasState, CommonState>): void;
    onSelectPrefecture(context: ActionContext<ResasState, CommonState>, prefCode: number): void;
    onSelectCity(context: ActionContext<ResasState, CommonState>, cityCode: string): void;
    clear(context: ActionContext<ResasState, CommonState>): void;
};
export default _default;
