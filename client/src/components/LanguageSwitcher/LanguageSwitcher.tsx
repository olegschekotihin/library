import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcherButton } from '../shared/StyledComponents';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <LanguageSwitcherButton onClick={() => changeLanguage('en')}>EN</LanguageSwitcherButton>
      <LanguageSwitcherButton onClick={() => changeLanguage('ru')}>RU</LanguageSwitcherButton>
    </div>

  );
}

export default LanguageSwitcher;
