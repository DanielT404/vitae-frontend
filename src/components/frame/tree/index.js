import { h } from 'preact';

import { Link } from 'preact-router';
import { useContext } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { hideNavTree, showNavTree } from 'features/frame/frameSlice';

import Theme from 'utils/contexts/Theme';
import useWindowDimensions from 'utils/hooks/useWindowDimensions';

import Icon from 'components/material-icon';
import style from './style.css';

function TreeFrame(props) {
  const dispatch = useDispatch();
  const { theme } = useContext(Theme);
  let isNavTreeShown = useSelector((state) => state.frame.isNavTreeShown);
  const { width } = useWindowDimensions() || 0;
  if (width <= 1280 && !isNavTreeShown) {
    dispatch(hideNavTree());
  }
  if (width > 1280) {
    dispatch(showNavTree());
  }
  return (
    isNavTreeShown && (
      <div
        class={`${style.navWrapper} ${
          theme == 'light' ? style.navWrapperLightBg : style.navWrapperDarkBg
        }`}
      >
        <nav
          class={`${style.navList} ${
            theme == 'light' ? style.navListLightColor : style.navListDarkColor
          }`}
        >
          <li class={style.navTreeItem}>
            <Link
              href="/desktop"
              class={`${style.navTo} ${
                theme == 'light'
                  ? style.navListLightColor
                  : style.navListDarkColor
              }`}
            >
              <Icon
                type="desktop_windows"
                class={
                  theme == 'light' ? style.mainIconLight : style.mainIconDark
                }
              />
              <span
                class={`${style.navText} ${
                  props.currentNav == 'desktop' ? style.currentMainNav : ''
                }`}
              >
                Desktop
              </span>
            </Link>
          </li>
          <li class={style.navTreeItem}>
            <Link
              href="/about-me"
              class={`${style.navTo} ${
                theme == 'light'
                  ? style.navListLightColor
                  : style.navListDarkColor
              }`}
            >
              <Icon
                type="star"
                class={
                  theme == 'light' ? style.mainIconLight : style.mainIconDark
                }
              />
              <span
                class={`${style.navText} ${
                  props.currentNav !== 'desktop' ? style.currentMainNav : ''
                }`}
              >
                Quick Access
              </span>
            </Link>
            <ul class={style.navSubList}>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/about-me"
                  class={`${`${style.navTo} ${
                    theme == 'light'
                      ? style.navListLightColor
                      : style.navListDarkColor
                  }`} ${
                    props.currentNav == 'aboutMe' && theme == 'light'
                      ? style.currentSubNavLight
                      : props.currentNav == 'aboutMe' && theme == 'dark'
                      ? style.currentSubNavDark
                      : ''
                  }`}
                >
                  <Icon type="info" class={style.subIcon} />
                  <span class={style.navText}>About me</span>
                </Link>
              </li>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/projects"
                  class={`${`${style.navTo} ${
                    theme == 'light'
                      ? style.navListLightColor
                      : style.navListDarkColor
                  }`} ${
                    props.currentNav == 'projects' && theme == 'light'
                      ? style.currentSubNavLight
                      : props.currentNav == 'projects' && theme == 'dark'
                      ? style.currentSubNavDark
                      : ''
                  }`}
                >
                  <Icon type="view_list" class={style.subIcon} />
                  <span class={style.navText}>Projects</span>
                </Link>
              </li>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/resume"
                  class={`${`${style.navTo} ${
                    theme == 'light'
                      ? style.navListLightColor
                      : style.navListDarkColor
                  }`} ${
                    props.currentNav == 'resume' && theme == 'light'
                      ? style.currentSubNavLight
                      : props.currentNav == 'resume' && theme == 'dark'
                      ? style.currentSubNavDark
                      : ''
                  }`}
                >
                  <Icon type="attach_file" class={style.subIcon} />
                  <span class={style.navText}>Resume</span>
                </Link>
              </li>
              <li class={style.navTreeSubItem}>
                <Link
                  href="/contact"
                  class={`${`${style.navTo} ${
                    theme == 'light'
                      ? style.navListLightColor
                      : style.navListDarkColor
                  }`} ${
                    props.currentNav == 'contact' && theme == 'light'
                      ? style.currentSubNavLight
                      : props.currentNav == 'contact' && theme == 'dark'
                      ? style.currentSubNavDark
                      : ''
                  }`}
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
