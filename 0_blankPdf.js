var pdf = require('pdfkit')
var fs = require('fs')

var doc = new pdf
doc.pipe(fs.createWriteStream('hasil.pdf'))
doc.end()