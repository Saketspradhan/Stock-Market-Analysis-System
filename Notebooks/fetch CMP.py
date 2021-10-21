import re
from bs4 import BeautifulSoup
import requests
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/fetchCurrentPrice/<string:stock_name>")
def fetchCurrentPrice(stock_name):
    stock_name = str(stock_name)
    stock_name.replace(" ", "+")

    URL = "https://www.google.com/search?q=" + stock_name + "+share+price"  
    HEADERS = dict({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36', 
                    'Accept-Language': 'en-US, en;q=0.5'})

    webpage = requests.get(URL, headers=HEADERS)
    soup = str(BeautifulSoup(webpage.content, "html.parser"))

    CMP = re.findall(r'jsname="vWLAgc">(.+)</span><span class="knFDje"', soup)[0]
    CMP = str(CMP.replace(",", ""))
    return CMP


if __name__ == "__main__":
    app.run(debug=True)
