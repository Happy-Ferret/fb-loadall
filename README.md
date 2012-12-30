Load all older posts and comments in facebook
=============================================

This chrome extension is able to load all comments and older posts on the facebook website

Usage
-----

* Load the image/group/post/news feed where you want to load older comments or posts
* (optional) press 'F5' to reload the page (this frees up memory you might need)
* Use **context menu** => "FB Load All" => your desired action

Installation
------------

- Checkout a copy of this repo
- Navigate to `about:extensions`
- Enable the developer mode
- Click "Load unpacked extension" and point it to the `chrome/` subdirectory (where `manifest.json` resides)

Known issues
------------

- Loading older posts is buggy on timeline pages as of now
- The extension may silently fail if the web page is not loaded completely

Credits
-------

- jQuery: <http://jquery.com>
- underscore.js: <http://underscorejs.org>
- async.js: <https://github.com/caolan/async>
