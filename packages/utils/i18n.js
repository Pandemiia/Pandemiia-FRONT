import I18n from 'i18n-js';

I18n.fallbacks = true;

I18n.locale = window.navigator.language;
I18n.defaultLocale = 'ua';

export default I18n;
