<template lang="">
  <li>
    <RouterLink class="category__item" :to="getCategoryLink()">
      <img
        class="category__item-image"
        :src="`/src/assets/categories/${category.name
          .replace(/\s+/g, '')
          .toLowerCase()}.jfif`"
      />
      <h6 class="category__item-name">
        {{ category.name }}
      </h6>
      <p class="category__item-description">{{ category.description }}</p>
    </RouterLink>
  </li>
</template>
<script>
import { paramCase } from "change-case";
export default {
  props: {
    category: {
      type: Object,
    },
  },
  setup(props) {
    const getCategoryLink = () => {
      return `/category/${paramCase(props.category.name)}`;
    };
    return { getCategoryLink };
  },
};
</script>
<style lang="css">
.category__item {
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.062);
  transition: all 0.2s ease-out;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid transparent;

  padding: 25px 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  font-family: var(--font-poppins);
}
.category__item-name {
  margin: 8px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 3.3rem;
  text-align: center;
}
.category__item-description {
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.9rem;

  color: var(--color-content);

  text-align: center;
}
.category__item:hover {
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.164);
  transition: all 0.2s ease-out;
  border: 2px solid #fd5d7088;
  box-shadow: 0 0 16px #fd5d702d;
}
.category__item:active {
  border: 2px solid var(--color-primary);
}
.category__item-image {
  pointer-events: none;
}
</style>
