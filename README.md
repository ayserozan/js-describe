# describe

Generate descriptive statistics of given array.

Descriptive statistics include those that summarize the min, max value, number of array, central tendency (mean, median), standart deviation and 1 and 3. quantile.

## Installation

```sh
$ npm i js-describe
```

## Usage

```js
const describe = require("describe");
const [count, mean, std, min, firstQuantile, median, thirdQuantile, max] =
  describe([1, 2, 3, 4]);
/* This should give:  count  4
                        mean   2.5
                        std    1.118033988749895
                        min    1
                        25%    1.5
                        50%    2.5
                        75%    3.5
                        max    4*/
```

# LICENSE

MIT License

Copyright (c) 2022 Ayse Aydogdu Erozan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
