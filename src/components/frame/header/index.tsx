import { h, Fragment } from 'preact';

import { route } from 'preact-router';
import { useContext, useState } from 'preact/hooks';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'components/store';

import { closeFrameView, toggleNavTree } from 'features/frame/frameSlice';
import { clearFileInfo, clearPreviousActiveFile, closeFileModeView } from 'features/file/fileSlice';
import { setHighlightState, setSearchText } from 'features/highlight/highlightSlice';
import { updateToken } from 'features/captcha/captchaSlice';

import { handleNavigation } from 'utils/functions/handleNavigation';
import { SHOW_DEFAULT_PATH } from 'utils/global/constants';

import Theme from 'utils/contexts/Theme';

import Icon from 'components/material-icon';
import style from './style.css';

function HeaderFrame({ path }: { path: string}) {
  const navHandler = (type: "back" | "next") => {
    const nextPath = handleNavigation(path, type);
    if (nextPath) route(nextPath);
  };

  const dispatch = useDispatch();
  const isNavTreeShown = useSelector((state: RootState) => state.frame.isNavTreeShown);
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
          class={`${style.frameHeader} ${theme == "light" ? style.lightHeaderBg : style.darkHeaderBg} ${theme == "light" && style.borderBottomLight}`}
        >
          <div class={style.navigation}>
            {path == "/desktop" && (
              <Fragment>
                <Icon
                  type="arrow_back"
                  id="back_route_icon"
                  class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark} ${theme === "light" ? style.notAvailableIconLight : style.notAvailableIconDark}`}
                  handleClick={(e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    navHandler("back");
                  }}
                />
                <Icon
                  type="arrow_forward"
                  id="next_route_icon"
                  class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark}`}
                  handleClick={(e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    navHandler("next");
                  }}
                />
              </Fragment>
            )}
            {path == "/contact" && (
              <Fragment>
                <Icon
                  id="back_route_icon"
                  type="arrow_back"
                  class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark}`}
                  handleClick={(e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    navHandler("back");
                  }}
                />
                <Icon
                  id="next_route_icon"
                  type="arrow_forward"
                  class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark} ${theme === "light" ? style.notAvailableIconLight : style.notAvailableIconDark}`}
                  handleClick={(e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    navHandler("next");
                  }}
                />
              </Fragment>
            )}
            {path !== "/desktop" && path !== "/contact" && (
              <Fragment>
                <Icon
                  id="back_route_icon"
                  type="arrow_back"
                  class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark}`}
                  handleClick={(e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    navHandler("back");
                  }}
                />
                <Icon
                  id="next_route_icon"
                  type="arrow_forward"
                  class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark}`}
                  handleClick={(e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    navHandler("next");
                  }}
                />
              </Fragment>
            )}
            <Icon
              id="refresh_icon"
              type="autorenew"
              class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark}`}
              handleClick={() => window.location.reload()}
            />
            <Icon
              id="expand_section_icon"
              type="arrow_upward"
              class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark}`}
              handleClick={() => setIsExpandSectionActive(true)}
            />
          </div>
          <div class={style.pathBox}>
            <Icon
              type="https"
              class={`${style.navIcon} ${theme === "light" ? style.navIconLight : style.navIconDark} ${style.httpButton}`}
            />
            <div class={theme == "light" ? style.pathLight : style.pathDark}>
              {window.location.origin}{path === '/' ? SHOW_DEFAULT_PATH : path}
            </div>
          </div>
          <div class={style.keywordBox}>
            <input
              type="text"
              placeholder="Highlight keywords..."
              class={`${style.keywordInput} ${theme == "light" ? style.keywordInputLightColor : style.keywordInputDarkColor}`}
              onChange={(e: h.JSX.TargetedEvent<HTMLInputElement>) => {
                dispatch(setSearchText({ searchText: e.currentTarget.value }))
                if (e.currentTarget.value == '') dispatch(setHighlightState({ state: false }))
                if (e.currentTarget.value !== '') dispatch(setHighlightState({ state: true }))
              }}
            />
          </div>
          <div
            class={style.exit}
            onClick={() => {
              dispatch(updateToken(''))
              dispatch(closeFrameView());
              dispatch(clearPreviousActiveFile());
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
