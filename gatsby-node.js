'use strict';

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
exports.onCreateWebpackCOnfig = ({ actions }) => {
    
    actions.setWebpackConfig(
    {
          rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
          ],

      Optio
/*         plugins: [
          ['transform-runtime', {
            polyfill: false,
            regenerator: true
          }]
        ],
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        chrome: 74,
                    }
                }
            ],
            '@babel/preset-react'
        ]  */
    })
};