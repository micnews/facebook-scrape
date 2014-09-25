var qs = require('querystring')

  , jsonist = require('jsonist')

  , facebookScrape = function (href, callback) {
      var url = 'https://graph.facebook.com/?' + qs.stringify({ id: href, scrape: 'true' })

      jsonist.post(url, {}, {}, function (err, json, res) {
        if (err) return callback(err)

        if (res.statusCode !== 200) {
          err = new Error(json.error.message)
          err.statusCode = res.statusCode
        }
        callback(err, json)
      })
    }

module.exports = facebookScrape