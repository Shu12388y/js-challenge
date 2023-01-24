const franc=reqire('franc')
var langs = require('langs');
const input=process.argv[2]
const lang=franc(input)

const language=lang.where("3",lang)
console.log(language.name)
