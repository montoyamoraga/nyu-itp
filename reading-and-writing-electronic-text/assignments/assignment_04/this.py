#assignment 04
#for class reading and writing electronic text
#at nyu itp taught by allison parrish
#by aaron montoya-moraga
#february 2017

#the digital cut-up, part 2. write a program that reads in and creatively re-arranges the content of several source texts. what is the unit of your cut-up technique? (the word, the line, the character? something else?) how does your procedure relate (if at all) to your choice of source text? feel free to build on your assignment from last week. your program must make use of at least one set or dictionary. choose one text that you created with your program to read in class.

#my program takes two texts, lyrics for two different songs (javiera plana's invisible and flaming lips' bad days) and remixes them taking different random words from each of them, producing

#import sys, random and string module
from os import system
import random
import string

# read files
text01 = open("./text_original_01.txt").read()
text02 = open("./text_original_02.txt").read()

#split the texts in lists with all of the words
list01 = text01.split()
list02 = text02.split()

#construct a set of every word in the texts
set01 = set()
set02 = set()

for word in list01:
    set01.add(word)

for word in list02:
    set02.add(word)

#construct a dictionary with words as keys and number of times in values
dict01 = dict()
dict02 = dict()

for word in list01:
    if word in dict01:
        dict01[word] += 1
    else:
        dict01[word] = 1

for word in list02:
    if word in dict02:
        dict02[word] += 1
    else:
        dict02[word] = 1

for i in range(10):
    #empty string for the current line
    currentLine = ""
    #make a random decision
    decision = random.randint(1,2)
    if decision == 1:
        word = random.choice(dict01.keys())
        for i in range(dict01[word]):
            currentLine = currentLine + word + " "
    elif decision == 2:
        word = random.choice(dict02.keys())
        for i in range(dict02[word]):
            currentLine = currentLine + word + " "
    print currentLine
