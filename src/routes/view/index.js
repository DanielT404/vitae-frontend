import { h } from 'preact';

import Page404Component from 'routes/404';
import Frame from 'components/frame';
import { useDispatch } from 'react-redux';
import { set404Page } from 'features/frame/frameSlice';

function View(props) {
  const dispatch = useDispatch();
  if (props.default) {
    dispatch(set404Page({ is404PageActive: true }));
    return <Page404Component />;
  } else {
    dispatch(set404Page({ is404PageActive: false }));
    return <Frame props={props} />;
  }
}

export default View;
