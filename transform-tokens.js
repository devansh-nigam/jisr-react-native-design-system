const fs = require('fs');
const path = require('path');

// Read the tokens file
const tokensFile = path.join(__dirname, 'tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensFile, 'utf8'));

// Transform the JSON structure to match Style Dictionary's expected format
const transformedTokens = {
  primitiveTokens: tokens.primitiveTokens,
  aliasTokens: tokens.aliasTokens,
  componentTokens: tokens.componentTokens,
};

// Write the transformed tokens back to disk
fs.writeFileSync(
  path.join(__dirname, 'tokens.json'),
  JSON.stringify(transformedTokens, null, 2),
);

console.log('Tokens transformed successfully!');
