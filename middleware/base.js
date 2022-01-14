export default function (context) {
    var dir = context.i18n.locales.find((x) => x.code === context.i18n.locale)?.dir;
    if(dir == 'rtl'){
        context.$vuetify.rtl  = true
    }
}