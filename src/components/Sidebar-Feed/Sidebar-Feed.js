// on hold

import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import sidebarStyles from '../Sidebar/Sidebar.module.scss';
import feedStyles from '../Feed/Feed.module.scss';
import { useSiteMetadata } from '../../hooks';

const SidebarFeed = () => {
  const { author, menu } = useSiteMetadata();
  return (
        <div className={sidebarStyles['sidebar']}>
          <div className={sidebarStyles['sidebar__inner']}>
          <h1>Here</h1>
          </div>
        </div>
  );
};

const AllPosts = ({ edges }) => (
    <div className={feedStyles['feed']}>
      {edges.map((edge) => (
        <div className={feedStyles['feed__item']} key={edge.node.fields.slug}>
          <div className={feedStyles['feed__item-meta']}>
            <time className={feedStyles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <span className={feedStyles['feed__item-meta-divider']} />
            <span className={feedStyles['feed__item-meta-category']}>
              <Link to={edge.node.fields.categorySlug} className={feedStyles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
            </span>
          </div>
          <h2 className={feedStyles['feed__item-title']}>
            <Link className={feedStyles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          {/* <p className={feedStyles['feed__item-description']}>{edge.node.frontmatter.description}</p> */}
          <Link className={feedStyles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
        </div>
      ))}
    </div>
);


export default query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/content/posts/ethiopia"} },
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM YYYY")
            category
          }
          excerpt
        }
      }
    }
  }
`;
