#randomizer
#by aaron montoya-moraga
#based on code done with wipawe sirikolkarn
#march 2017

#import python modules
import requests
from bs4 import BeautifulSoup
import sys

#setup for genius.com
base_url = "https://api.genius.com"
headers = {'Authorization': 'Bearer we6kb_5L1lJh7zxO9rC30PA7Hli5U-MvFOTSu8d2Kz0ijisxdxKJhc29TV4JiPIw'}

#retrieve artist_name and song_title from command line
artist_name = sys.argv[1]
song_title = sys.argv[2]


def lyrics_from_api(song_path):
	song_url = base_url + song_path
	response = requests.get(song_url, headers=headers)
	json = response.json()
	path = json["response"]["song"]["path"]

	page_url = "http://genius.com" + path
	page = requests.get(page_url)
	html = BeautifulSoup(page.text, "html.parser")
	[h.extract() for h in html('script')]
    #encode utf-8
	lyrics = html.find("lyrics").get_text().encode('utf-8')

	return lyrics

if __name__ == '__main__':
	search_url = base_url + '/search'
	data = {'q': song_title}
	response = requests.get(search_url, data=data, headers=headers)
	json = response.json()
	song_info = None
	for hit in json["response"]["hits"]:
		if hit["result"]["primary_artist"]["name"] == artist_name:
			song_info = hit
			break
	if song_info:
		song_path = song_info["result"]["api_path"]
		print lyrics_from_api(song_path)

with open("all_songs.txt", "a") as outfile:
	outfile.write(lyrics_from_api(song_path))
