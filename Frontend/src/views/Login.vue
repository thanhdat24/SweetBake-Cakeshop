<template lang="">
  <div class="login__background">
    <div class="login__img">
      <img src="./public/img/banner_kovi.svg" alt="banner" />
    </div>
    <Form
      class="login__form"
      @submit="handleLogin"
      :validation-schema="loginFormSchema"
    >
      <img class="login__form__logo" src="./public/img/book.png" alt="logo" />
      <h1 class="login__form__title">
        Login<br />
        <span class="py-2">Geek's Bakery!</span>
      </h1>
      <p class="login__form__message">
        <span class="login-error" v-if="loginError && !registerSuccess">{{
          loginError
        }}</span>
        <!-- <span style="color: green"></span> -->
      </p>
      <!-- <span style="color: green"></span> -->
      <div class="login__form__input">
        <label for="email">Email (Kiểm thử: guest@gmail.com)</label>
        <Field id="email" type="text" name="email" v-model="userLogin.email" />
        <ErrorMessage name="email" class="error-feedback" />
      </div>
      <div class="login__form__input">
        <label for="password">Password (Kiểm thử: 12345678)</label>
        <Field name="password" type="password" v-model="userLogin.password" />
        <ErrorMessage name="password" class="error-feedback" />
        <!-- <p class="error">Error password</p> -->
      </div>

      <button class="py-4 btn btn--primary">Login</button>
      <div
        style="
          margin-left: auto;
          margin-top: 10px;
          text-align: center;
          width: 100%;
        "
      >
        Not a member?
        <RouterLink
          to="/register"
          style="font-weight: bold; color: red; margin-left: 5px"
          >Sign up now</RouterLink
        >
      </div>
    </Form>
  </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed } from "vue";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const userLogin = reactive({
      email: "",
      password: "",
    });
    const router = useRouter();
    const store = useStore();

    const loginError = computed(() => store.state.auths.loginError);
    const registerSuccess = computed(() => store.state.auths.registerSuccess);

    const loginFormSchema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      password: yup.string().required("Password is required"),
    });

    const handleLogin = () => {
      store.dispatch("auths/postLoginAction", { data: userLogin, router });
    };
    return {
      userLogin,
      loginFormSchema,
      handleLogin,
      loginError,
      registerSuccess,
    };
  },
};
</script>
<style lang="scss">
.login__background {
  width: 100%;
  margin-top: 21px;
  display: flex;
  height: 100%;
  .login__img {
    width: 54%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 55%;
    }
  }
  .login__form {
    width: 500px;
    padding: 50px 40px 40px 40px;
    margin: 30px 0;
    display: grid;
    grid-gap: 10px;
    &__logo {
      width: 70px;
      height: 70px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 12px;
    }
    &__title {
      margin-bottom: 15px;
      text-align: center;
      color: #ec455a;
      font-size: 30px;
      font-weight: 700;
      line-height: 35px;
      font-family: "Nunito", sans-serif;
    }
    &__message {
      color: red;
      margin-bottom: 10px;
      text-align: center;
    }
    &__input {
      font-weight: bold;
      margin-bottom: 10px;
      display: grid;
      grid-gap: 10px;
      font-size: 17px;
      input {
        font-family: "Nunito", sans-serif;
        border-radius: 30px;
        border: 2px solid rgba(192, 192, 192, 0);
        outline: none;
        font-size: 17px;
        padding: 13px 20px;
        width: 100%;
        background-color: rgba(243, 244, 246, 1);
        transition: all 200ms ease-out;
        &:focus {
          border: 2px solid rgb(0, 171, 85);
          transition: all 200ms ease-in;
        }
      }

      .signupCheckMessage {
        font-family: "Roboto", sans-serif;
        font-weight: normal;
        font-size: 14px;
        color: red;
      }
    }
    .errorMessage {
      border-radius: 8px;
      box-shadow: none;
      background-image: none;
      line-height: 1.5714285714285714;
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      justify-content: center;
      display: flex;
      padding: 6px 16px;

      background-color: rgb(255, 231, 217);
      color: #ff4842;
      p {
        padding: 8px 0;
        font-size: 16px !important;
      }
    }
  }
}
</style>
