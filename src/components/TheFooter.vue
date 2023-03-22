<template lang="">
  <footer id="footer" class="footer container-fluid">
    <h5 class="!mb-5">About me</h5>
    <img class="footer__avatar" src="../assets/dat-avatar.jpg" />
    <div class="footer__info">
      <div>
        Lê Thành Đạt - B1910205
        <br />
        Đồ án Phát triển ứng dụng web - CT449
      </div>
      <ul class="footer__info__social">
        <li>
          <a href="https://www.facebook.com/datle243/" target="_blank"
            ><img src="../assets/icon-facebook.svg" alt="Facebook icon"
          /></a>
        </li>
        <li>
          <a href="https://github.com/thanhdat24" target="_blank"
            ><img src="../assets/icon-github.svg"
          /></a>
        </li>
        <li>
          <a href="" target="_blank"
            ><img src="../assets/icon-linked.svg" alt="Linked icon"
          /></a>
        </li>
      </ul>
      <div class="footer__copyright">Copyright © 2023 Lê Thành Đạt</div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  width: 100%;
  background-color: #f2f2f2;
  padding: 30px 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  &__avatar {
    cursor: pointer;
    width: 100px;
    height: 100px;

    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 2px #ec455a;
    object-fit: cover;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;

    line-height: 25px;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
    &__social {
      width: 150px;
      display: flex;
      justify-content: space-between;
      img {
        width: 30px;
        height: 30px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .footer__copyright {
      color: #858585;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-weight: normal;
    }
  }
  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
