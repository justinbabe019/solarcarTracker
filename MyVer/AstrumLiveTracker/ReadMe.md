# Purpose: 
provide live location of Astrum
# How to use(public):
- GitHub version: <https://ncleong.github.io/AstrumLiveTracker/> (only tracker), play with the buttons and functions
- media version: <https://umsolar.com> (include other contents)
# Buttons/functions explained
- Hide Trace: Any non-newest locations of Astrum will be hidden, so that only the newest/live location of Astrum can be seen
- Show Trace: Show all the (historical) location markers of Astrum
- Hide Checkpoits: All the control stop markers will be hidden
- Show Checkpoints: all the control stop markers will be shown
- Re-Center: Reset zoom and center of map into default settings 
- Zoom to current marker: zoom bigger onto the newset Astrum location
- Click on the most recent marker/location, Distance to the closest CS, and ETA will be shown (based on dist/80)
- Click on any other markers that's not the latest, you can see embed instagram post or story
   - checkpoints posts will be updated daily, same as media's frequency of posting
   - instagram stories will be posted to the marker that has the closest time to that story's time of posting
# How to use(private):
1. Have two Google accoutns, one logged in to phone and one to laptop
2. Share location (permanently) via Google Maps from your phone account to your computer account
3. install all the required python libraries
   - geocoder
   - pyautogui
   - GitPython
   - pyperclip
4. pull the repo from github to local computer
5. Open compiler window and chrome window next to each other
6. copy and paste cli.txt to terminal and run or just type python3 backend.py
# How to maintain(private):
- changing refresh rate: change the time.sleep(seconds) in backend.py
# How it works
The shared location will be shown on GoogleMaps AddressBox in the format of .../@lat, lng/... So the backend.py processes that address and write it to location.csv, push to github. 
> Keep your computer terminal running with chrome in parallel!!!!!!DO NOT MOVE OR CLICK!
