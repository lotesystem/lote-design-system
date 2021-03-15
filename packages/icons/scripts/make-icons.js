const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

const basePath = path.resolve(__dirname, '../src');
const svgDir = path.resolve(basePath, 'svgs');
const exportDir = path.resolve(basePath, 'icons.js');

const IGNORES = /.DS_Store/i;

const toPascalCase = str => {
  return str
    .match(/[a-z0-9]+/gi)
    .map(function(str) {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    })
    .join('');
};

const exportTemplate = filenames => `
  ${filenames
    .map(
      file => `
    import ${toPascalCase(file)} from './svgs/${file}.svg';
  `
    )
    .join('\n')}

  export default {
    ${filenames
      .map(
        file => `
      '${file}': ${toPascalCase(file)}
    `
      )
      .join(',\n')}
  }
`;

/* eslint-disable no-console */
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.log('\x1b[41m%s\x1b[0m', 'make:icons ERR no files found');
    throw err;
  }
  const data = exportTemplate(
    files.filter(f => !f.match(IGNORES)).map(f => f.replace('.svg', ''))
  );
  const formatted = prettier.format(data, {
    parser: 'babel',
    singleQuote: true,
    trailingComma: 'none'
  });

  fs.writeFile(exportDir, formatted, err => {
    if (err) {
      return console.log(
        '\x1b[41m%s\x1b[0m',
        'make:icons ERR failed to create new exports'
      );
    }
    return console.log('\x1b[32m%s\x1b[0m', 'make:icons SUCCESS');
  });
});
