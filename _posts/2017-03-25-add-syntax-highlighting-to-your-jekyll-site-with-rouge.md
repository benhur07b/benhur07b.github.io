---
layout: post
title: Add Syntax Highlighting to your Jekyll site with Rouge
description: Add color and better readability to your jekyll site with syntax highlighting using rouge
tags:
  - jekyll
  - github-pages
comments: true
---
Syntax highlighting is important (especially for programming blogs) because it improves the readability of posts. It allows readers to quickly locate the code-snippets (which are usually the reason why they visit your page) they need.

[**Rouge**](https://github.com/jneen/rouge) is a pure-ruby syntax highlighter and has been the default highlighter for Jekyll since Jekyll 3 (replacing pygments). You can add syntax highlihting using rouge to your Jekyll site in just a few steps.


### 1. Install the kramdown and rouge gems

Make sure that the **kramdown** and **rouge** (that's rouge *not* rogue) gems are installed.

```shell
gem install kramdown rouge
```


### 2. Edit your *_config.yml* settings.

Add the following lines to your *_config.yml* file if they're not there already.

```
markdown: kramdown

kramdown:
  input: GFM
  syntax_highlighter: rouge
```

If that doesn't work, you can try:
```
markdown: kramdown
highlighter: rouge
```

By experience, my build times when using the first option are usually faster.


### 3. Create a css file for the highlighting style you want

Rouge comes built-in with **rougify**, a command-line tool that converts a style theme to a css file.

You can see the available themes by entering:
```shell
rougify help style
```

As of rouge 1.11.1, the available themes are:

_**base16, base16.dark, base16.monokai, base16.monokai.light, base16.solarized, base16.solarized.dark, colorful, github, gruvbox, gruvbox.light, molokai, monokai, monokai.sublime, thankful_eyes**_

For example, if you want to use the monokai theme, you first create a css file in your css folder using rougify:
```shell
rougify style monokai > /path/to/css/file.css
```

The usual directory for the css files is **assets/css** while the usual name for the css file is **syntax.css** so from your root you can type:
```shell
rougify style monokai > assets/css/syntax.css
```

Then don't forget to include the stylesheet in your HTML template (usually within <head></head>):
```html
<link href="path-to-syntax-highlighter-stylesheet" rel="stylesheet">
```

If you saved the syntax highlighter stylesheet as **assets/css/syntax.css** then you can add the following in your HTML template:
```html
<link href="{{site.baseurl}}/assets/css/syntax.css" rel="stylesheet" >
```


### 4. Add syntax highlighting to your posts

Here's the fun part.

If you're using markdown to create your posts, you can add syntax highlighting by enclosing the code-snippet using three backticks (```). Aditionally, you can set the language of the code snippet after the opening three backticks.

For example, if you want to highlight python code, you can write:

    ```python
    def function():
      print('Yes')
    ```

which will be rendered as:

```python
def function():
  print('Yes')
```

Or maybe you want to highlight a Ruby code-snippet:

    ```ruby
    def function
      puts 'Yes'
    ```

which will be rendered as:

```ruby
def function
  puts 'Yes'
```


You can check what languages are supported by entering:
```shell
rougify list
```


### 5. What if I want to show (```) in my code-blocks?

Let's say you want to show ``` in your code-block like I did in #4 above.

What you need to do is indent the ``` in your markdown file by at least **4** spaces.


```markdown
The line below is indented by at least 4 spaces.

    ```python
    def function():
      print('Yes')
    ```
```
It will then render to:

    ```python
    def function():
      print('Yes')
    ```


### 6. How can I make code-blocks or code-snippets work inside GFM (Github Flavored Markdown) lists?

Codeblocks can sometimes break ordered lists (i.e. the list always returns to 1). To prevent this, you can do the following.


**Case 1: If you won't put a linebreak between the list item and the code-block, have the code-block aligned with the indentation of the line item.**

    1. Number 1
    ```python
    print("Hello World")
    ```

    2. Number 2
    ```ruby
    puts 'Hello World'
    ```

    3. Number 3
    ```c
    printf("Hello World");
    ```

which renders to:

1. Number 1
```python
print("Hello World")
```

2. Number 2
```ruby
puts 'Hello World'
```

3. Number 3
```c
printf("Hello World");
```


**Case 2: If you'll add a linebreak after the line item, have the code-block indented at least 4 spaces from the line item.**


    1. Number 1

        ```python
        print("Hello World")
        ```

    2. Number 2

        ```ruby
        puts 'Hello World'
        ```

    3. Number 3

        ```c
        printf("Hello World");
        ```

which renders to:

1. Number 1

    ```python
    print("Hello World")
    ```
2. Number 2

    ```ruby
    puts 'Hello World'
    ```
3. Number 3

    ```c
    printf("Hello World");
    ```

<br>

And that's all you need to start having syntax highlighting on your Jekyll site using Rouge.

<br>
