import { RootState } from '@/store/RootState';
import { mapActions, mapGetters, mapState, Module, mapMutations } from 'vuex';
import { ActionTreeAdaptor, GetterTreeAdaptor } from '@/store/util';

const STORE_NAME = 'Store';
const INCREMENT = 'increment';

const getters: GetterTreeAdaptor<Getters, State, RootState> = {
    isEven(state: State) {
        return 'Hola mundo';
    },
    getRange(state: State) {
        return state.range;
    },
};

const actions: ActionTreeAdaptor<Actions, State, RootState> = {
    async performAsyncIncrement({ commit, /*state, rootState*/ }, { increment, delayMs }) {
        await new Promise<void>(resolve => {
            setTimeout(() => {
                commit(INCREMENT, increment);
                resolve();
            }, delayMs);
        });
    },
};

export const Store: Module<State, RootState> = {
    namespaced: true,
    state: {
        count: 0,
        meta: {
            mutationCount: 0,
        },
        range:[7, 10],
    },
    getters,
    mutations: {
        increment(state, increment = 1) {
            state.meta.mutationCount += 1;
            state.count += increment;
        },
        changeRange(state, range) {
            state.range = range;
        },
    },
    actions,
};

export const mappedState = mapState(STORE_NAME, [
    'count',
    'meta',
]);

export interface State {
    meta: {
        mutationCount: number;
    };
    count: number;
    range: Array<number>;
}

export const mappedGetters = mapGetters(STORE_NAME, [
    'isEven',
    'getRange',
]);

export interface Getters {
    isEven: string;
    getRange: Array<number>;
}

export const mappedMutations = mapMutations(STORE_NAME, [
    'increment',
    'changeRange',
]);

export type Mutations = {
    changeRange: (payload: { range: Array<number> }) => void;
}

export const mappedActions = mapActions(STORE_NAME, [
    'performAsyncIncrement',
]);

export type Actions = {
    performAsyncIncrement: (payload: { increment: number; delayMs: number }) => Promise<void>;
}