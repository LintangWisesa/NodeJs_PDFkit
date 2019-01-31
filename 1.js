var pdf = require('pdfkit')
var fs = require('fs')

var doc = new pdf
doc.pipe(fs.createWriteStream('./pdf/hasil.pdf'))

doc.fontSize(100).text('Halo!', 50, 50)

doc.end()