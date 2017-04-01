#import requests and sys python modules
import requests
import sys

#import BeautifulSoup module
from bs4 import BeautifulSoup

def download_file(url):
    local_filename = url.split('/')[-1]
    r = requests.get(url, stream = True)
    with open(local_filename, 'wb') as f:
        for chunk in r.iter_content(chunk_size = 1024):
            if chunk:
                f.write(chunk)
    return local_filename


def search(q):


    querystring = {

    }

    url = "https://www.shutterstock.com/search?search_source=base_landing_page&language=en&image_type=all&searchterm=" + q

    html = requests.get(url).text
    soup = BeautifulSoup(html)

    images = soup.select(".img-wrap img")

    for image in images:
        src = "http:" + image.get('src')
        print src
        #download_file(src)

    search(q, page+1)

#input is whatever the user types after "python shutterstock.py"
search(sys.argv[1])
