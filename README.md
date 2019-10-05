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
            h1: 'title',
            h2: 'subtitle',
            paragraph: 'para'
            blockquote: "blockQuote",
            ol: "orderedList",
            "ol.li": "olItem",
            ul: "unorderedList",
            "ul.li": "ulItem",
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

> Lorem ipsum dolor sit amet, consectetur adipisicing.

- UL a
- UL b
- Ul c

1. OL 1
2. OL 2
3. OL 3
```

Will result in this HTML output:

```html
<h1 class="title">Main heading</h1>
<p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, odio.</p>

<h2 class="subtitle">Sub header</h2>
<p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

<blockquote class="blockQuote">Lorem ipsum dolor sit amet, consectetur adipisicing.</blockquote>

<ul class="unorderedList">
  <li class="ulItem">UL a</li>
  <li class="ulItem">UL b</li>
  <li class="ulItem">UL c</li>
</ul>

<ol class="orderedList">
  <li class="olItem">OL 1</li>
  <li class="olItem">OL 2</li>
  <li class="olItem">OL 3</li>
</ol>
```

## The classMap
Right now you can add styles for **heading** elements (h1 - h6), **paragraphs**, **lists / list items** and **tables**.

## Motivation
Applying custom styles is also possible by just wrapping your converted markdown in a parent element and write the styles for that. This will however not work if you use atomic css in your project or a framework like Semantic UI or Tailwind CSS.

With this project you define which classes get assigned to which element.
