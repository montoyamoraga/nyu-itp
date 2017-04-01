#import modules
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()

driver.get("http://linkedin.com/uas/login")

login = driver.find_element_by_css_selector("#session_key-login")
login.send_keys("lavigne@saaaam.com")

password = driver.find_element_by_css_selector("#session_password-login")
password.send_keys("rudyrudy")

#hit enter
password.send_keys(Keys.RETURN)

time.sleep(3)

search_term = "police"

url = "https://www.linkedin.com/search/results/people/?keywords=" + search_term

driver.get(url)

time.sleep(3)

#hey, this one is elements, not element, so it returns the list, be careful
buttons = driver.find_elements_by_css_selector(".search-result--person button")

buttons[0].click()

send_button = driver.find_elements_by_css_selector('.send-invite__actions button')[-1]

send_button.click()
