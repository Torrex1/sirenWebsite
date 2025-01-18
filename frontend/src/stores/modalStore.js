import { defineStore } from 'pinia'

export const useModalStore = defineStore("modalStore", {
    state: () => ({
        isAddModalOpened: false
    }),
    actions: {
        toggleAddModal () {
            this.isAddModalOpened = !this.isAddModalOpened;
        },
    }
})