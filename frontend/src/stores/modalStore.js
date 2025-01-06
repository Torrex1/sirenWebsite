import { defineStore } from 'pinia'

export const useModalStore = defineStore("modalStore", {
    state: () => ({
        isModalOpen: false
    }),
    actions: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    }
})