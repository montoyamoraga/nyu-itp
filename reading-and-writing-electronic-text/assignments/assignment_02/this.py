#assignment 02
#for class reading and writing electronic text
#at nyu itp taught by allison parrish
#by aaron montoya-moraga
#february 2017

#Create a Python program that behaves like a UNIX text processing program (such as cat, grep, tr, etc.). Your program should take text as input (any text, or a particular text of your choosing) and output a version of the text that has been filtered and/or munged. Be creative, insightful, or intentionally banal.
#Choose one text that you created with your program to read in class.
#Bonus: Use the program that you created in tandem with another UNIX command line utility.

#my program takes a song lyric and scrambles the characters of each world in alphabetical order

#import the sys module
import sys

#import PyDictionary module
from PyDictionary import PyDictionary

#create local instance of PyDictionary
dictionary = PyDictionary()

#print dictionary.synonym("indentation")

#iterate through every element on the stdin
for line in sys.stdin:
    #strip the content of line out of whitespace at both beginning and end
    line = line.strip()
    # convert to lowercase
    line = line.lower()
    #replace "kanye" with "myself"
    line = line.replace("kanye", "myself")
    #replace comma with nothing
    line = line.replace(",", "")
    #replace " with nothing
    line = line.replace("\"", "")
    #replace ' with nothing
    line = line.replace("'", "")
    #replace ? with nothing
    line = line.replace("?", "")
    #split line in a list of the words
    words = line.split();

    new_line = ""
    for word in words:
        #new_line = new_line + " " + dictionary.synonym(word)[0]
        if len(dictionary.synonym(word)) > 0:
            new_line = new_line + " " + dictionary.synonym(word)[0]
        else:
            new_line = new_line + " " + word

    print new_line
