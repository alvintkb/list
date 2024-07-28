<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 rounded-lg">
          <v-img 
            src="https://unifydigital.co.nz/wp-content/uploads/2020/01/Unify-Digital-Logo.jpg" 
            max-width="100%" 
            class="rounded-t-lg"
          ></v-img>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="text-h5 font-weight-medium">
              {{ formTitle }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="formType"
              mandatory
              class="mr-4"
            >
              <v-btn value="login" small>Login</v-btn>
              <v-btn value="signup" small>Sign Up</v-btn>
              <v-btn value="resetPassword" small>Reset Password</v-btn>
            </v-btn-toggle>
            <v-btn icon @click="toggleDarkMode">
              <v-icon>{{ isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text class="mt-4">
            <v-form @submit.prevent="submitForm" ref="form" v-model="isFormValid">
              <v-text-field
                v-model="email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="email"
                :rules="emailRules"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-if="formType === 'signup'"
                v-model="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                prepend-icon="mdi-lock-check"
                :type="showPassword ? 'text' : 'password'"
                :rules="confirmPasswordRules"
                required
                outlined
                dense
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="pb-4 px-4">
            <v-btn
              block
              color="primary"
              @click="submitForm"
              :disabled="!isFormValid"
              class="mb-2"
              large
            >
              {{ submitButtonText }}
            </v-btn>
            <v-btn
              block
              text
              @click="toggleForm('resetPassword')"
            >
              Forgot Password?
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- Custom Snackbar -->
    <v-fade-transition>
      <v-alert
        v-if="snackbar"
        :color="snackbarColor"
        dark
        dense
        dismissible
        @input="snackbar = false"
        class="custom-snackbar"
      >
        {{ snackbarText }}
      </v-alert>
    </v-fade-transition>
  </v-container>
</template>

<script>
import { authStore } from './authStore';

export default {
  name: 'logIn',
  data() {
    return {
      formType: 'login',
      email: '',
      password: '',
      confirmPassword: '',
      resetRequested: false,
      showPassword: false,
      isFormValid: false,
      isDarkMode: false,
      snackbar: false,
      snackbarText: '',
      snackbarColor: 'success',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters',
      ],
      confirmPasswordRules: [
        v => !!v || 'Please confirm your password',
        v => v === this.password || 'Passwords must match',
      ],
    };
  },
  computed: {
    formTitle() {
      switch (this.formType) {
        case 'login': return 'Welcome Back';
        case 'signup': return 'Create Account';
        case 'resetPassword': return 'Reset Password';
        default: return 'Authentication';
      }
    },
    submitButtonText() {
      switch (this.formType) {
        case 'login': return 'Log In';
        case 'signup': return 'Sign Up';
        case 'resetPassword': return this.resetRequested ? 'Reset Password' : 'Request Reset';
        default: return 'Submit';
      }
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        switch (this.formType) {
          case 'login':
            console.log('Login', this.email, this.password);
            authStore.login();
            this.showSnackbar('Logged in successfully', 'success');
            this.$router.push({ name: 'HomePage' });
            break;
          case 'signup':
            console.log('Sign Up', this.email, this.password);
            this.showSnackbar('Account created successfully', 'success');
            break;
          case 'resetPassword':
            if (this.resetRequested) {
              console.log('Reset Password', this.email, this.password);
              this.showSnackbar('Password reset successfully', 'success');
            } else {
              console.log('Request Password Reset', this.email);
              this.showSnackbar('Password reset email sent', 'info');
              this.resetRequested = true;
            }
            break;
        }
      }
    },
    toggleForm(formType) {
      this.formType = formType;
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.resetRequested = false;
      this.$refs.form.reset();
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$vuetify.theme.dark = this.isDarkMode;
    },
    showSnackbar(text, color = 'success') {
      this.snackbarText = text;
      this.snackbarColor = color;
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.custom-snackbar {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
