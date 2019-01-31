var pdf = require('pdfkit')
var fs = require('fs')

var doc = new pdf({
    size: [380, 1000],  // lebar, tinggi
    margins: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
    },
    layout: 'landscape',  // 'portrait
})
doc.pipe(fs.createWriteStream('./pdf/hasil.pdf'))

doc.fontSize(10).text('Halo!')
doc.fontSize(10).text('Tes 1 2 3!')
doc.text('Selamat datang', {
    width: 150,
    align: 'right'
})

doc.end()