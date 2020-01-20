const { writeFileSync, readFileSync } = require('fs')

const minified = readFileSync('./dist/index.js').toString()

writeFileSync('readme.md', `\`\`\`js\njavascript:${minified}\n\`\`\`\n`)

writeFileSync('docs/index.html', `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Highlight</title>
    <style>
      body {
        margin: 1.5rem;
        font-family: sans-serif;
      }
      a {
        font-size: 1.2rem;
      }
    </style>
  </head>
  <body>
    <a href="javascript:${minified.replace(/"/g, "&quot;")}">Highlight</a>
    <p>
      <span>Click the link above and try selecting </span>
      <span style="background: yellow">some text</span><span>. Double-click again to deselect.</span>
    </p>
    <p>
      <span>To use this on any other website, save the link as a bookmark by </span>
      <span style="background: yellow">dragging it into your bookmark bar</span><span>.</span>
    </p>
    <p><small>Try pressing CTRL + Shift + B if you cannot find a bookmark bar.</small></p>
    <p><small>Please note that this tool is very buggy at this point. But in its very core function, it works. You might want to check back later for updates.</small></p>
    <hr>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, vero magnam obcaecati tempora quae voluptatem fugiat maxime voluptatibus debitis, consectetur odit. Nostrum ipsa doloribus totam omnis enim harum quo labore.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, vero magnam obcaecati tempora quae voluptatem fugiat maxime voluptatibus debitis, consectetur odit. Nostrum ipsa doloribus totam omnis enim harum quo labore.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, vero magnam obcaecati tempora quae voluptatem fugiat maxime voluptatibus debitis, consectetur odit. Nostrum ipsa doloribus totam omnis enim harum quo labore.
    </p>
  </body>
</html>
`)
