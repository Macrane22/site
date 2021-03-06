'use strict';

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createPage({
    path: '/',
    component: path.resolve('./src/templates/projects-list-template.js')
  });

  createPage({
    path: '/resume',
    component: path.resolve('./src/templates/resume-template.js')
  });

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js')
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js')
  });

  // Projects list
  createPage({
    path: '/projects',
    component: path.resolve('./src/templates/projects-list-template.js')
  });

  createPage({
    path: '/headlines',
    component: path.resolve('./src/pages/headlines.js')
  });

  /* New page here */
  createPage({
    path: '/congress-polarization',
    component: path.resolve('./src/components/Notebook/Notebook1.js')
  });

  createPage({
    path: '/comm_detection_comparison',
    component: path.resolve('./src/components/Notebook/Notebook2.js')
  });

  createRedirect({
    fromPath: '/',
    toPath: '/projects', // doesn't seem to work
    isPermanent: true
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.fields.slug }
      });
    } else if (_.get(edge, 'node.frontmatter.template') === 'post') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post-template.js'),
        context: { slug: edge.node.fields.slug }
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createPostsPages(graphql, actions);
};


module.exports = createPages;
