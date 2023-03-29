<template>
  <div class="exclusive">
    <div class="enExclusive mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <Footer lang="en" />
    </div>
    <div class="faExclusive irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>محصولات اختصاصی</h1>
        <p>
          قابلیت محاسبه ، طراحی و ساخت قالب و همچنین مشاوره در خصوص ریخته گری و
          تولید .
        </p>
      </div>
      <div class="scroll d-flex justify-content-end align-items-center">
        <div class="scrollIcon">
          <span class="scrollCircle"></span>
        </div>
        <span class="scrollTitle">Scroll Down</span>
      </div>
      <div class="lineDiv">
        <Lines myVw="1920" myVh="100" />
      </div>
      <div class="formText">
        برای سفارش مقاطع اختصاصی خود فرم زیر را تکمیل کنید، همکاران ما در اسرع
        وقت برای راهنمایی بیشتر با شما تماس خواهند گرفت.
      </div>
      <form action="#">
        <div class="d-flex justify-content-between flex-wrap">
          <input type="text" placeholder="نام و نام خانوادگی *" />
          <input type="text" placeholder="حوزه کاری" />
          <input type="number" placeholder="شماره تماس *" />
          <input type="email" placeholder="ایمیل" />
          <textarea rows="4" placeholder="توضیحات"></textarea>
        </div>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          multiple
        >
          <div class="el-upload__text">
            فایل را اینجا رها کنید یا برای آپلود کلیک کنید
            <img src="/icons/export.svg" alt="" />
          </div>
        </el-upload>
        <div class="size">
          فایل پیوست نمی تواند بیش از
          <span> 5 مگابایت </span>
          باشد.
        </div>
        <button class="effectBtn" type="submit">
          <span>ارسال</span>
        </button>
      </form>
      <div class="footer">
        <Footer lang="fa" />
      </div>
    </div>
    <MouseEffect />
  </div>
</template>
          
  <script>
export default {
  data() {
    return {
      language: "",
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
  },
  methods: {
    change() {
      this.$store.commit("change");
    },
  },
  watch: {
    "$store.state.lang"() {
      this.language = this.$store.state.lang;
    },
  },
};
</script>
          
  