'use strict'

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
}

exports.alinode = {
  enable: true,
  package: 'egg-alinode',
  env: ['prod'],
}

exports.webpack = {
  enable: true,
  package: 'egg-webpack',
}