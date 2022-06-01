import { h } from 'preact';

import { Link } from 'preact-router';
import { useContext } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { hideNavTree, showNavTree } from 'features/frame/frameSlice';

import Theme from 'utils/contexts/Theme';
import useWindowDimensions from 'utils/hooks/useWindowDimensions';
import { SMALL_VIEWPORT_BREAKPOINT } from '/utils/global/constants'

import Icon from 'components/material-icon';
import style from './style.css';

function TreeFrame({ currentNav }) {
  const dispatch = useDispatch();
  const isNavTreeShown = useSelector((state) => state.frame.isNavTreeShown);

  const { width } = useWindowDimensions();
  if (width <= SMALL_VIEWPORT_BREAKPOINT && !isNavTreeShown) {
    dispatch(hideNavTree());
  }
  if (width > SMALL_VIEWPORT_BREAKPOINT) {
    dispatch(showNavTree());
  }

  const { theme } = useContext(Theme);
  return (
    isNavTreeShown && (
      <div class={`
        ${style.navWrapper} 
        ${theme == 'light' ? style.navWrapperLightBg : style.navWrapperDarkBg}
      `}>
        <nav class={`
          ${style.navList} 
          ${theme == 'light' ? style.navListLightColor : style.navListDarkColor}
        `}>
          <li class={style.navTreeItem}>
            <Link
              href="/desktop"
              class={`
                ${style.navTo} 
                ${theme == 'light' ? style.navListLightColor : style.navListDarkColor}
              `}
            >
              <Icon
                type="desktop_windows"
                class={theme == 'light' ? style.mainIconLight : style.mainIconDark}
              />
              <span class={`
                ${style.navText} 
                ${currentNav == 'desktop' && style.currentMainNav}
              `}
              >
                Desktop
              </span>
            </Link>
          </li>
          <li class={style.navTreeItem}>
            <Link
              href="/about-me"
              class={`
                ${style.navTo} 
                ${theme == 'light' ? style.navListLightColor : style.navListDarkColor}
              `}
            >
              <Icon
                type="star"
                class={theme == 'light' ? style.mainIconLight : style.mainIconDark}
              />
              <span class={`
                ${style.navText} 
                ${currentNav !== 'desktop' && style.currentMainNav}
              `}>
                Quick Access
              </span>
            </Link>
            <ul class={style.navSubList}>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/about-me"
                  class={`
                    ${style.navTo} 
                    ${theme == 'light' ? style.navListLightColor : style.navListDarkColor}
                    ${currentNav == 'aboutMe' && (theme == 'light' ? style.currentSubNavLight : style.currentSubNavDark)}
                  `}
                >
                  <Icon type="info" class={style.subIcon} />
                  <span class={style.navText}>About me</span>
                </Link>
              </li>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/projects"
                  class={`
                    ${style.navTo} 
                    ${theme == 'light' ? style.navListLightColor : style.navListDarkColor}
                    ${currentNav == 'projects' && (theme == 'light' ? style.currentSubNavLight : style.currentSubNavDark)}
                  `}
                >
                  <Icon type="view_list" class={style.subIcon} />
                  <span class={style.navText}>Projects</span>
                </Link>
              </li>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/resume"
                  class={`
                    ${style.navTo} 
                    ${theme == 'light' ? style.navListLightColor : style.navListDarkColor}
                    ${currentNav == 'resume' && (theme == 'light' ? style.currentSubNavLight : style.currentSubNavDark)}
                  `}
                >
                  <Icon type="attach_file" class={style.subIcon} />
                  <span class={style.navText}>Resume</span>
                </Link>
              </li>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/contact"
                  class={`
                    ${style.navTo} 
                    ${theme == 'light' ? style.navListLightColor : style.navListDarkColor}
                    ${currentNav == 'contact' && (theme == 'light' ? style.currentSubNavLight : style.currentSubNavDark)}
                  `}
                >
                  <Icon type="contact_mail" class={style.subIcon} />
                  <span class={style.navText}>Contact</span>
                </Link>
              </li>
            </ul>
          </li>
        </nav>
      </div>
    )
  );
}

export default TreeFrame;
