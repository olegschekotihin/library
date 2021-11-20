import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../shared/Button';
import { LANGUAGE_SWITCHER_LINK_LIST } from '../../const';

/**
 * Component for showing language switcher buttons
 *
 * @constructor
 */

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const langSwitchersData = LANGUAGE_SWITCHER_LINK_LIST;

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      {
        langSwitchersData.map((langSwitcher) => (
          <Button
            key={langSwitcher.lang}
            value={langSwitcher.lang}
            modify
            onClick={() => changeLanguage(langSwitcher.lang)}
          />
        ))
      }
    </div>
  );
}

export default LanguageSwitcher;
