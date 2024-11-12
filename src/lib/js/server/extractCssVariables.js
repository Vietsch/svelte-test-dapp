import fs from 'fs';
import postcss from 'postcss';
import path from 'path';
import { browser } from '$app/environment';

let getCssVariablesFromFile;

if (!browser) {
  getCssVariablesFromFile = function (filePath = "app.css") {
    const css = fs.readFileSync("src/" + filePath, 'utf-8');
    const root = postcss.parse(css);

    const variables = {};

    // Extract CSS variables
    root.walkDecls(decl => {
      if (decl.prop.startsWith('--')) {
        variables[decl.prop] = decl.value;
      }
    });

    return variables;
  };
} else {
  getCssVariablesFromFile = () => null;
}

export default getCssVariablesFromFile ;