# import sys library
import sys

# this is a foor loop
#stdin refers to the lines that are input to the program
#typical python styling is indenting with four spaces
for line in sys.stdin:
    #strip() removes whitespace at the end of the line
    #strip() is a method of a line object
    line = line.strip()
    if "you" in line:
        #print prints to the console
        print line

# python follows the pemdas order of precedence
## stands for parenthesis, exponents, multiplication, addition, substraction

#this is a string variable
tofu = "delicious"

#this is for printing it to the screen
#notice that this it doesn't include quotes
print tofu

#to check the length of the string, use len()
print len("ok thx bye")

#operator in has two arguments, one to the left and one to the right
#it returns True if the string on the left can be found on the one to the right
#and False otherwise
print "foo" in "buffoon"
print "foo" in "reginald"

#strings have the method startswith that returns True or False
#if the string on the argument is found on the original string
#it is case-sensitive
print "tofu".startswith("to")
print "tofu".startswith("soy")

#ther is an analog method called endswith, to check for endings
print "tofu".endswith("fu")
print "tofu".endswith("soy")

#the find() method looks for a string inside of another string
#it returns the position in the string where it found the first match
#return -1 if nothing is found
print "tofu".find("u")
print "tofu".find("x")

#the lower() method evaluates to lowercase and upper() to uppercase
#they don't change the original value, they return the evaluated value
#most python functionalities don't affect the original one
#there is also titlecase, with method title()
print "tofu is awesome".lower()
print "tofu is awesome".upper()
print "tofu is awesome".title()

# the strip() method removes at beginning and end
print "         t o f  u   yeah       ".strip()

#the replace method replaces the first argument for the second argument
#in the original string,
print "what up, this is weird weird oh no".replace("i", "o");

#string indexing
#you can access subsets of the strings with [i:j]
#where i and j stand from ith to (j-1)th character
