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

#url to be scraped
url = "http://www.senado.cl/prontus_senado/site/edic/base/port/senadores.html"

# read the url address and load it to the html variable
html = urllib.urlopen(url).read()

#parse the html variable with the beautiful soup library
soup = bs4.BeautifulSoup(html, "html.parser")

#select the relevant tag in the html
images = soup.select("div > a > img")

#list to hold the raw data
raw = [];

#populate the raw data with the beautifulsoup4 parsed data
for image in images:
    raw.append(image)
    print image

#print the length of the raw data
print len(raw)
