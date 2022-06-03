import { h, Fragment } from 'preact';

import { route } from 'preact-router';
import { useContext, useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';


import { closeFrameView, toggleNavTree } from 'features/frame/frameSlice';
import { clearActiveFiles, clearFileInfo, closeFileModeView } from 'features/file/fileSlice';
import { setHighlightState, setSearchText } from 'features/highlight/highlightSlice';
import { updateToken } from 'features/captcha/captchaSlice';

import { handleNavigation } from 'utils/functions/handleNavigation';

import Theme from 'utils/contexts/Theme';

import Icon from 'components/material-icon';
import style from './style.css';

function HeaderFrame({ path }) {
  const _SHOW_DEFAULT_PATH = "/about-me";
  const navHandler = (type) => {
    const nextPath = handleNavigation(path, type);
    if (nextPath) route(nextPath);
  };

  const dispatch = useDispatch();
  const isNavTreeShown = useSelector((state) => state.frame.isNavTreeShown);
  const [isExpandSectionActive, setIsExpandSectionActive] = useState(false);

  const { theme } = useContext(Theme);

  return (
    <Fragment>
      {isExpandSectionActive && (
        <div class={style.expandSection} onClick={() => setIsExpandSectionActive(false)}>
          <Icon type="arrow_downward" />
        </div>
      )}
      {!isExpandSectionActive && (
        <div
          class={`
          ${style.header} 
          ${theme == "light" ? style.lightHeaderBg : style.darkHeaderBg} 
          ${theme == "light" && style.borderBottomLight}
          `}
        >
          <div class={style.navigation}>
            {path == "/desktop" && (
              <Fragment>
                <Icon
                  type="arrow_back"
                  class={`
                    ${style.navIcon} 
                    ${theme === "light" ? style.navIconLight : style.navIconDark} 
                    ${theme === "light" ? style.notAvailableIconLight : style.notAvailableIconDark}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    navHandler("back");
                  }}
                />
                <Icon
                  type="arrow_forward"
                  class={`
                    ${style.navIcon} 
                    ${theme === "light" ? style.navIconLight : style.navIconDark}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    navHandler("next");
                  }}
                />
              </Fragment>
            )}
            {path == "/contact" && (
              <Fragment>
                <Icon
                  type="arrow_back"
                  class={`
                    ${style.navIcon} 
                    ${theme === "light" ? style.navIconLight : style.navIconDark}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    navHandler("back");
                  }}
                />
                <Icon
                  type="arrow_forward"
                  class={`
                    ${style.navIcon} 
                    ${theme === "light" ? style.navIconLight : style.navIconDark} 
                    ${theme === "light" ? style.notAvailableIconLight : style.notAvailableIconDark}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    navHandler("next");
                  }}
                />
              </Fragment>
            )}
            {path !== "/desktop" && path !== "/contact" && (
              <Fragment>
                <Icon
                  type="arrow_back"
                  class={`
                    ${style.navIcon} 
                    ${theme === "light" ? style.navIconLight : style.navIconDark}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    navHandler("back");
                  }}
                />
                <Icon
                  type="arrow_forward"
                  class={`
                    ${style.navIcon} 
                    ${theme === "light" ? style.navIconLight : style.navIconDark}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    navHandler("next");
                  }}
                />
              </Fragment>
            )}
            <Icon
              type="autorenew"
              class={`
                ${style.navIcon} 
                ${theme === "light" ? style.navIconLight : style.navIconDark}
              `}
            />
            <Icon
              type="arrow_upward"
              class={`
                ${style.navIcon} 
                ${theme === "light" ? style.navIconLight : style.navIconDark}
              `}
              onClick={() => setIsExpandSectionActive(true)}
            />
          </div>
          <div class={style.pathBox}>
            <Icon
              type="https"
              class={`
                ${style.navIcon} 
                ${theme === "light" ? style.navIconLight : style.navIconDark} 
                ${style.httpButton}
              `}
            />
            <div class={theme == "light" ? style.pathLight : style.pathDark}>
              https://idratherprogram.com{path === '/' ? _SHOW_DEFAULT_PATH : path}
            </div>
          </div>
          <div class={style.keywordBox}>
            <input
              type="text"
              placeholder="Highlight keywords..."
              class={`
                ${style.keywordInput} 
                ${theme == "light" ? style.keywordInputLightColor : style.keywordInputDarkColor}
              `}
              onChange={(e) => {
                dispatch(setSearchText({ searchText: e.target.value }))
                if (e.target.value == '') dispatch(setHighlightState({ state: false }))
                if (e.target.value !== '') dispatch(setHighlightState({ state: true }))
              }}
            />
          </div>
          <div
            class={style.exit}
            onClick={() => {
              dispatch(updateToken({ token: null }))
              dispatch(closeFrameView());
              dispatch(clearActiveFiles());
              dispatch(clearFileInfo());
              dispatch(closeFileModeView());
            }}
          >
            <span>x</span>
          </div>
          <div
            class={style.hamburger}
            onClick={() => dispatch(toggleNavTree())}
          >
            <Icon
              type={isNavTreeShown ? 'arrow_circle_up' : 'arrow_circle_down'}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default HeaderFrame;
