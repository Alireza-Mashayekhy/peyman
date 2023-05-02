<template>
  <div class="header">
    <div v-if="lang == 'eng'" class="enHeader d-flex justify-content-between">
      <img
        src="/icons/bars.svg"
        @click="showMenu"
        class="barsIcon"
        alt="barsIcon"
      />
      <img src="/images/whiteLogo.png" class="whiteLogo" />
      <div class="d-flex">
        <div class="d-flex links">
          <router-link to="/enHome" :class="{ active: page == 1 }">
            Home
          </router-link>
          <router-link to="/aboutUs" :class="{ active: page == 2 }">
            Who We Are
          </router-link>
          <router-link to="/enProducts" :class="{ active: page == 3 }">
            Products
          </router-link>
          <router-link to="/enUnits" :class="{ active: page == 4 }">
            Units
          </router-link>
          <router-link to="/media" :class="{ active: page == 5 }">
            Media
          </router-link>
          <router-link to="/blogs" :class="{ active: page == 6 }">
            News
          </router-link>
          <router-link to="/contactUs" :class="{ active: page == 7 }">
            Get In Touch
          </router-link>
        </div>
        <div class="d-flex">
          <div class="d-flex pointer globalDiv" @click="change">
            <img src="/icons/global.svg" class="globalIcon" />
            <div class="langDiv">
              {{ language.toUpperCase() }}
            </div>
          </div>
          <img src="/icons/search.svg" class="searchIcon" />
        </div>
      </div>
    </div>
    <div v-else class="faHeader d-flex justify-content-between">
      <img
        src="/icons/bars.svg"
        @click="showFaMenu"
        class="barsIcon"
        alt="barsIcon"
      />
      <img src="/images/whiteLogo.png" class="whiteLogo" />
      <div class="d-flex links">
        <router-link to="/" :class="{ active: page == 1 }">
          صفحه اصلی
        </router-link>
        <router-link to="/aboutUs" :class="{ active: page == 2 }">
          درباره ی ما
        </router-link>
        <div class="productsLinks">
          <router-link to="/products" :class="{ active: page == 3 }">
            محصولات
          </router-link>
          <router-link to="/industrial" class="underLink">
            محصولات صنعتی
          </router-link>
          <router-link to="/construction" class="underLink">
            محصولات ساختمانی
          </router-link>
          <router-link to="/exclusive" class="underLink">
            محصولات اختصاصی
          </router-link>
        </div>
        <router-link to="/units" :class="{ active: page == 4 }">
          واحد های تولیدی
        </router-link>
        <router-link to="/media" :class="{ active: page == 5 }">
          گالری
        </router-link>
        <router-link to="/blogs" :class="{ active: page == 6 }">
          اخبار
        </router-link>
        <router-link to="/contactUs" :class="{ active: page == 7 }">
          تماس با ما
        </router-link>
      </div>
      <div class="d-flex lastHeadDiv">
        <div class="d-flex">
          <img src="/icons/bag.svg" class="bagIcon" />
          <div class="bagDiv">سفارش</div>
        </div>
        <div class="blueLine"></div>
        <div class="d-flex pointer globalDiv" @click="change">
          <img src="/icons/global.svg" class="globalIcon" />
          <div class="langDiv">
            {{ language.toUpperCase() }}
          </div>
        </div>
        <div class="blueLine"></div>
        <img src="/icons/search.svg" class="searchIcon" />
      </div>
    </div>
    <div class="menu" v-if="lang == 'eng'">
      <div v-if="menu" class="d-flex flex-column align-items-end">
        <img src="/icons/X.svg" class="XIcon" @click="hideMenu" alt="" />
        <router-link to="/enHome" :class="{ active: page == 1 }">
          Home
        </router-link>
        <router-link to="/aboutUs" :class="{ active: page == 2 }">
          Who We Are
        </router-link>
        <router-link to="/enProducts" :class="{ active: page == 3 }">
          Products
        </router-link>
        <router-link to="/enUnits" :class="{ active: page == 4 }">
          Units
        </router-link>
        <router-link to="/media" :class="{ active: page == 5 }">
          Media
        </router-link>
        <router-link to="/blogs" :class="{ active: page == 6 }">
          News
        </router-link>
        <router-link to="/contactUs" :class="{ active: page == 7 }">
          Get In Touch
        </router-link>
      </div>
    </div>
    <div class="faMenu" v-if="lang == 'fa'">
      <div v-if="menu">
        <div class="d-flex flex-column p-0">
          <img src="/icons/X.svg" class="XIcon" @click="hideFaMenu" alt="" />
          <router-link to="/" :class="{ active: page == 1 }">
            صفحه اصلی
          </router-link>
          <router-link to="/aboutUs" :class="{ active: page == 2 }">
            درباره ی ما
          </router-link>
          <div
            class="products"
            @click="openProducts"
            :class="{ active: page == 3 }"
          >
            محصولات
          </div>

          <router-link to="/units" :class="{ active: page == 4 }">
            واحد های تولیدی
          </router-link>
          <router-link to="/media" :class="{ active: page == 5 }">
            گالری
          </router-link>
          <router-link to="/blogs" :class="{ active: page == 6 }">
            اخبار
          </router-link>
          <router-link to="/contactUs" :class="{ active: page == 7 }">
            تماس با ما
          </router-link>
        </div>
        <div class="productsLinks2">
          <router-link to="/products" class="underLink">
            محصولات تولیدی
          </router-link>
          <router-link to="/industrial" class="underLink">
            محصولات صنعتی
          </router-link>
          <router-link to="/construction" class="underLink">
            محصولات ساختمانی
          </router-link>
          <router-link to="/exclusive" class="underLink">
            محصولات اختصاصی
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerCom",
  props: ["lang"],
  data() {
    return {
      language: "",
      page: 0,
      menu: false,
    };
  },
  methods: {
    change() {
      if (this.$route.path == "/units") {
        this.$router.push("enUnits");
        this.$emit("change");
      } else if (this.$route.path == "/enUnits") {
        this.$router.push("units");
        this.$emit("change");
      } else if (this.$route.path == "/") {
        this.$router.push("enHome");
        this.$emit("change");
      } else if (this.$route.path == "/enHome") {
        this.$router.push("/");
        this.$emit("change");
      } else if (this.$route.path == "/products") {
        this.$router.push("enProducts");
        this.$emit("change");
      } else if (this.$route.path == "/enProducts") {
        this.$router.push("products");
        this.$emit("change");
      } else {
        this.$emit("change");
      }
    },
    handleScroll() {
      if (window.scrollY == 0) {
        document.getElementsByClassName("header")[0].style.backgroundColor =
          "rgba(0, 0, 0, 0)";
        document
          .getElementsByClassName("header")[0]
          .getElementsByClassName("whiteLogo")[0].style.width = "100px";
      } else {
        document.getElementsByClassName("header")[0].style.backgroundColor =
          "rgba(0, 0, 0, 0.5)";
        document
          .getElementsByClassName("header")[0]
          .getElementsByClassName("whiteLogo")[0].style.width = "70px";
      }
    },
    showMenu() {
      this.menu = true;
      document.getElementsByClassName("menu")[0].style.transform =
        "translateX(0px)";
    },
    showFaMenu() {
      this.menu = true;
      document.getElementsByClassName("faMenu")[0].style.transform =
        "translateX(0px)";
    },
    hideMenu() {
      document.getElementsByClassName("menu")[0].style.transform =
        "translateX(-303px)";
      setTimeout(() => {
        this.menu = false;
      }, 1000);
    },
    hideFaMenu() {
      document.getElementsByClassName("faMenu")[0].style.transform =
        "translateX(303px)";
      setTimeout(() => {
        this.menu = false;
      }, 1000);
    },
    openProducts() {
      var display =
        document.getElementsByClassName("productsLinks2")[0].style.display;
      if (display == "none" || display == "") {
        document.getElementsByClassName("productsLinks2")[0].style.display =
          "flex";
      } else {
        document.getElementsByClassName("productsLinks2")[0].style.display =
          "none";
      }
      console.log(display);
    },
  },
  mounted() {
    if (window.scrollY == 0) {
      document.getElementsByClassName("header")[0].style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document
        .getElementsByClassName("header")[0]
        .getElementsByClassName("whiteLogo")[0].style.width = "100px";
    } else {
      document.getElementsByClassName("header")[0].style.backgroundColor =
        "rgba(0, 0, 0, 0.5)";
      document
        .getElementsByClassName("header")[0]
        .getElementsByClassName("whiteLogo")[0].style.width = "70px";
    }
    if (this.$route.path == "/" || this.$route.path == "/enHome") {
      this.page = 1;
    } else if (this.$route.path == "/aboutUs") {
      this.page = 2;
    } else if (
      this.$route.path == "/products" ||
      this.$route.path == "/enProducts"
    ) {
      this.page = 3;
    } else if (this.$route.path == "/exclusive") {
      this.page = 3;
    } else if (this.$route.path == "/industrial") {
      this.page = 3;
    } else if (this.$route.path == "/construction") {
      this.page = 3;
    } else if (this.$route.path == "/units" || this.$route.path == "/enUnits") {
      this.page = 4;
    } else if (this.$route.path == "/media") {
      this.page = 5;
    } else if (this.$route.path == "/blogs") {
      this.page = 6;
    } else if (this.$route.path == "/contactUs") {
      this.page = 7;
    }

    window.addEventListener("scroll", this.handleScroll);
    this.language = this.$store.state.lang;
    if (this.$route.fullPath == "/") {
      this.page = 1;
    }
  },
};
</script>