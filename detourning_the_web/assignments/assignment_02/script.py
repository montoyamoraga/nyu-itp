#web scraper
#march 2017
#by aaron montoya-moraga

#first install virtualenv
#pip install virtualenv env

#then initiate the virtualenv with python 2.7s
#virtualenv -p python2.7 env

#then install the beautiful soup 4 library
#pip install beautifulsoup4

#here starts the script

#import sys, time, string, random, urllib, bs4, system, pil modules
import os
from os import system
import sys
import time
import string
import bs4
import random
from PIL import Image, ImageDraw, ImageFont

#import selenium module for webscraping
#include webdriver for using chrome and Keys for using keyboard commands
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import urllib

#main function declaration
def download_jessen():

    #new driver using google chrome
    driver = webdriver.Chrome()

    #set the window size of the driver
    driver.set_window_size(1200, 800)

    #variable for going to next page
    isNext = True

    #url to be scraped
    base_url = "https://www.instagram.com/"

    handle = "pepshy_pk/"

    complete_url = base_url + handle

    #go to the url
    driver.get(complete_url)

    #wait for 2 seconds
    time.sleep(2)

    print "retrieve pics"
    x = retrieve_pics(driver)
    #next_pic = driver.find_element_by_css_selector("._ovg3g")
    #next_page.click()
    #catches the exception and breaks the while loop
    #to close the browser window
    driver.quit()

#function for retrieving headline on every page
#gets passed the driver in order to be able to access to its methods
def retrieve_pics(driver):
    #retrieve the titles of each pinera speech on each page
    #images = driver.find_elements_by_css_selector("._ovg3g")

    #images[0].click()
    time.sleep(10)

    #you have 10 seconds to hit on load more!!!!
    print "go to instagram and click on load more plz"

    system("mkdir pics")
    system("cd pics")

    #make all of the images appear
    for i in range(35):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(0.1)
        driver.execute_script("window.scrollTo(0, 0);")
        time.sleep(0.1)

    #find images
    images = driver.find_elements_by_tag_name("img");

    #reset counter
    counter = 0

    #iterate through all of the images
    for image in images:
        imageSrc = image.get_attribute('currentSrc')
        print imageSrc
        #save the images to the pics folder, as counter.png
        urllib.urlretrieve(imageSrc, "./pics/" + str(counter) + ".png")
        counter = counter + 1

    #wait 5 seconds
    time.sleep(5)

    #return and end main
    #im just returning whatever
    return 4

#function for putting shakespare sonnets on top of skylar jessen's instagram pics
#you can choose how many times this happens
def shakespearize(times):
    #load sonnets from hard drive
    sonnets = open("./assets/sonnets.txt").read()
    sonnets = sonnets.split("\n")
    print sonnets

    #sonnets = set()

    prePath = "./pics/"
    pngExtension = ".png"
    jpgExtension = ".jpg"

    fnt = ImageFont.truetype('./assets/Comic_Sans_MS.ttf', 30)

    #iterate through every pic in the folder
    for counter in range(len(os.listdir("./pics")) - 1):
        #build path to pic
        path = prePath + str(counter)
        print path
        #open the image
        img = Image.open(path + pngExtension)
        #canvas element is an instace of ImageDraw
        canvas = ImageDraw.Draw(img)
        for i in range(times):
            #fnt element is an instance of ImageFont
            text = sonnets[random.randint(1,len(sonnets)-1)]
            canvas.text((random.randint(0,300), random.randint(0, 500)), text, fill=(random.randint(0,255), random.randint(0,255), random.randint(0,255)), font=fnt)
        img.save(path + pngExtension)

#call the download_jessen function
download_jessen()

#call the shakespearize function
shakespearize(5)
