# Unitex/GramLab website  [![Code Climate](https://codeclimate.com/github/UnitexGramLab/unitexgramlab-org/badges/gpa.svg)](https://codeclimate.com/github/UnitexGramLab/unitexgramlab-org)

> [Unitex/GramLab][unitex] is an open source, cross-platform, multilingual, lexicon- and grammar-based corpus processing suite

This is the repository for the website running at http://unitexgramlab.org. The site is maintained by the Unitex/GramLab [Website Editors Team](https://github.com/UnitexGramLab/unitexgramlab-org/graphs/contributors)

![UnitexGramLab](screenshot.jpg)

## Local Install

To install your own copy of the Unitex/GramLab site, simply follow these steps:

1. [Download Grav](http://getgrav.org/downloads) from the getgrav.org site
2. Extract the ZIP archive into a directory in your webroot (e.g. `~/www/unitexgramlab-org/`)
3. [Download](https://github.com/unitexgramlab/unitexgramlab-org/archive/develop.zip) and extract, or [Clone](https://github.com/unitexgramlab/unitexgramlab-org.git), the **unitexgramlab-org** repository as `~/www/unitexgramlab-org/user/`
4. Run `bin/grav install` from the root (e.g. `~/www/unitexgramlab-org/`)

At this point the required plugins and vendor libraries should be installed, and your local site should be fully functional.

## Contributing

We welcome everyone to contribute to improve this project. Below are some of the things that you can do to contribute:

### Translations

Currently the site is available in [English](http://unitexgramlab.org) and [Spanish](http://unitexgramlab.org/es), more translations are welcome. If you are interested in volunteering to translate email webmaster@unitexgramlab.org and we will contact you. Files to translate are located at:

- [Error page](pages/error)
- [Home page](pages/01.home)
- [Install instructions](pages/01.home/install-instructions)
- [languages.yaml](themes/unitexgramlab/languages.yaml)
- [site.yaml](config/site.yaml)

Note that there are no plans to translate [blog posts](pages/02.blog).

### Posts

If you are interested in volunteering creating a new blog post about Unitex/GramLab and Natural Language Processing, please follow these steps: 

1. [**Fork us**](https://github.com/UnitexGramLab/unitexgramlab-org/fork)

1. **Copy** the directory `pages/02.blog/template-post` to a new location inside `pages/02.blog`:

   ```
   cp pages/02.blog/template-post pages/02.blog/my-new-blog-post-name
   ```   
1. **Edit** the file named `pages/02.blog/my-new-blog-post-name/post.md`. Take care to change the `title`, `date`, `tag`, `author` and `published` attributes. A Markdown tutorial is avalaible [here](http://eherrera.net/markdowntutorial). You can use an online Markdown editor like [Stackedit.io](https://stackedit.io/editor) to review your post before commit.

1. **Commit** your code:
   
   ```
   git commit -m "Add my-new-blog-post-name" pages/02.blog/my-new-blog-post-name
   ```

1. **Push** the changes to your remote repository on GitHub
   
   ```
   git push origin
   ```
   
1. [Request a pull](https://github.com/UnitexGramLab/unitexgramlab-org/pulls) to the [develop branch](https://github.com/UnitexGramLab/unitexgramlab-org/tree/develop).

### Issues

Feel free to submit [bug reports or feature requests](https://github.com/UnitexGramLab/unitexgramlab-org/issues)

## Contributors and Credits

* Developed by [Cristian Martinez](http://martinec.org) and powered by [Grav](http://getgrav.org). A complete list of contributors is avalaible [here](https://github.com/UnitexGramLab/unitexgramlab-org/graphs/contributors). A comprehensive list of credits can be found [here](humans.txt).

---
[unitex]: http://unitexgramlab.org
