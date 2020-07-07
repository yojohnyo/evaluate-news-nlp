# Project Description

Use WebPack to develop a site that will present a text entry box that will apply Natural Language Processing (NPL) to 
the entered text.

I applied the classify API endpoint and gave the user the option to either enter:

  - text such as "The quick brown fox jumps over the lazy dog" which will classify it as related to hunting
  - URL such as http://washingtonpost.com which will classify as related to related to media

## Runing webpack

There are three instances related to webpack:
1. The dev environment which can be built with ``npm run build-dev``
2. The production environment which can be build with ``npm run build-prod``
3. The test environment which can be run with ``npm test``

To start the server, use ``npm start``

This site runs on port 8082 so once you start the server, you need to go to http://localhost:8082

