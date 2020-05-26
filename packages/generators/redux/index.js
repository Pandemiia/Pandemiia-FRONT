const Generator = require('yeoman-generator');
const _ = require('lodash');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your module name'
      },
      {
        type: 'confirm',
        name: 'normalizer',
        message: 'Would you like to add a module normalizer?',
        default: false
      }
    ]);
  }

  writing() {
    const { name, normalizer } = this.answers;

    const arr = [
      { tpl: 'module.actions.ejs', filename: `${name}.actions.js` },
      { tpl: 'module.selectors.ejs', filename: `${name}.selectors.js` },
      { tpl: 'module.reducer.ejs', filename: `${name}.reducer.js` },
      { tpl: 'module.mocks.ejs', filename: `${name}.mocks.js` },
      {
        tpl: 'module.normalizers.ejs',
        filename: `${name}.normalizers.js`,
        skip: !normalizer
      },
      { tpl: 'index.ejs', filename: 'index.js' }
    ];

    arr.forEach(item => {
      if (typeof item.skip !== 'undefined' && item.skip) return;
      this.copyTplWithParams(item.tpl, item.filename);
    });
  }

  copyTplWithParams(tpl, filename) {
    if (!tpl) return;

    const { name, normalizer } = this.answers;

    const nameCamelCase = _.camelCase(name);
    const namePascalCase = _.upperFirst(nameCamelCase);
    const nameSnakeCase = _.chain(name)
      .snakeCase(name)
      .toUpper()
      .value();

    this.fs.copyTpl(this.templatePath(tpl), this.destinationPath(`${this.contextRoot}/${name}/${filename}`), {
      name,
      nameCamelCase,
      namePascalCase,
      nameSnakeCase,
      normalizer
    });
  }

  install() {}
};
