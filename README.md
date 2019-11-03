# gatsby-remark-classes

Automatically add class attributes to markdown elements.

This is a plugin for [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=gatsby-transformer-remark).

## Install

```
npm install --save gatsby-remark-classes
```

## Configure

In your `gatsby-config.js`:

```js
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-classes`,
        options: {
          classMap: {
            "heading[depth=1]": "title",
            "heading[depth=2]": "subtitle",
            paragraph: "para",
          }
        }
      }
    ]
  }
}
```

The rules above applied to the following markdown

```markdown
# Main heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, odio.

## Sub header

Lorem ipsum dolor sit amet, consectetur adipisicing.
```

Will result in this HTML output:

```html
<h1 class="title">Main heading</h1>
<p class="para">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, odio.
</p>

<h2 class="subtitle">Sub header</h2>
<p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
```

## The classMap

For supported selectors please please consult [syntax-tree/mdast](https://github.com/syntax-tree/mdast#nodes) for the node list and have a look at the [Support section of unist-util-select](https://github.com/syntax-tree/unist-util-select#support)

## Motivation

Applying custom styles is also possible by just wrapping your converted markdown in a parent element and write the styles for that. This will however not work if you use atomic css in your project or a framework like Semantic UI or Tailwind CSS.

With this project you define which classes get assigned to which element.

## Upgrade guide

When upgrading from version 0.x.x to 1.x.x, you will have to update the selectors in your `gatsby-config.js` file.

Some common selectors:

- `h1` is now `heading[depth=1]`
- `h2` is now `heading[depth=2]`
- `ul` is now `list[ordered=false]`
- `ol` is now `list[ordered=true]`
- `li` is now `listItem`
- `paragraph` is still `paragraph`

Additionally you have now the chance to target child elements `code > pre` or even adjacent elements `paragraph + paragraph`. As stated above, please consult [syntax-tree/mdast](https://github.com/syntax-tree/mdast#nodes) for the node list and [syntax-tree/unist-util-select](https://github.com/syntax-tree/unist-util-select#support) for pseudo selectors and syntax.
