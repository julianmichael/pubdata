# pubdata
Data on publications (authors, links, etc.) for listing on the web in Jekyll sites.

## Usage

* Clone this as a submodule called `pubdata` inside the `_data` directory of your Jekyll site.
* Add the [Jekyll Scholar](https://github.com/inukshuk/jekyll-scholar) plugin to your build.
* Add the following symlinks:
  * `assets/pubdata` -> `_data/pubdata/assets`
  * `_sass/pubdata` -> `_data/pubdata/_sass`
  * `_layouts/bib.html` -> `_data/pubdata/_layouts/bib.html`
  * `_includes/talk.html` -> `_data/pubdata/_includes/talk.html`
* Add the following to your `_config.yml`:
  ```yaml
  scholar:
    source: _data/pubdata/
    bibliography_template: bib
    order: descending,descending
  ```
* Add the following under `excludes:` in your `_config.yml`:
  ```yaml
  - _data/pubdata/_includes
  - _data/pubdata/_layouts
  - _data/pubdata/_sass
  - _data/pubdata/assets
  ```
* When serving your site, run the following command:
  ```bash
  bundle exec jekyll serve 2>&1 | sed '/^        \*\* ERROR: directory/,/^        MORE INFO/d;'
  ```
  This filters out some spurious errors due to [a bug](https://github.com/jekyll/jekyll/issues/6295) in Jekyll's file watcher.

For best results (i.e., I haven't tested with anything else and it'll probably break if you don't do this but feel free to fix it), use with the `minima` Jekyll theme.

This may be better as a Jekyll theme itself, or something, since it would be best to ship with its own assets, styles, layouts, etc., but I should figure out how to do that properly, and the idea is for the user to be able to directly modify and add to the data files too, which doesn't work great with themes, so I think we'll probably just stick with symlinks for now.

You can also of course write your own files instead of symlinking and it should work too.
