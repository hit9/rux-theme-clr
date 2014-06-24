rux-theme-clr
=============

Another theme for [rux](https://github.com/hit9/rux)

live demo: http://hit9.org/

Usage
-----

```bash
$ cd path/to/myblog
```
clone it or add it a submodule of your blog's repo:

```
git clone git://github.com/hit9/rux-theme-clr.git clr
```
or

```
git submodule add git://github.com/hit9/rux-theme-clr.git clr
```

Set `theme` to `clr`:

```toml
[blog]
theme = "clr"
```


And you may want to add this to `config.toml` (you may need to customize your own):

```toml
[theme]
email_public = true  # optional
github = "your-github-username"  # optional
dribbble = "your-dribbble-username"  # optional
twitter = "your-twitter-username"  # optional
pdf_link = "/out.pdf"  # optional
```

Snapshots
---------

![](screenshot-1.png?v201406242248)

![](screenshot-2.png?v201406242248)


Fonts For PDF Generation
------------------------

Fonts may not be rendered well via wkhtmltopdf, one solution is to install 
theme on your os: [fonts-for-local](fonts-for-local)
