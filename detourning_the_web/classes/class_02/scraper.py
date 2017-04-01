import time

import requests

#import library beautiful soup
from bs4 import BeautifulSoup

#import library to open and download urls
import urllib

def get_total_pages(url, pageNumber = 1):
    html = requests.get(url + str(pageNumber)).text
    soup = BeautifulSoup(html, 'html.parser')
    #get the last button, to get total pages
    total_pages = soup.select('.page-button')[-1].text;
    #drop the comma in order to be able to go from string to integer
    total_pages = total_pages.replace(',','')
    total_pages = int(total_pages)
    return total_pages

#definition of the get_reviews number
#you can assign default values by assigning values in the arguments
def get_reviews(url, pageNumber = 1):
    html = requests.get(url + str(pageNumber)).text
    soup = BeautifulSoup(html, 'html.parser')
    reviews = soup.select('span.review-text');

    for review in reviews:
        print review.text

def get_title_and_stars(url, pageNumber = 1):
    html = requests.get(url + str(pageNumber)).text
    soup = BeautifulSoup(html, 'html.parser')

    reviews = soup.select('.review')
    for review in reviews:
        title = review.select('.review-title')[0].text
        body = review.select('.review-text')[0].text
        stars = review.select('.review-star-rating')[0].text
        print title, stars

base_url =" https://www.amazon.com/Silicone-Oven-Mitts-Commercial-Resistant/product-reviews/B00WUDQ61W/ref=cm_cr_arp_d_paging_btm_next_2?ie=UTF8&reviewerType=avp_only_reviews&pageNumber="

total_pages = get_total_pages(base_url)

for pagenumber in range(1, total_pages):
    get_reviews(base_url, pagenumber)
    time.sleep(0.2)

#what is a regular expression
