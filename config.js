// First, install the required packages
// npm install style-dictionary --save-dev

// Create a config.js file at the root of your project
const StyleDictionary = require('style-dictionary');

// Register custom transforms for React Native
StyleDictionary.registerTransform({
  name: 'size/reactNative',
  type: 'value',
  matcher: token => {
    return token.type === 'dimension';
  },
  transformer: token => {
    return Number(token.value);
  },
});

StyleDictionary.registerTransform({
  name: 'color/reactNative',
  type: 'value',
  matcher: token => {
    return token.type === 'color';
  },
  transformer: token => {
    return token.value;
  },
});

// Register custom format for React Native
StyleDictionary.registerFormat({
  name: 'reactNative/js',
  formatter: function ({dictionary, file}) {
    const header = `/**
 * Do not edit directly
 * Generated on ${new Date().toUTCString()}
 */

`;

    return (
      header +
      `export const ${file.destination.split('.')[0]} = ${JSON.stringify(
        dictionary.tokens,
        null,
        2,
      )};`
    );
  },
});

// Configure style dictionary
module.exports = {
  source: ['tokens.json'],
  platforms: {
    reactNative: {
      transformGroup: 'js',
      transforms: ['size/reactNative', 'color/reactNative', 'name/cti/camel'],
      buildPath: 'src/theme/',
      files: [
        {
          destination: 'primitiveTokens.js',
          format: 'reactNative/js',
          filter: token => token.filePath.includes('primitiveTokens'),
        },
        {
          destination: 'aliasTokens.js',
          format: 'reactNative/js',
          filter: token => token.filePath.includes('aliasTokens'),
        },
        {
          destination: 'componentTokens.js',
          format: 'reactNative/js',
          filter: token => token.filePath.includes('componentTokens'),
        },
        {
          destination: 'tokens.js',
          format: 'reactNative/js',
        },
      ],
    },
  },
};
