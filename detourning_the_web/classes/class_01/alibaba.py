# import library beautiful soup
import bs4

# import library to open and download urls
import urllib

url = "http://www.alibaba.com//Hair-Extensions-Wigs_pid100000992"

html = urllib.urlopen(url).read()

soup = bs4.BeautifulSoup(html)

titles = soup.select("h2.title")

for title in titles:
    print title.text.strip()
