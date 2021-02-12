#following along allison parrish's class notes

#import system module
import sys

#read file from hard drive
contents = open("./sonnets.txt").read()

#array of the words in the file
words = contents.split()

#dictionary that counts the appeareances of every word
#keys are integers for appearance times
#values are lists with all of the words that are present that amount of time
by_length = dict()

#iterate through every word
for item in words:
    #if the length of the item is in the dictionary
    ##then append the item to the list
    if len(item) in by_length:
        by_length[len(item)].append(item)
    #otherwise, create a new key with that length
    #and the value is a list with just that word
    else:
        by_length[len(item)] = [item]

#part two: read in standard

for line in sys.stdin:
    line = line.strip()
    words = line.split()
    output = []
    for w in words:
        if (len(w))
