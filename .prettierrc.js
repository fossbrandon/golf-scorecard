module.exports = {
  // The following configuration includes options provided by Prettier.
  // Prettier will reference settings specified within this file and the editorconfig.
  // More info: https://prettier.io/docs/en/configuration.html

  // Specify the line length that the printer will wrap on.
  // Overrides max_line_length from the .editorconfig file.
  // More info: https://prettier.io/docs/en/options.html#print-width
  printWidth: 100,

  // Specify the number of spaces per indentation-level.
  // Overrides indent_size or tab_width from the .editorconfig file.
  // More info: https://prettier.io/docs/en/options.html#tab-width
  tabWidth: 2,

  // Indent with spaces instead of tabs.
  // Overrides indent_style from the .editorconfig file.
  // More info: https://prettier.io/docs/en/options.html#tabs
  useTabs: false,

  // Print semicolons at the ends of statements.
  // More info: https://prettier.io/docs/en/options.html#semicolons
  semi: true,

  // Prefer to use double quotes.
  // More info: https://prettier.io/docs/en/options.html#quotes
  singleQuote: false,

  // Only add quotes around object parameters when required.
  // More info: https://prettier.io/docs/en/options.html#quote-props
  quoteProps: "as-needed",

  // Prefer to use double quotes in JSX.
  // More info: https://prettier.io/docs/en/options.html#jsx-quotes
  jsxSingleQuote: false,

  // Print trailing commas where valid in ES5.
  // More info: https://prettier.io/docs/en/options.html#trailing-commas
  trailingComma: "es5",

  // Print spaces between brackets in object literals.
  // More info: https://prettier.io/docs/en/options.html#bracket-spacing
  bracketSpacing: true,

  // Put the `>` of a multi-line HTML element alone on the next line.
  // More info: https://prettier.io/docs/en/options.html#bracket-line
  bracketSameLine: false,

  // Include parentheses around a sole arrow function parameter.
  // More info: https://prettier.io/docs/en/options.html#arrow-function-parentheses
  arrowParens: "always",

  // Wrap markdown prose if it exceeds the print width.
  // More info: https://prettier.io/docs/en/options.html#prose-wrap
  proseWrap: "always",

  // Maintain `lf` line endings.
  // More info: https://prettier.io/docs/en/options.html#end-of-line
  endOfLine: "lf",

  // Allow formatting quoted code embedded in the file.
  // More info: https://prettier.io/docs/en/options.html#embedded-language-formatting
  embeddedLanguageFormatting: "auto",
};
