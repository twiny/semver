module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'refactor',
        'test',
        'revert',
        'chore',
        'docs',
        'content',
        'build',
        'style',
        'ci',
        'hotfix',
        'bugfix',
        'release'
      ]
    ]
  },
  parserPreset: {
    parserOpts: {
      headerCorrespondence: [
        'type',
        'scope',
        'subject'
      ]
    }
  }
};
