var http = require('http')

  , localtunnel = require('localtunnel')
  , test = require('tape')

  , scrape = require('./facebook-scrape')

  , server = http.createServer()

  , externalUrl
  , port
  , tunnel

test('setup', function (t) {
  server.listen(0, function () {
    port = server.address().port

    tunnel = localtunnel(port, function (err, tunnel) {
      if (err) return t.end(err)

      externalUrl = tunnel.url + '/' + Math.random()
      t.end()
    })
  })
})

test('scrape a new object', function (t) {
  var onrequest = function (req, res) {
        res.write([
              '<meta property="og:title" content="Test title" />'
            , '<meta property="og:site_name" content="site name" />'
            , '<meta property="og:url" content="' + externalUrl + '" />'
            , '<meta property="og:description" content="This is who I am" />'
          ].join('\n')
        )
        res.end()
      }

  // must have this in a on, cause fb can do multiple request for a single operation
  server.on('request', onrequest)

  scrape(externalUrl, function (err, json) {
    server.removeListener('request', onrequest)
    t.error(err)
    if (json) {
      t.equal(json.title, 'Test title')
      t.equal(json.site_name, 'site name')
      t.equal(json.url, externalUrl)
      t.equal(json.description, 'This is who I am')
    }
    t.end()
  })
})

test('rescrape same object', function (t) {
  var onrequest = function (req, res) {
        res.write([
              '<meta property="og:title" content="New title" />'
            , '<meta property="og:site_name" content="New site name" />'
            , '<meta property="og:url" content="' + externalUrl + '" />'
            , '<meta property="og:description" content="This is still who I am" />'
          ].join('\n')
        )
        res.end()
      }

  // must have this in a on, cause fb can do multiple request for a single operation
  server.on('request', onrequest)

  scrape(externalUrl, function (err, json) {
    server.removeListener('request', onrequest)
    t.error(err)
    if (json) {
      t.equal(json.title, 'New title')
      t.equal(json.site_name, 'New site name')
      t.equal(json.url, externalUrl)
      t.equal(json.description, 'This is still who I am')
    }
    t.end()
  })
})

test('scrape an object with missing must-have property', function (t) {
  var onrequest = function (req, res) {
        res.end()
      }

  // must have this in a on, cause fb can do multiple request for a single operation
  server.on('request', onrequest)

  scrape(externalUrl, function (err, json) {
    server.removeListener('request', onrequest)
    t.ok(err)
    if (err) {
      t.equal(err.statusCode, 500)
    }
    t.end()
  })
})

test('shutdown', function (t) {
  server.close()
  tunnel.close()
  t.end()
})