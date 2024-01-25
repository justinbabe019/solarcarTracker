#----GET LOC W STARLINK ADDRESS


import socket
import requests
from ip2geotools.databases.noncommercial import DbIpCity
from geopy.distance import distance

comp = socket.gethostname()
IPAddr = socket.gethostbyname(comp)

import geocoder
g = geocoder.ipinfo('me')
print(f"my current location: {g.latlng}")

def printDetails(ip):
    res = DbIpCity.get(ip, api_key="free")
    print(f"IP Address: {res.ip_address}")
    print(f"IP Address of router: {res.ip_address}")
    print(f"Location: {res.city}, {res.region}, {res.country}")
    print(f"Coordinates: (Lat: {res.latitude}, Lng: {res.longitude})")

#update to github

from git import Repo
import os
PATH = "https://github.com/justinbabe019/SolarCarLiveTracker.git"
PATH2 = 'git@github.com:ncleong/SolarCarLiveTracker.git'
COMMITMSG = 'location update'

def git_push():
    try: 
        print("before repo")
        repo = Repo(url=PATH2)
        #repo = Repo(self.rorepo.working_tree_dir)
        print("REPO SET")
        #grab repo w latest data from origin
        origin = repo.remote("origin")
        assert origin.exists()
        #origin.fetch()
        print("REPO STAT: "+ repo.bare)
        repo.git.add(update=True)
        #commit
        repo.index.add("./location.txt")
        repo.git.push("--set-upstream", origin, repo.head.ref)
        "https://{}/pull/new/{}".format(PATH, "main")
        repo.index.commit(COMMITMSG)
        origin.push()
        print("done uploading to github")
    except:
        print('Some error occured while pushing the code')    

#try to use google maps location sharing instead
#open google maps
import pyautogui 
import pyperclip
import time
import json
from datetime import datetime
f = open('location.txt', 'a')
time.sleep(5)
pyautogui.hotkey('command','l')
time.sleep(2)
pyautogui.hotkey('command','l')
pyautogui.hotkey('command','c')
webAddr = pyperclip.paste()
webAddrAt = webAddr.split("@",1)
print(webAddr)
myLoc = webAddrAt[1].split(",",2)
print(myLoc)
now=datetime.now()
f.write(myLoc[0]+","+myLoc[1]+", "+now.strftime("%b%d %H:%M")+'\n') 
time.sleep(5)
pyautogui.hotkey('command','r')
git_push()
time.sleep(5)
