<template>
  <v-app>
    <v-app-bar
      height="80"
      class="bg-appbar"
      fixed
      elevate-on-scroll
    >
      <v-toolbar-title>
        <img
          :src="windowTop > 30 ? '/logo-opoforex-dark.svg' : '/logo-opoforex.svg'"
          alt="opoforex logo"
          srcset=""
          width="80%"
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        text
        link
      >
        {{ $t('Contact') }}
      </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        text
        link
      > {{ $t('Registration') }} </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        text
        link
      > {{ $t('Login') }} </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        text
        link
      > {{ $t('LiveChat') }}</v-btn>
      <!-- <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link> -->
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  head () {
    return this.$nuxtI18nHead();
  },
  data () {
    return { windowTop:0}
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  mounted(){
    window.addEventListener("scroll", this.onScroll, { passive: true });
    var dir = this.$i18n.locales.find((x) => x.code === this.$i18n.locale)?.dir;
    if(dir == 'rtl'){
      this.$vuetify.rtl  = true;
    }else{
      this.$vuetify.rtl  = false;
    }
  }
}
</script>