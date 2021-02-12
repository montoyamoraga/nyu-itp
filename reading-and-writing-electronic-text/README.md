# itp_reading_and_writing_electronic_text

notes for the nyu itp class

spring 2017 semester

instructor is [allison parrish](http://decontextualize.com)

here is the [syllabus](http://rwet.decontextualize.com)

## class 01

creative writing and programming are in love

python is cool for text processing

contents:
* unix command-line tools
* python: filtering lines of text
* python: build data structures from text
* appropiating web data, web apis
* python: modularity (functions, modules, etc.)
* n-gram analysis, markov chains
* basics of natural language

* creative reading
* oulipo
* conceptual writing: writing that is intended to have emotional effect
* cut-up methods
* poetic forms
* appropriative writing

for this class we will write non-interactive programs:

input stream => program => output stream

the input could come from a user, a web service, sensor, whatever

the output is not constrained to a user interaction

it is a general-purpose approach

cool commands on the terminal:

cut takes two options with two arguments, -d is the delimiter and -f is the search field

```
$ cut -d ' ' -f 1
```

tr stands for translate and takes the matches of the first argument and overwrites them with the second argument

```
$ tr aeiou eioua
```

for using a file as a in input, use the operator < as in

```
$ tr aeiou eioua < filename.txt
```

to take content from a webpage and output it as standard output
```
$ curl -s http://some.url/
```

### assignment 01

as original text i used salvador allende's last speech: [allende_original.txt](https://raw.githubusercontent.com/montoyamoraga/itp_reading_and_writing_electronic_text/master/assignments/allende_original.txt)

i parsed it from the internet and then manipulated it with the following script: [assignment01.txt](https://raw.githubusercontent.com/montoyamoraga/itp_reading_and_writing_electronic_text/master/assignments/assignment_01.txt)

and here is the final output: [allende_final.txt](https://raw.githubusercontent.com/montoyamoraga/itp_reading_and_writing_electronic_text/master/assignments/allende_final.txt)

i filtered the text to make a list of unique words, then sorted it alphabetically and mashed every word with another random word from the same list, in order to produce random pairs of words but also for it to have a certain cadence given by the alphabetically ordered first word of each verse.

## class 02

## class 03

## class 04

## class 05

* [calque](https://en.wikipedia.org/wiki/Calque)
* [morphology](https://en.wikipedia.org/wiki/Morphology_(linguistics))
* [code-switching](https://en.wikipedia.org/wiki/Code-switching)



## class 06

## class 07

## class 08

## class 09

## class 10

## class 11

## class 12

## class 13

## class 14
