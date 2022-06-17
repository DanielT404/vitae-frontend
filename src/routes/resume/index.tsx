import { h, Fragment } from 'preact';
import { useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { RootState } from 'components/store';
import WindowFrame from 'components/file/window';

import Icon from 'components/material-icon';

import style from './style.css';
import { CV_URL } from 'utils/global/constants';

const Resume = () => {
  const isViewFileMode = useSelector((state: RootState) => state.file.viewFileMode);
  const _CV_FIRST_PAGE = 1;
  const _CV_SECOND_PAGE = 2;

  return (
    <Fragment>
      <div
        class={style.downloadBtn}
        onClick={() =>
          window.open(
            CV_URL,
            '_blank'
          )
        }
      >
        Download CV
        <a
          href={CV_URL}
          target="_blank"
          rel="noreferrer"
          class={style.downloadIcon}
          download
        >
          <Icon type="download" />
        </a>
      </div>
      <div class={style.resumeWrapper}>
        {isViewFileMode && <WindowFrame />}
        <Document file="https://cv-variants-bucket.s3.eu-central-1.amazonaws.com/Daniel-Florin-Damian_Tuna_-_Junior_Software_Developer-1.pdf" className={style.pdfViewer}>
          <Page pageNumber={_CV_FIRST_PAGE} className={style.pdfPage} />
          <Page pageNumber={_CV_SECOND_PAGE} className={`${style.pdfPage} ${style.noOverflowY}`} />
        </Document>
      </div>
    </Fragment>
  );
};

export default Resume;
