<template>
  <div class="industrialDetail">
    <div class="enIndustrialDetail mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <Footer lang="en" />
    </div>
    <div class="faIndustrialDetail irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>میلگرد ها</h1>
      </div>
      <div class="lineDiv">
        <Lines myVw="1920" myVh="100" />
      </div>
      <div class="imgAndText d-flex justify-content-between align-items-center">
        <p class="text">
          میله آلومینیوم (میلگرد آلومینیومی) یک میله‌ی فلزی نقره با چگالی پایین
          است. این فلز در صنایع مختلف کاربردهای زیادی دارد. عنصر اصلی این میله
          آلومینیوم است؛ اما بر اساس ویژگی‌های موردنیاز می‌توان آلیاژهای مختلفی
          از آن تولید کرد
        </p>
        <img src="/images/industrial1.png" alt="" />
      </div>
      <div class="diameter">
        <div class="title">قطر میلگردها</div>
        <div class="allItems">
          <div class="d-flex items mont">
            <div
              class="item1 d-flex justify-content-center align-items-center"
              v-for="item in items"
              :key="item"
              :class="{ except: item == 22 }"
            >
              <span>
                {{ item }}
              </span>
              <img src="/icons/lineCircle.svg" alt="" />
            </div>
          </div>
          <div class="d-flex items mont">
            <div
              class="item2 d-flex justify-content-center align-items-center"
              v-for="item in items"
              :key="item"
              :class="{ except2: item == 4 }"
            >
              <span>
                {{ item }}
              </span>
              <img src="/icons/lineCircle.svg" alt="" />
            </div>
          </div>
          <div class="d-flex items mont">
            <div
              class="item1 d-flex justify-content-center align-items-center"
              v-for="item in items"
              :key="item"
              :class="{ except: item == 22 }"
            >
              <span>
                {{ item }}
              </span>
              <img src="/icons/lineCircle.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="images d-flex justify-content-between">
        <img
          v-for="i in 3"
          :key="i"
          src="/images/industrialDetail.jpg"
          alt=""
        />
      </div> -->
      <splide :options="options" v-show="computer">
        <splide-slide v-for="i in 3" :key="i">
          <img src="/images/industrialDetail.jpg" alt="" />
        </splide-slide>
      </splide>
      <splide :options="options2" v-show="!computer">
        <splide-slide v-for="i in 3" :key="i">
          <img src="/images/industrialDetail.jpg" alt="" />
        </splide-slide>
      </splide>
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
      computer: true,
      items: [4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 22],
      options: {
        type: "loop",
        perPage: 3,
        perMove: 1,
      },
      options2: {
        type: "loop",
        perPage: 1,
        perMove: 1,
      },
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
    window.addEventListener("resize", this.onResize);
    if (document.body.clientWidth > 750) {
      this.computer = true;
    } else if (document.body.clientWidth < 750) {
      this.computer = false;
    }
  },
  methods: {
    change() {
      this.$store.commit("change");
    },
    onResize() {
      if (document.body.clientWidth > 750) {
        this.computer = true;
      } else if (document.body.clientWidth < 750) {
        this.computer = false;
      }
    },
  },
  watch: {
    "$store.state.lang"() {
      this.language = this.$store.state.lang;
    },
  },
};
</script>
          
  