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
                <Link to='/' className={feedStyles['feed__item-meta-category-link']}>Jupyter Notebook / Datasci</Link>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/'>Simple Network Analytics</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>A demonstration of a simple methodology to analyze the community structure 
            of a network.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/'>View</Link>
         </div>



        <div className={feedStyles['feed__item']}>
          <div className={feedStyles['feed__item-meta']}>
              {/* <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <Link to='/category/ethiopia/' className={feedStyles['feed__item-meta-category-link']}>Datavis</Link>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/headlines'>Headlines of the World</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>An interactive data visualization displaying news headlines from around the world.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/headlines'>View</Link>
         </div>


          <div className={feedStyles['feed__item']}>
            <div className={feedStyles['feed__item-meta']}>
             {/*  <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <Link to='/category/ethiopia/' className={feedStyles['feed__item-meta-category-link']}>Writing</Link>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/category/ethiopia'>Notes from Ethiopia</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>9 posts from my trip to Ethiopia in January 2020.</p>
            <Link className={feedStyles['feed__item-readmore']} to='/category/ethiopia'>View</Link>
          </div>

          <div className={feedStyles['feed__item']}>
          <div className={feedStyles['feed__item-meta']}>
             {/*  <span className={feedStyles['feed__item-meta-divider']} /> */}
              <span className={feedStyles['feed__item-meta-category']}>
                <Link to='/category/ethiopia/' className={feedStyles['feed__item-meta-category-link']}>Writing</Link>
              </span>
            </div>
            <h2 className={feedStyles['feed__item-title']}>
              <Link className={feedStyles['feed__item-title-link']} to='/category/india'>Notes from India</Link>
            </h2>
            <p className={feedStyles['feed__item-description']}>28 posts from my trip to India in Summer - Fall of 2014.</p>
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
