var express = require('express')
var pdf = require('pdfkit')
var fs = require('fs')
var app = express()

app.use('/pdf', express.static('pdf'))

app.get('/pdf', (req, res)=>{
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
    doc.pipe(fs.createWriteStream('./pdf/express.pdf'))
    
    var teks = 'Ini variabel x'
    doc.text(teks)
    doc.image('./img/1.png', 80, 100, {width: 150})
    doc.moveTo(50, 260).lineTo(400, 260).stroke()
    doc.end()

    res.send('PDF sukses dibuat!')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234!')
})

