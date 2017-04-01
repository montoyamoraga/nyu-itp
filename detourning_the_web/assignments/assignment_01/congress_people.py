#web scraper
#february 2017
#by aaron montoya-moraga

#first install virtualenv on this directory
#pip install virtualenv env

#then initiate the virtualenv with python 2.7
#virtualenv -p python2.7 env

#then install the beautiful soup 4 library
#pip install beautifulsoup4

#here starts the script

#import library beautiful soup
import bs4

#import library to open and download urls
import urllib

import string

#url to be scraped
url = "https://www.camara.cl/camara/diputados.aspx"

# read the url address and load it to the html variable
html = urllib.urlopen(url).read()

#parse the html variable with the beautiful soup library
soup = bs4.BeautifulSoup(html, "html.parser")

#select the relevant tag in the html
congress_people = soup.select("li > div > img")

#print the length of the list
print len(congress_people)

#open new file in write mode
raw_congress = open("congress_people.txt", "w")

#write every element from the list to a new line
for congress_person in congress_people:
    raw_congress.write(str(congress_person) + "\n")

#close the file
raw_congress.close()

#open the file in read mode and load into tuples
format_congress = tuple(open('congress_people.txt', "r"))

#list of image addresses
congress_people_images_addresses = []

#list of congress_people_firstname
congress_people_firstname = []

#go through the tuple
for i in range(len(format_congress)):
    #split the contents wherever there is a space character
    parsed = format_congress[i].split(' ')
    #for every element
    for elt in parsed:
        #if the string has on it the substring "src"
        if "src" in elt:
            #append the address to the list
            #start from the 5th element and end at -1
            #in order to not include src and double quotes
            congress_people_images_addresses.append(elt[5:-1])
        if "alt" in elt:
            congress_people_firstname.append(str(elt[5:]))

#get the base adress for the congress people
base_address = "https://www.camara.cl"

def save_images_to_disk():
    #go through every congress_person and save its picture
    ##with the urllib python library
    for congress_person in range(len(congress_people)):
        urllib.urlretrieve(base_address + congress_people_images_addresses[congress_person], "./congress_people_images/" + str(congress_person) + "_" +  congress_people_firstname[congress_person] + ".jpg")

save_images_to_disk()
