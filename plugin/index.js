import Visitor from './visitor';

export default class LessPlugin {

  constructor(options) {
    this.options = options;
  }

  install(less, pluginManager) {
    pluginManager.addVisitor(new Visitor(less));
  }

}
