from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import unittest

driver = webdriver.Firefox()

class FirstTestSuite(unittest.TestCase):
	#login
	def test_official_test(self):

		url = "http://"+host+":"+port+"/gui.html"
		print("running test")
		driver.get(url)
		
		input_box = driver.find_element_by_id("input")
		input_box.clear()
		input_box.send_keys('1,2,3,3,4')
		button = driver.find_element_by_id("filter")
		button.click()
		
		wait = WebDriverWait(driver, 10)
		wait.until(EC.element_to_be_clickable((By.ID, 'output')))
		output_box = driver.find_element_by_id("output")
		output = output_box.get_attribute("value")	
		self.assertEqual("1,16,81,81,256", output)

if __name__ == "__main__":
	unittest.main(warnings='ignore')
