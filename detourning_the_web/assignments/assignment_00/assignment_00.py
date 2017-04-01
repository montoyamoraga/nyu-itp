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
url = "http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR12.TRC2.A0.H0.Xsaxophones.TRS0&_nkw=saxophones&_sacat=0"

# read the url address and load it to the html variable
html = urllib.urlopen(url).read()

#parse the html variable with the beautiful soup library
soup = bs4.BeautifulSoup(html, "html.parser")

#select the relevant tag in the html
titles = soup.select("h3 > a")

for title in titles:
    print title.text.strip()
