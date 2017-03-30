---
layout: post
title: Making a static site with Jekyll and Github Pages
description: Let's make a static website using Jekyll hosted on Github Pages
tags:
  - jekyll
  - github-pages
comments: true
pinned: false
---
[Github Pages](https://pages.github.com/) is one of the best and easiest ways to host static sites online. It can be used to host sites for your Github user/organization or your Github projects. Github pages sites are automatically rendered by Jekyll which makes it great for blogging. You can learn more about Jekyll [here](https://jekyllrb.com/docs/home/).

The easiest way to create your own site is to fork an existing Jekyll site and see how it works. You can find sample sites [here](https://github.com/jekyll/jekyll/wiki/Sites).



### Jekyll directory structure
```
Here is a sample directory structure for a Github Pages site running on Jekyll.
<name-of-github-page-repo>
> _includes
> _layouts
> _posts
> _sass
> assets
> images
> blog
 _config.yml
 .gitignore
 index.html
```

**front-matter**



**includes**
This holds html snippets that you can reuse in your site by calling {% raw %} ```{% name-of-file.html %} {% endraw %}```.

For example, you want to put a footer in specific parts of your site. You can create a _footer.html_ file and just call {% raw %} ```{% footer.html %} {% endraw %}``` in the parts of your site where you want to put the footer.


**layouts**
This holds the layouts for different pages


**posts**


**sass**


**assets**


**images**


**blog**


**config.yml**


**.gitignore**


**index.html**



### Build site locally


#### rvm
RVM (Ruby Version Manager) is a great tool for sandboxing different ruby versions in your machine. Do the following to install it.

```shell
curl -sSL https://get.rvm.io | bash -s stable --ruby
```

Add the following lines to ```.bashrc``` if you encounter the 'rvm is not a function' message
```shell
source $HOME/.rvm/scripts/rvm
```

#### jekyll
