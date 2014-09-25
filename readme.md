# facebook-scrape[![build status](https://secure.travis-ci.org/micnews/facebook-scrape.svg)](http://travis-ci.org/micnews/facebook-scrape)

Tell facebook to scrape a facebook object (object-url or object-instance-id)

[![NPM](https://nodei.co/npm/facebook-scrape.png?downloads&stars)](https://nodei.co/npm/facebook-scrape/)

[![NPM](https://nodei.co/npm-dl/facebook-scrape.png)](https://nodei.co/npm/facebook-scrape/)

## Usage

```js

var facebookScrape = require('facebook-scrape')

facebookScrape(objectUrlOrObjectId, function (err, json) {
  // err will be an error if the scrape failed
  // json will be the data that json scraped (the values in the og-tags)
})

```

## Installation

```
npm install facebook-scrape
```

## Licence

Copyright (c) 2014 Mic Network, Inc

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
