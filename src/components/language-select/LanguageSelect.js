import React, { useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";
import { language_items } from '../../static/static_data';
import { useSelector} from 'react-redux';
import './LanguageSelect.css';

function LanguageSelect() {
  const themeState = useSelector(state => state.themeState);
  const [languagePersist, setLanguagePersist] = useState('')
  const [languageSelectActive, setLanguageSelectActive] = useState(false);
  const [language, setLanguage] = useState(null);
  const { i18n } = useTranslation();
  useEffect(() => {
    setLanguagePersist(language_items.find(lan => lan.languageCode === localStorage.getItem('lang')))
  }, [language])
  const changeLanguage = (languageDetail) => {
    setLanguage(languageDetail)
    i18n.changeLanguage(languageDetail.languageCode || "uz")
  };
    return (
        <div
        className="profile__headerLanguage"
        onClick={() => setLanguageSelectActive(!languageSelectActive)}
      >
        {languagePersist ? (
          <>
            {" "}
            <img src={languagePersist.languageImage} alt="" />{" "}
            <p>{languagePersist.title}</p>
          </>
        ) : (
          <p className="profile__headerDefault">Select Language</p>
        )}
        {languageSelectActive && (
          <ul className={`language__collection${!themeState ? " dark darkshadow" : " light lightshadow"}`}>
            {language_items?.map((languageItem) => (
              <li
                key={languageItem.id}
                className={`language__item${!themeState ? " dark darkshadow" : " light lightshadow"}`}
                onClick={() =>
                  changeLanguage({
                    languageImage: languageItem.languageImage,
                    languageReferance: languageItem.title,
                    languageCode: languageItem.languageCode
                  })
                }
              >
                <img
                  src={languageItem.languageImage}
                  alt={languageItem.title}
                />
                <p>{languageItem.title}</p>
              </li>
            ))}
          </ul>
        )}

      </div>
    )
}

export default LanguageSelect
