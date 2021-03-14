module.exports = {
  '**/*.+(js|json|less|css|ts|tsx|md)': [
    'eslint --ignore-path .gitignore . --fix',
    'git add'
  ]
};
