import { defineStore } from "pinia";
import $api from "../axiosOptions/index_axios.js";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),
    actions: {
        async register(email, password, username) {
            const response = await $api.post("/registration", {
                email: email,
                password: password,
                username: username,
            })

            if (response.status === 200 || response.status === 201) {
                const { access_token } = response.data;
                localStorage.setItem("access_token", access_token);

                this.isAuthenticated = true;
                alert("User registered successfully.");
            }
        },

        async login (email, password)  {
            const response = await $api.post("/login", {
                email: email,
                password: password,
            })
            if (response.status === 200 || response.status === 201) {
                const { access_token } = response.data;
                localStorage.setItem("access_token", access_token);

                this.isAuthenticated = true;
                alert("Login successfully");
            }
        },

        async logout () {
            try {
                const res = await $api.post("/logout");
                if (res.status === 200) {
                    localStorage.removeItem("access_token");
                    this.isAuthenticated = false;
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
            if (response.status === 200 || response.status === 201) {
                this.isAuthenticated = true;
                this.user = response.data.user;
            }
        }
    }
})