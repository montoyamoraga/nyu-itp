#assignment 05
#for class reading and writing electronic text
#at nyu itp taught by allison parrish
#by aaron montoya-moraga
#march 2017

# Assignment #5, due 2017-03-09. Appropriating text from the network. Devise and implement (in Python) a procedure to cut up and creatively re-arrange text. At least one of your texts should come from a network-based source (e.g., Wordnik, the New York Times API, etc.). To consider: How does the presence of data appropriated from the network change the nature of your process and your output?

#my program takes lyrics from genius.com, which i then mix up.

#virtualenv env
#source env/bin/activate
#deactivate

#import sys, random, string, Tkinter module
from os import system
import random
import string
#import Tkinter

#test Tkinter module
#Tkinter._test()

#read files
lyrics = open("./all_songs.txt").read()

#split the texts in lists with all of the words
lyricsList = lyrics.split()

#empty set
lyricsSet = set()

#construct a set of every word in the texts
for word in lyricsList:
    lyricsSet.add(word)

#construct a dictionary with words as keys and number of times in values
lyricsDict = dict()

for word in lyricsList:
    if word in lyricsDict:
        lyricsDict[word] += 1
    else:
        lyricsDict[word] = 1

#iterate as many times as the lenght of lyricsSet
for i in range(len(lyricsSet)):
    #empty string for the current line
    currentLine = ""
    #make a random decision
    word = random.choice(lyricsDict.keys())
    for i in range(lyricsDict[word]):
        currentLine = currentLine + word + " "
    decision = random.randint(1, 100)
    if decision > 90:
        print currentLine
