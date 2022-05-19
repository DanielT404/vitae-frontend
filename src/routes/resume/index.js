import { h } from 'preact';
import style from './style.css';
  
const Resume = () => {
    return (
        <object data="/assets/cv.pdf" type="application/pdf" style="width: 100%; height: 100%;">
            <iframe src="https://docs.google.com/viewer?url=cv.pdf&embedded=true" zoom="75"></iframe>
        </object>
    );
}

export default Resume;