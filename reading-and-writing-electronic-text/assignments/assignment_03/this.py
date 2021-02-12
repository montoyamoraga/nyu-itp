#assignment 03
#for class reading and writing electronic text
#at nyu itp taught by allison parrish
#by aaron montoya-moraga
#february 2017

#The digital cut-up, part 1. Create a Python program that reads in a text and stores portions of it in a list. The program should create textual output that creatively rearranges the contents of the text. Use functions from the random module as appropriate. Choose one text that you created with your program to present in class.

#my program takes a song lyric and scrambles the characters of each world in alphabetical order

#import sys, random and string module
from os import system
import random
import string

#string with all of the ascii lowercase letters
letters = string.ascii_lowercase

#blank lists
totalList = []
randomizedList = []

#iterate through every element on the stdin
for line in sys.stdin:
    #strip the content of line out of whitespace at both beginning and end
    line = line.strip()
    # convert to lowercase
    line = line.lower()
    #replace comma with nothing
    line = line.replace(",", "")
    #replace " with nothing
    line = line.replace("\"", "")
    #replace ' with nothing
    line = line.replace("'", "")
    #replace ? with nothing
    line = line.replace("?", "")
    #replace - with spacebar
    line = line.replace("-", " ")
    #split line in a list of the words
    lineList = line.split()
    #append new list to the totaList
    totalList = totalList + lineList

#randomize order of list
random.shuffle(totalList)

lenNewLines = 15

#iterate through the totalList
#build up 10 new lines
for i in range(15):

    #new blank line
    newLine = ""

    #retrieve as many words as needed per line
    totalCount = 0
    while (totalCount < lenNewLines):
        #get randon new word from the list
        newWord = totalList[random.randint(0,len(totalList)-1)]

        #if the word fits, append it
        if (totalCount + len(newWord) <= lenNewLines):
            totalCount = totalCount + len(newWord)
            newLine = newLine + newWord
            newLine = newLine + " "
            totalCount = totalCount + 1

        #if the word does not fit, append as much as you can
        else:
            auxLen = lenNewLines - len(newLine)
            newLine = newLine + newWord[0:auxLen]
            totalCount = totalCount + auxLen

    #append new line to the randomizedList
    randomizedList.append(newLine)


#randomize letters
#shift character to the left or right alphabetically
#iterate through every line
for i in range(len(randomizedList)):

    #retrieve the line
    line = randomizedList[i]

    #new auxLine to hold the modified line
    auxLine = ""

    #iterate through every character of the line
    for j in range(len(line)):

        currentChar = line[j:j+1]

        #check that the current character is not a space
        if (currentChar != " "):
            #retrieve position of the character in letters
            auxIndex = letters.index(currentChar)
            #direction of shift
            direction = random.randint(0,1)
            #modify index according to direction
            if direction == 0:
                auxIndex = auxIndex + 0
            elif direction == 1:
                auxIndex = auxIndex + 1
            #retrieve newChar according to auxIndex
            newChar = letters[auxIndex:auxIndex+1]

        #if the character is a space, keep it
        else:
            newChar = currentChar

        #append new character to the line
        auxLine = auxLine +  newChar

    #print the new line to the console
    print auxLine
