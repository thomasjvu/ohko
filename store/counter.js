import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
    state: () => {
        return { count: 0 }
    },
    actions: {
        increment(val = 1) {
            this.count++
        },
    }
}
