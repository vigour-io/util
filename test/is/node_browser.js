'use strict'

var path = require('path')
var test = require('tape')
var Nightmare = require('nightmare')

var port = 8080
var server

test('isNode (browser)', function (t) {
  var browserify = require('browserify')
  var http = require('http')

  server = http.createServer(function (req, res) {
    // console.log(req.method, req.url)
    if (req.url === '/bundle.js') {
      res.setHeader('content-type', 'application/javascript')
      var b = browserify(path.join(__dirname, 'node_browser_main.js')).bundle()
      b.on('error', console.error)
      b.pipe(res)
    } else if (req.url === '/') {
      // res.setHeader('content-type', )
      res.write('<html><body><script type="text/javascript" src="bundle.js"></script></body></html>')
      res.end()
    } else {
      res.writeHead(404, 'not found')
    }
  }).listen(port, function () {
    console.log('server listening on port ' + port)
    var nightmare = Nightmare()
    nightmare
      .goto('http://localhost:' + port + '/')
      .evaluate(function () {
        return window.isNode
      })
      .then(function (isNode) {
        t.equal(isNode, false, 'should be false')
        nightmare.end(function () {
          server.close(function () {
            console.log('server closed')
            t.end()
          })
        })
      })
  })
})
