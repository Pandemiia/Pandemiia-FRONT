'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your file name'
      },
      {
        type: 'confirm',
        name: 'storybook',
        message: 'Would you like to add storybook?',
        default: true
      }
    ]);
  }

  writing() {
    this.namePascalCase =
      this.answers.name.charAt(0).toUpperCase() +
      this.answers.name
        .replace(/-([a-z])/g, function(g) {
          return g[1].toUpperCase();
        })
        .slice(1);

    const arr = [
      { tpl: 'component.ejs', filename: `${this.answers.name}.js` },
      { tpl: 'component.scss', filename: `${this.answers.name}.scss` },
      {
        tpl: 'component.container.ejs',
        filename: `${this.answers.name}.container.js`
      },
      {
        tpl: 'component.stories.ejs',
        filename: `${this.answers.name}.stories.js`,
        skip: !this.answers.storybook
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

    this.fs.copyTpl(
      this.templatePath(tpl),
      this.destinationPath(`${this.contextRoot}/${this.answers.name}/${filename}`),
      {
        name: this.answers.name,
        namePascalCase: this.namePascalCase
      }
    );
  }

  install() {
    // this.installDependencies();
  }
};
