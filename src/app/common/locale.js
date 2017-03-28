import React from 'react';
import {I18nManager} from 'react-native';
import I18n from 'react-native-i18n';

import en from './../../../assets/locale/en';
import ar from './../../../assets/locale/ar';

I18n.fallbacks = true;

I18n.translations = {
  en:en,
  ar:ar,
};

I18n.locale = I18nManager.isRTL ? 'ar' : 'en';

export const locale = I18n;
export const isRTL = I18nManager.isRTL;
