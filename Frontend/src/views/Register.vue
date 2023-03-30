<template lang="">
  <div class="signup__background">
    <div class="signup__img">
      <img src="./public/img/banner_kovi.svg" alt="banner" />
    </div>
    <Form
      id="signupForm"
      class="signup__form"
      @submit="handleRegister"
      :validation-schema="registerFormSchema"
    >
      <img class="signup__form__logo" src="./public/img/book.png" alt="logo" />
      <h1 class="signup__form__title">
        Sign up <br />
        <span style="padding: 10px 0">Dat's Bookstore</span>
      </h1>
      <p>
        <span class="login-error" v-if="registerError">{{
          registerError
        }}</span>
        <!-- <span style="color: green"></span> -->
      </p>
      <div class="d-flex">
        <div class="signup__form__input mr-2">
          <label for="HoTenKH"
            >Full Name
            <span style="color: red; font-weight: normal">(*)</span></label
          >
          <Field
            value=""
            id="displayName"
            type="text"
            name="displayName"
            v-model="userRegister.displayName"
          />
          <ErrorMessage name="displayName" class="error-feedback" />
        </div>
        <div class="signup__form__input">
          <label for="phoneNumber"
            >Phone Number
            <span style="color: red; font-weight: normal">(*)</span></label
          >
          <Field
            value=""
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            v-model="userRegister.phoneNumber"
          />
          <ErrorMessage name="phoneNumber" class="error-feedback" />
        </div>
      </div>

      <div class="signup__form__input">
        <label for="Email"
          >Email <span style="color: red; font-weight: normal">(*)</span></label
        >
        <Field
          value=""
          id="email"
          type="email"
          name="email"
          v-model="userRegister.email"
        />
        <ErrorMessage name="email" class="error-feedback" />
      </div>

      <div class="signup__form__input">
        <label for="password"
          >Password
          <span style="color: red; font-weight: normal">(*)</span></label
        >
        <Field
          value=""
          id="password"
          type="password"
          name="password"
          v-model="userRegister.password"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="signup__form__input">
        <label for="confirm_password"
          >Confirm Password
          <span style="color: red; font-weight: normal">(*)</span></label
        >
        <Field
          value=""
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          v-model="userRegister.passwordConfirm"
        />
        <ErrorMessage name="passwordConfirm" class="error-feedback" />
      </div>

      <div class="signup__form__input">
        <label for="DiaChi"
          >Address
          <span style="color: red; font-weight: normal">(*)</span></label
        >
        <Field
          value=""
          id="address"
          type="text"
          name="address"
          v-model="userRegister.address"
        />
        <ErrorMessage name="address" class="error-feedback" />
      </div>

      <button type="submit" class="btn btn--primary" name="btn-signup">
        Sign Up
      </button>
      <div
        style="
          margin-left: auto;
          margin-top: 10px;
          text-align: center;
          width: 100%;
        "
      >
        Already a member?
        <RouterLink
          to="/login"
          style="font-weight: bold; color: red; margin-left: 10px"
          >Log in</RouterLink
        >
      </div>
    </Form>
  </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const userRegister = reactive({
      displayName: "",
      phoneNumber: "",
      address: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
    const store = useStore();
    const router = useRouter();

    const registerError = computed(() => store.state.auths.registerError);
    const registerFormSchema = yup.object().shape({
      displayName: yup.string().required("Full Name is required"),
      phoneNumber: yup.string().required("PhoneNumber is required"),
      address: yup.string().required("Address is required"),
      email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      password: yup.string().required("Password is required"),
      passwordConfirm: yup.string().required("Confirm Password is required"),
    });
    const handleRegister = () => {
      store.dispatch("auths/postRegisterAction", {
        data: userRegister,
        router,
      });
    };
    return { registerFormSchema, userRegister, handleRegister, registerError };
  },
};
</script>
<style lang="scss">
.signup__background {
  width: 100%;
  height: 100%;
  display: flex;
  .signup__img {
    width: 54%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 55%;
    }
  }
  .signup__form {
    width: 570px;
    padding: 35px 40px 30px 40px;
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
        font-size: 16px;
        padding: 11px 20px;
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
