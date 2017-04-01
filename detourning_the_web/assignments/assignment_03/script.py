# about
# cool title
# by aaron montoya-moraga
# final for class detourning the web
# taught by sam lavigne at nyu itp
# march 2017

# requirements
# runs on python 2.7 on a macbook pro

# installation

# createa virtualenv called env
# virtual env

# activate it
# source env/bin/activate

# here you can work on stuff
# when ready, deactivate environment
# deactivate

# running
# run it with
# python script.py

# reference

# guide for installation based ond
# http://docs.python-guide.org/en/latest/dev/virtualenvs/

# tkinter reference
# https://docs.python.org/2/library/tkinter.html
# http://effbot.org/tkinterbook

# script

# import Tkinter library
from Tkinter import *

#import libraries
import os
from os import system
import sys
import time
import string
import random
from PIL import Image, ImageDraw, ImageFont

# import selenium module for webscraping
# include webdriver for using chrome and Keys for using keyboard commands
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import urllib

handle = None

# main function declaration


def download_pics(handle):

    # new driver using google chrome
    driver = webdriver.Chrome()

    # set the window size of the driver
    driver.set_window_size(1200, 800)

    # variable for going to next page
    isNext = True

    # url to be scraped
    base_url = "https://www.instagram.com/"

    complete_url = base_url + handle

    # go to the url
    driver.get(complete_url)

    # wait for 2 seconds
    time.sleep(2)

    print "retrieve pics"
    x = retrieve_pics(driver)
    #next_pic = driver.find_element_by_css_selector("._ovg3g")
    # next_page.click()
    # catches the exception and breaks the while loop
    # to close the browser window
    driver.quit()

# function for retrieving headline on every page
# gets passed the driver in order to be able to access to its methods


def retrieve_pics(driver):
    # retrieve the titles of each pinera speech on each page
    #images = driver.find_elements_by_css_selector("._ovg3g")

    # images[0].click()
    time.sleep(10)

    # you have 10 seconds to hit on load more!!!!
    print "go to instagram and click on load more plz"

    system("mkdir pics")
    system("cd pics")

    # make all of the images appear
    for i in range(35):
        driver.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(0.1)
        driver.execute_script("window.scrollTo(0, 0);")
        time.sleep(0.1)

    # find images
    images = driver.find_elements_by_tag_name("img")

    # reset counter
    counter = 0

    # iterate through all of the images
    for image in images:
        imageSrc = image.get_attribute('currentSrc')
        print imageSrc
        # save the images to the pics folder, as counter.png
        urllib.urlretrieve(imageSrc, "./pics/" + str(counter) + ".png")
        counter = counter + 1

    # wait 5 seconds
    time.sleep(5)

    # return and end main
    # im just returning whatever
    return 4

# function for putting shakespare sonnets on top of skylar jessen's instagram pics
# you can choose how many times this happens


def shakespearize(times):
    # load sonnets from hard drive
    sonnets = open("./assets/sonnets.txt").read()
    sonnets = sonnets.split("\n")
    print sonnets

    #sonnets = set()

    prePath = "./pics/"
    pngExtension = ".png"
    jpgExtension = ".jpg"

    fnt = ImageFont.truetype('./assets/Comic_Sans_MS.ttf', 30)
    

    # iterate through every pic in the folder
    for counter in range(len(os.listdir("./pics")) - 1):
        # build path to pic
        path = prePath + str(counter)
        print path
        # open the image
        img = Image.open(path + pngExtension)
        # canvas element is an instace of ImageDraw
        canvas = ImageDraw.Draw(img)
        for i in range(times):
            # fnt element is an instance of ImageFont
            text = sonnets[random.randint(1, len(sonnets) - 1)]
            canvas.text((random.randint(0, 300), random.randint(0, 500)), text, fill=(
                random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)), font=fnt)
        img.save(path + pngExtension)

# call the download_jessen function
# download_pics("skylarjessen")

# call the shakespearize function
# shakespearize(5)

# class definition of app


class App:
    # constructor method
    # is called with a parent widget named master
    def __init__(self, master):

        # create a Frame widget
        # it is a simple container to hold other widgets
        frame = Frame(master)

        # pack the frame to make it visible
        frame.pack()

        # create a Button widget
        # its parent is frame
        # its text is quit
        # its command is quitting
        self.exitButton = Button(
            frame, text="quit", command=frame.quit
        )
        # pack it to make it visible
        self.exitButton.pack(side=RIGHT)

        # create a Button widget
        # its parent is frame
        # its text is quit
        # its command is quitting
        self.shakespearizeButton = Button(
            frame, text="shakespearize", command=self.shakespearize
        )
        # pack it to make it visible
        self.shakespearizeButton.pack(side=RIGHT)

        # create a Button widget
        # its parent is frame
        # its text is hey
        # its command is the function self.scrape
        self.scrapeButton = Button(
            frame, text="scrape", command=self.scrape
        )
        # pack it to make it visible
        self.scrapeButton.pack(side=RIGHT)

        # create an Entry widget
        self.handleEntry = Entry(frame)
        # pack it to make it visible
        self.handleEntry.pack(side=RIGHT)

    # definition of the scrapefunction
    def scrape(self):
        # retrieve handle from the handleEntry widget
        handle = self.handleEntry.get()
        # call to the download_pics function
        download_pics(handle)

    # definition of the shakespearize function
    def shakespearize(self):
        shakespearize(5)



# create a Tk root widget
# create just one root widget for each program
# must be created before any other widgets
root = Tk()

#assign title to the window
root.title("scraper and shakespearizer")

# instantiate the app and set root as parent
app = App(root)

# window won't appear unitl we enter
# the Tkinter event loop
root.mainloop()

# optional
root.destroy()
