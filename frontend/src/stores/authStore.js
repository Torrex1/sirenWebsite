import { defineStore } from "pinia";
import $api from "../axiosOptions/index_axios.js";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),
    actions: {
        async login (email, password)  {
            const response = await $api.post("/login", {
                email: email,
                password: password,
            })
            if (response.status === 200 || response.status === 201) {
                const { access_token } = response.data;
                localStorage.setItem("access_token", access_token);

                this.isAuthenticated = true;
                this.user = access_token;
                alert("Login successfully");
            }
        },

        async logout () {
            try {
                const res = await $api.post("/logout");
                if (res.status === 200) {
                    localStorage.removeItem("access_token");
                    this.isAuthenticated = false;
                    this.user = null;
                }
            }
            catch (error) {
                console.log(error);
            }
        },

        async checkAuth () {
            const token = localStorage.getItem("access_token");
            const response = await $api.get("/checkAuth", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.isAuthenticated = true;
            this.user = response.data;
        }
    }
})