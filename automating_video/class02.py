'''
Control an axis IP camera with python
Manual can be found at: https://www.axis.com/files/manuals/um_p5534_45175_en_1112.pdf
Pan/tilt/zoom api (see page 20): https://www.axis.com/files/manuals/vapix_ptz_52933_en_1307.pdf
'''

import requests
import subprocess

# change the BASE_URL as needed
BASE_URL = 'http://172.22.151.17'
CONTROL_URL = BASE_URL + '/axis-cgi/com/ptz.cgi'
MJPG_URL = BASE_URL + '/mjpg/video.mjpg'
RTSP_URL = (BASE_URL + ':554/axis-media/media.amp').replace('http://', 'rtsp://')

USER = 'root'
PASS = 'enter'

requests.get(CONTROL_URL, {'move': 'left'})
