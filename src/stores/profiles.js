import { defineStore } from 'pinia';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

export const useProfileStore = defineStore('profiles', {
    state: () => ({
        profiles:[]
    }),
    getters: {
        getProfiles:(state) => {
            return state.profiles;
        }
    },
    actions: {
        async fetchProfile() {
            const queryData = await getDocs(collection(db,"profiles"));
            this.profiles = queryData.docs.map((doc)=> doc.data());
        }
    }
})