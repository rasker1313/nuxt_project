import en from '@/locales/en.json'
import de from '@/locales/de.json'
import ua from '@/locales/ua.json'
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: { en, de, ua }
}))
