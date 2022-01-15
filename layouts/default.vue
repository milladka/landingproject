<template>
  <v-app>
    <v-app-bar
      absolute
      elevation="0"
      height="80"
      class="bg-appbar"
    >
      <v-toolbar-title>
        <img
          src="/logo-opoforex.svg"
          alt=""
          srcset=""
          width="90%"
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  head () {
    return this.$nuxtI18nHead();
  },
  data () {
    return {}
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  mounted(){
    var dir = this.$i18n.locales.find((x) => x.code === this.$i18n.locale)?.dir;
    if(dir == 'rtl'){
      this.$vuetify.rtl  = true;
    }else{
      this.$vuetify.rtl  = false;
    }
  }
}
</script>