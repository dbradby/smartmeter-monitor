smartmeter-monitor
==================

A node.js app that displays electricity usage with a [LIFX][3] globe using colour and records power usage into a time series database [InfluxDB][2]. 	

This app has been tested with a [RAVEn][2] USB dongle that connects with a Zigbee smart meter. This has been tested running a Raspberry Pi using Raspbian.

The library to connect to the RAVEn comes from this github repo [node-rave][4]

Usage
-----

Make a copy of `settings-sample.json` and name is `settings.json`. Edit this new file and add the details of your LIFX cloud account and InfluxDB details.

Install dependencies with `npm install` and run `node server.js`

License
-------

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

 [1]: http://rainforestautomation.com/rfa-z106-raven/
 [2]: http://influxdb.com/
 [3]: http://www.lifx.com/
 [4]: https://github.com/stormboy/node-raven





