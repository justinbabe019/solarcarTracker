from datetime import datetime
f = open('AstrumLiveTracker/location.txt', 'a')

#reading from mqtt
from paho.mqtt import client as mqtt_client
import ssl


broker = 'wsc23-mqtt-gfgsgb.umsct.net'
port = 1883
topic = 'telems/gps/#'
setSpeedTopic = 'telems/cruise_control/set_speed_kph'
testTopic = '$SYS/#'
testSubTopic1 = '$SYS/broker/load/bytes/received/15min'
testSubTopic2 = '$SYS/broker/load/connections/5min'
client_id = 'mqttx_2d2aa291'
latTopic ='telems/gps/coordinate/latitude'
lngTopic ='telems/gps/coordinate/longitude'

def connect_mqtt() -> mqtt_client:
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)
        client.subscribe([(latTopic,0), (lngTopic,0), (setSpeedTopic,0)])

    client = mqtt_client.Client(client_id)
    # client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client


def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        #writing
        now=datetime.now()
        #print(f"Received `{msg.payload.decode()}` from topic `{msg.topic}`")
        str = msg.payload.decode()
        if msg.topic == latTopic :
            str = str[35: len(str)-1]#get the right format, getting rid of the topic titles
            f.write( str + ", ")
        elif msg.topic ==lngTopic:
            str = str[36: len(str)-1]#get the right format, getting rid of the topic titles
            f.write( str + ", " + now.strftime("%b%d %H:%M:%S") + '\n') 
        elif msg.topic==setSpeedTopic:
            fSpeed = open('AstrumLiveTracker/setSpeed.txt','w')
            fSpeed.write(str[40:len(str)-1])
    client.on_message = on_message


def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()


if __name__ == '__main__':
    run()
