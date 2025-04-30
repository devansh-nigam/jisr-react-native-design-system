const StyleDictionary = require('style-dictionary');
const config = require('./config.js');

console.log('Building your design tokens for React Native...');

// Execute style dictionary build based on the config
StyleDictionary.extend(config).buildAllPlatforms();

console.log('\n✅ Tokens generated successfully!');
