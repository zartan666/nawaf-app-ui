import I18n from 'react-native-i18n';

import en from './../../../assets/locale/en';
import ar from './../../../assets/locale/ar';
let locale;

I18n.fallbacks = true;

I18n.translations = {
  en:en,
  ar:ar,
};

I18n.locale = 'ar';

export default locale = I18n;