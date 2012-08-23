# jQuery Allocine API library

Provide tools to fetch informations from allocine database

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/tlechauve/jquery.allocine/master/dist/jquery.allocine.min.js
[max]: https://raw.github.com/tlechauve/jquery.allocine/master/dist/jquery.allocine.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.allocine.min.js"></script>
<script>
jQuery(function ($) {
    var movieID = '132874';
    $('body').allocine('getMovie', movieID, {
        success: function (response) {
            // DO awesome stuff with response
        }
    });
});
</script>
```

## Documentation
_(Coming soon)_

## Release History
Version 0.1.0
* New Features: getMovie (get information about a movie), searchMovie (to search movie only)

## License
Copyright (c) 2012 Thomas Lechauve  
Licensed under the MIT, GPL licenses.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

### Important notes
Please don't edit files in the `dist` subdirectory as they are generated via grunt. You'll find source code in the `src` subdirectory!

While grunt can run the included unit tests via PhantomJS, this shouldn't be considered a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in _actual_ browsers.

### Installing grunt
_This assumes you have [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed already._

1. Test that grunt is installed globally by running `grunt --version` at the command-line.
1. If grunt isn't installed globally, run `npm install -g grunt` to install the latest version. _You may need to run `sudo npm install -g grunt`._
1. From the root directory of this project, run `npm install` to install the project's dependencies.
