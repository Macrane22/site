import React, { useRef, useEffect } from 'react';
import Layout from '../Layout';
import styles from './Notebook.module.scss';
import ReactMarkdown from 'react-markdown';


const Notebook = () => {
/*   const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  }); */

  const md = `
  `;

  return (
    <div className={styles['notebook']}>
        {<ReactMarkdown source={md}></ReactMarkdown> }
    </div>
  );
};

export default Notebook;
