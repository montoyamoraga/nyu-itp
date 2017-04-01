#class 03 detourning the web

#create a new environment and stuff
#source env/bin/activate

#import the sys module
import sys

#import selenium module
from selenium import webdriver

#select the chrome driver
driver = webdriver.Chrome()
#driver = webdriver.Firefox

#to set the window size
driver.set_window_size(1200, 800)

#geckodriver is the one for firefox, is its internal rendering engine
#the one of chrome is called webkit

#go to the website
driver.get('http://foxnews.com')

#execute a javascript script
#driver.execute_script("alert(hi)")

#we can also do it with a variable
#we will be using a nice thing in python
#it is a multi-line string
#it is declared with three quotes, either single or double
script = '''
var elements = document.querySelectorAll('h1', 'h2');
for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = arguments[0];
}
'''

#retrieves the list of arguments passed in to python while executing
##example, if you run python one.py two three four hey
##then sys.argv would be the following array
#["one.py", "two", "three", "four" ,"hey"]
#which you can access at will
replacement_text = sys.argv[1]

#and then we execute it by calling the variable
driver.execute_scripts(script, replacement_text)

#to stop for 2 seconds
time.sleep(2)

#to save a screenshot
driver.save_screenshot('lol.png')

#to stop for 2 seconds
time.sleep(2)

#to close the browser window
driver.quit()
