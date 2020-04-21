const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/src/index.jsx');
const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  'mode': 'production',
  'entry': SRC_DIR,
  'output': {
    'path': DIST_DIR,
    'filename': 'bundle.js'
  },
  'devtool': 'source-map',
  'module': {
    'rules': [
      {
        'test': /\.(js|jsx)$/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'babel-loader',
          'options': {
            'presets': [
              '@babel/preset-env',
              '@babel/react'
            ]
          }
        }
      },
      {
        'test': /\.css$/,
        'exclude': /node_modules/,
        'use': [
          'style-loader',
          {
            'loader': 'css-loader',
            'options': {
              'importLoaders': 1,
              'modules': true
            }
          }
        ],
        'include': /\.module\.css$/
      },
      {
        'test': /\.css$/,
        'use': [
          'style-loader',
          'css-loader'
        ],
        'exclude': /\.module\.css$/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  }
};