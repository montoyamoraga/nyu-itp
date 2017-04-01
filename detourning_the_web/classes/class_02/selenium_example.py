import time

from selenium import webdriver

#open firefox browser
#driver = webdriver.Firefox()
driver = webdriver.Chrome()
#driver = webdriver.PhantomJS()

#url to be accessed
url = "http://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=high+quality+drugs"

def get_page():

    time.sleep(2)

    #returns the elements with the selector
    titles = driver.find_elements_by_css_selector('h2.title')

    #print every title
    for title in titles:
        print title.text

    #returns the first element it finds with the selector
    driver.find_element_by_css_selector('a.next').click()

    #recursion
    get_page()

#go to the url
driver.get(url)

#call the function
get_page()

#quit the browser
driver.quit()
