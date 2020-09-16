// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/Layout';
//import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import Page from '../components/Page';
import type { MarkdownRemark } from '../types';
import Sidebar from '../components/Sidebar';
import sidebarStyles from '../components/Sidebar/Sidebar.module.scss';
import feedStyles from '../components/Feed/Feed.module.scss';


/* type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
}; */

const ProjectsListTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  /* const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle; */

  return (
    <Layout title={`${siteTitle} - ${siteSubtitle}`} >
      <Sidebar/>
        <Page title='Projects / Writing'>

        {/* Add new items here: */}

        <div className={feedStyles['feed__item']}>
          <div className={feedStyles['feed__item-meta']}>
              {/* <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <span className={feedStyles['feed__item-meta-category-link']}>Jupyter Notebook / Datasci</span>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/congress-polarization'>Visualizing Congressional Polarization with Network Analysis</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>I use bill cosponsorship data to analyze the partisan divide in the House of Representatives over the last 40 years. Written in a Jupyter notebook with Python, Markdown, and HTML.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/congress-polarization'>View</Link>
         </div>


         <div className={feedStyles['feed__item']}>
          <div className={feedStyles['feed__item-meta']}>
              {/* <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <span className={feedStyles['feed__item-meta-category-link']}>Datavis</span>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/headlines'>Headlines of the World</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>A first attempt at a simple news aggregator that displays headlines from countries around the world on an interactive map. Built with React, D3, and Python.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/headlines'>View</Link>
         </div>


        <div className={feedStyles['feed__item']}>
          <div className={feedStyles['feed__item-meta']}>
              {/* <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <span className={feedStyles['feed__item-meta-category-link']}>Jupyter Notebook / Datasci</span>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/comm_detection_comparison'>Benchmarking Community Detection Algorithms in Python</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>An in-depth comparison of six community detection algorithms in Python. Written in a Jupyter notebook with Python, Markdown, and HTML.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/comm_detection_comparison'>View</Link>
         </div>


          <div className={feedStyles['feed__item']}>
            <div className={feedStyles['feed__item-meta']}>
             {/*  <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <span className={feedStyles['feed__item-meta-category-link']}>Writing</span>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/category/ethiopia'>Notes from Ethiopia</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>I spent most of January 2020 in Ethiopia. This is a series of posts I wrote on the road about my experiences and mishaps.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/category/ethiopia'>View</Link>
          </div>

          <div className={feedStyles['feed__item']}>
          <div className={feedStyles['feed__item-meta']}>
             {/*  <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <span className={feedStyles['feed__item-meta-category-link']}>Writing</span>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/category/india'>Notes from India</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>After college I spent three months wandering around northern India. I turned my stray observations into this collection of essays.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/category/india'>View</Link>
          </div>
      </Page>
    </Layout>
  );
};

/* export const query = graphql`
  query ProjectsList($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`; */

export default ProjectsListTemplate;
