# visual-selector

A small JavaScript library, which helps you with choosing right CSS selectors and finding HTML elements in your webpage.

## How?

Include **visual_selector.js**

`<script src="../visual_selector.js"></script>`

at the bottom of your page will be input, where you can use these commands:

```
selector_name //any css selector (for example: p, [class] etc.)
help //to get some help
color #hexcolor //to change color of a highlight
hide //to hide the highlight
show //to show the highlight
```

## Why?

Two reasons...

**From my experience** - I often use CSS to find out what elements belong to a group of tags with class **'box'** (for example)

```
.box {
  background: green;
}
```

CSS offers a lot selectors. Imagine a situation - you are not a CSS master. You want to select the second
li in ul. So you write one selector in your file, save that file, refresh browser and... nothing happened.
Ok, now try another and another until it is correct. That is a lot of action for getting right element.
**visual-selector** offers easy searching for right selectors in your browser without refreshing or
writing some crazy `background: whatever`.

## TODO

I have created this project to learn github. I have published basic version. Thus I can use git commands very often and make it better. I have to:

- [x] Fix English! (more or less)
- [x] Improve README.md
- [ ] Make a better console
- [x] Improve example page
- [x] Stop using **better** so often (more or less, now I am using 'improve' too)
- [ ] Catch errors
- [ ] Z-index fix
- [ ] Rewrite some parts
