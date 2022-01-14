export default function ({ app }) {
    app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
      var dir = context.i18n.locales.find((x) => x.code === context.i18n.locale)?.dir;
      console.log(dir)
      if(dir == 'rtl'){
        context.$vuetify.rtl  = true
      } 
    }
    app.i18n.onLanguageSwitched = (oldLocale, newLocale,context) => {}
}