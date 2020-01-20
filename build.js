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
  </head>
  <body>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, vero magnam obcaecati tempora quae voluptatem fugiat maxime voluptatibus debitis, consectetur odit. Nostrum ipsa doloribus totam omnis enim harum quo labore.</p>
    <a href="javascript:${minified}">Highlight!</a>
  </body>
</html>
`)
