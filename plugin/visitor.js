export default class Visitor {

  constructor(less) {
    this.isReplacing = true;
    this.isPreEvalVisitor = true;
    this.less = less;
    this._visitor = new this.less.visitors.Visitor(this);
  }

  run(root) {
    return this._visitor.visit(root);
  }

  createVariables(rule) {
    let rules     = [];
    let variables = rule.value.value[0].value;
    let tree = this.less.tree;

    for(let variable of variables) {
      rules.push( new tree.Rule(
        `@${variable.value}`, 
        new tree.Value([new tree.Keyword('null')]),
        rule.important,
        rule.merge,
        rule.index,
        rule.currentFileInfo,
        rule.inline,
        rule.variable
      ));
    }
    return rules;
  }

  visitRuleset(ruleset) {
    let api = ruleset.variable('@api');
    if (api !== undefined) {
      ruleset.prependRule(this.createVariables(api));
    }
    return ruleset;
  }
}
