import { defineStore } from 'pinia'
import { useModalStore } from "./modalStore.js";
import axios from "axios";

const modalStore = useModalStore();

export const useAddressStore = defineStore("addressStore", {
    state: () => ({
        items: []
    }),
    actions: {
        async getAddressBook () {
            const response = (await axios.get('http://localhost:3000/api/address')).data;
            this.items = Array.isArray(response) ? response : [response];
        },

        async sendAddressBook (address) {
            try {
                await axios.post('http://localhost:3000/api/address', {
                    first_name: address.first_name,
                    last_name: address.last_name,
                    country: address.country,
                    city: address.city,
                    address: address.address,
                    zipcode: address.zipcode,
                    phone: address.phone,
                })
                modalStore.closeModal()

                await this.getAddressBook();
            }
            catch (error) {
                console.log('Ошибка при отправке формы', error);
            }
        }
    }
})