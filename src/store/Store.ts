import { RootState } from '@/store/RootState';
import { mapActions, mapGetters, mapState, Module, mapMutations } from 'vuex';
import { ActionTreeAdaptor, GetterTreeAdaptor } from '@/store/util';
import { CalculatorState } from '@/models/Calculator';

const STORE_NAME = 'Store';
const INCREMENT = 'increment';

const getters: GetterTreeAdaptor<Getters, State, RootState> = {
    isEven(state: State) {
        return 'Hola mundo';
    },
    getRange(state: State) {
        return state.range;
    },
    getDisplay(state: State) {
        return state.display;
    },
    getCalculatorInfo(state: State) {
        return state.calculator;
    },
    getBeers(state: State) {
        return state.beers;
    },
    getApodDate(state: State) {
        return state.apodDate;
    },
    getApod(state: State) {
        return state.apod;
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
    async fetchBeers({ commit, getters }) {
        let beers = []
        if (getters.getBeers.length > 0) {
            console.log("Beers from store!");
            beers = getters.getBeers;
        }
        else if (getters.getBeers.length === 0) {
            console.log("Fetching beers...");
            const response = await fetch('https://api.punkapi.com/v2/beers')
            beers = await response.json()
            console.log("Fetched beers!");
            console.log(beers);

            commit('setBeers', beers)
            // return Promise
        }
        return Promise.resolve(beers)
    },
    async fetchApod({ commit, getters }) {
        let apod = {}
        if (getters.getApod.date === '' || getters.getApod.date !== getters.getApodDate) {
            console.log("Fetching Apod...");
            const apiKey = 'DEMO_KEY';
            const date = getters.getApodDate;
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
            apod = await response.json()
            console.log("Fetched Apod!");
            console.log(apod);
            commit('setApod', apod)
        } else {
            console.log("Apod from store!");
            apod = getters.getApod;
        }
        return Promise.resolve(apod)
    }
};

export const Store: Module<State, RootState> = {
    namespaced: true,
    state: {
        count: 0,
        meta: {
            mutationCount: 0,
        },
        range: [7, 10],
        beers: [],
        display: 'Hello',
        calculator: {
            result: 0,
            operator: "",
            firstNumber: 0,
            secondNumber: 0,
            currentState: CalculatorState.INIT,
            display: '',
        },
        apodDate: '',
        apod: {
            date: '',
            explanation: '',
            hdurl: '',
            mediaType: '',
            serviceVersion: '',
            title: '',
            url: '',
        }

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
        setDisplay(state, display) {
            state.display = display;
        },
        setModelCalculator(state, calculator) {
            state.calculator = calculator;
        },
        setBeers(state, beers) {
            state.beers = beers;
        },
        setApodDate(state, date) {
            state.apodDate = date;
        },
        setApod(state, apod) {
            state.apod = apod;
        }
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
    beers: Array<any>;
    display: string;
    calculator: {
        result: number,
        operator: string,
        firstNumber: number,
        secondNumber: number,
        currentState: CalculatorState,
        display: string
    };
    apodDate: string;
    apod: {
        date: string,
        explanation: string,
        hdurl: string,
        mediaType: string,
        serviceVersion: string,
        title: string,
        url: string
    };
}

export const mappedGetters = mapGetters(STORE_NAME, [
    'isEven',
    'getRange',
    'getDisplay',
    'getCalculatorInfo',
    'getBeers',
    'getApodDate',
    'getApod',
]);

export interface Getters {
    isEven: string;
    getRange: Array<number>;
    getDisplay: string;
    getCalculatorInfo: {
        result: number,
        operator: string,
        firstNumber: number,
        secondNumber: number,
        currentState: CalculatorState,
        display: string
    };
    getBeers: Array<any>;
    getApodDate: string;
    getApod: {
        date: string,
        explanation: string,
        hdurl: string,
        mediaType: string,
        serviceVersion: string,
        title: string,
        url: string
    };
}

export const mappedMutations = mapMutations(STORE_NAME, [
    'increment',
    'changeRange',
    'setDisplay',
    'setModelCalculator',
    'setBeers',
    'setApodDate',
    'setApod'
]);

export type Mutations = {
    changeRange: (payload: { range: Array<number> }) => void;
    setDisplay: (payload: { display: string }) => void;
    setModelCalculator: (payload: { calculator: Object }) => void;
    setBeers: (payload: { beers: Array<any> }) => void;
    setApodDate: (payload: { apodDate: string }) => void;
    setApod: (payload: { apod: Object }) => void;
}

export const mappedActions = mapActions(STORE_NAME, [
    'performAsyncIncrement',
    'fetchBeers',
    'fetchApod'
]);

export type Actions = {
    performAsyncIncrement: (payload: { increment: number; delayMs: number }) => Promise<void>;
    fetchBeers: () => Promise<Array<any>>;
    fetchApod: () => Promise<any>;
}