# About:

This is just a demo repository that gets the Material UI library working.

The trick was making sure that the .babelrc file exists, and was updated with the following:

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": ["babel-plugin-styled-components",
    "@babel/plugin-proposal-class-properties"
  ]
}

```
Note:
@babel/plugin-proposal-class-properties  needed to be installed via npm and then referenced in the .babelrc file. The above quoted area was the only text in the file.

### Contributors
Devin Sweeting && Charley McGowan
