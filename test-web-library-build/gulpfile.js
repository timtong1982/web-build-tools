'use strict';

let path = require('path');
let build = require('@microsoft/web-library-build');

build.sass.setConfig({ useCSSModules: true });
build.webpack.setConfig({ configPath: null });

build.setConfig({
  libAMDFolder: path.join(build.getConfig().packageFolder, 'lib-amd')
});

build.preCopy.cleanMatch = ['src/preCopyTest.ts'];

build.initialize(require('gulp'));
