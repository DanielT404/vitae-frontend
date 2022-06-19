import { Fragment, h } from 'preact';
import { useContext, useEffect, useState, useCallback } from 'preact/hooks';
import { useSelector } from 'react-redux';

import { GET_PROJECTS_API_ROUTE } from 'utils/global/constants';
import { get } from 'utils/functions/handleData';

import WindowFrame from 'components/file/window';
import Highlight from 'components/highlight';

import Theme from 'utils/contexts/Theme';

import style from './style.css';
import { RootState } from 'components/store';
import { IProjects } from 'utils/interfaces/projects/projects.interface';

function Projects() {
  const isViewFileMode = useSelector((state: RootState) => state.file.viewFileMode);
  const [projects, setProjects] = useState({} as IProjects);
  const { theme } = useContext(Theme);

  const getProjects = useCallback(async () => {
    const projects = await get(GET_PROJECTS_API_ROUTE);
    setProjects(projects);
  }, []);
  useEffect(() => {
    getProjects().catch((err) => {
      throw new Error(err);
    });
  }, []);

  return (
    <div class={`${style.projectsWrapper} ${theme === "light" && style.darkColor}`}>
      {isViewFileMode && <WindowFrame />}
      <div class={style.grid}>
        {projects.data && projects.data.map((project) => {
          let { id, name, description, github_repo, tech_stack, external_services } = project;
          description = (description as string).split('\n');
          return (
            <div class={`${style.card} ${theme === "light" && style.whiteBg}`} key={id}>
              <h1 class={style.cardHeader}><Highlight source={`${name}`} /></h1>
              <h2 class={style.cardSubHeader}>
                {
                  tech_stack.map((stack) => {
                    let { tech, libraries } = stack;
                    if (libraries !== undefined) {
                      libraries = (libraries as string[]).join(' | ');
                    }
                    return (
                      <Highlight source={`${tech} ${libraries ? `(${libraries})` : ''}`} displayType="block" />
                    )
                  })
                }
              </h2>
              <p class={style.cardDescription}>
                {description.map((line) => {
                  return (
                    <Highlight source={`${line}`} displayType="block" />
                  )
                })}
                {external_services !== undefined && (
                  <div>
                    <Highlight source={`External services used:`} />
                    {external_services.map((service, idx) => {
                      return (
                        <Highlight source={`${idx + 1}. ${service}`} displayType="block" />
                      )
                    })}
                  </div>
                )}
              </p>
              <div class={style.cardExternalLink} onClick={() =>
                window.open(`${github_repo}`, '_blank')
              }>
                <img src="/assets/GitHub-Mark-Light-32px.png" />
                <span class={`${style.ctaText} ${theme === 'light' && style.whiteColor}`}>
                  <Highlight source="Check out github repo" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
