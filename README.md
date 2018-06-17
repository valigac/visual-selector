# visual-selector

Small JavaScript library for easier work with CSS selectors.

## Why?

**From my experience** - I often use CSS to find out
what elements belong to group of tags with class **'box'** (for example)
```
.box {
  background: green;
}
```
CSS offers a lot selectors. Imagine a situation - you want to select the second
li in ul, but you are not sure what selector you should use. So you write one into file,
save that file, refresh browser and nothing happened. Ok, now try another -
write it into file, save that file, refresh browser and it works. Nice, but that was a lot action
to get the right element. **visual-selector** offers easy searching for right selector in your
browser without refreshing or writing some crazy `background: whatever` to find out that you are using
right selector.

##Controls

Include script into your page. On the bottom of the page will be input, where you can write
these commands:

```
selector //any css selector, for example p, [class] etc.
help //to get some help
color #hexcolor //to change color of highlight
hide //to hide highlight
show //to show highlight
```

##TODO

This project is mainly used to learn github. So it is basic, lame
version (which took me about 30 minutes). So this project contains a lot of to do. I have to:

- [] Fix english!
- [] Make better README.md
- [] Make better console
- [] Catch errors
- [] Make a better example page
- [] Rewrite some part of code
- [] stop using word **better** (at least a little)
