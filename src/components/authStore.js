// src/authStore.js
import { reactive } from 'vue';

export const authStore = reactive({
  isAuthenticated: localStorage.getItem('authenticated') === 'true',
  
  login() {
    this.isAuthenticated = true;
    localStorage.setItem('authenticated', 'true');
  },
  
  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('authenticated');
  }
});
