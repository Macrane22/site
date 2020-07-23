'use strict';

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
/* exports.onCreateWebpackCOnfig = ({ actions }) => {
    module: {
        loaders: [
            {
                test: /\.md$/,
                loader: 'babel!react-markdown'
            }
        ] */
/*         rules: [
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'markdown-loader'
                    }
                ]
            }
        ]; 
  }
}; */