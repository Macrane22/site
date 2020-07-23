// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import { Document, Page } from 'react-pdf';
import styles from './resume-template.module.scss';

const ResumeTemplate = () => {
  return (
    <Layout>
       {/*  <Document file='resume.pdf' /> */}
       <iframe className={styles['resume-template']} src="https://macrane22.github.io/resume/matthew_crane_resume.pdf">
       </iframe>
    </Layout>
  );
};

export default ResumeTemplate;
