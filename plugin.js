var path = require('path');
var root = path.join.bind(path, __dirname)

var appRoot = root('src/');


module.exports = {
    dir : root
  , root: appRoot
  , source: appRoot + '**/*.js'
  , html: appRoot + '**/*.html'
  , style: root('styles/**/*.css')
  , output: root('dist/')
  , doc:root('./doc')
  , e2eSpecsSrc: root('test/e2e/src/*.js')
  , e2eSpecsDist:root('test/e2e/dist/')
  , system: {
      output: root('dist', 'system')
  }
};
