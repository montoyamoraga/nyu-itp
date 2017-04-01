# itp_detourning_the_web

taught by [sam lavigne](http://lav.io/)
here is the [syllabus](https://github.com/antiboredom/detourning-the-web)

detournement is the practice of "hijacking" cultural or artistic materials and reusing them to produce new works that both counter and explicate the original intent or ideology of the source material.

in this class students will learn how to scrape massive quantities of material from the internet with python, and then use that material to make satirical, critical and political projects.

each week we will cover a different web scraping technique, with production assignments relating to text, image and video.

* find good source material
* figure out how to parse it, from unstructured to structured
* figure out a way to present it to the world

## class 01

### html basics

```html
<tagname> some content </tagname>

<p> i'm a paragraph </p>

<a> i'm a link </a>

<tagname attributename="somevalue"></tagname>
```

the attributes we will concentrate on will be id and class

the id is unique, two different elements cannot have the same id

classes can be shared between elements

hashtag is for styling ids, dot is for styling classes.

in javascript, for grabbing elements on the webpage, like list items (li), do:

```javascript
document.querySelectorAll("li");
```

to access the headings on the nytimes.com website, use h2.story-heading:
```javascript
var headings = document.querySelectorAll("h2.story-heading");
```

to access their text content, use the textContent attribute, such as:

```javascript
for (var i =0; i < headings.length; i++) {
    console.log(headings[i].textContent);
}
```

## class 02

selenium
webscraping
stuff

## class 03



## class 04

## class 05

## class 06

## class 07
