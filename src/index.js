'use strict';
const repl = require('repl');
const EggLoader = require('egg-core/lib/loader/egg_loader');
const Application = require('egg').Application;

// Remove egg-watcher plugin
const _getLoadUnits = EggLoader.prototype.getLoadUnits;
EggLoader.prototype.getLoadUnits = function() {
  const _dirs = _getLoadUnits.call(this);
  return _dirs.filter(dir => !dir.path.includes('egg-watcher'));
};

const app = new Application({
  baseDir: process.cwd(),
});

app.ready(() => {
  const r = repl.start('> ');
  r.context.app = app;
  r.context.ctx = app.createAnonymousContext();
});
