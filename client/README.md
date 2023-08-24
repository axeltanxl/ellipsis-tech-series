this template combines both mui and tailwindcss

to start set colors in initialSettings
for fonts must change theme.js

by right mui will be the baseline and tailwind will override any conflicting styles


to start db_server
npm run startServer

to start client 
npm run dev

slowness is due to persisting of data by redux persist

    - solution 1. set timeout in persistConfig
        * risk - ui may load before store rehydrate *

    - solution 2. if we dont need persisting of data remove persist and also blacklist data that dont need to be persist or whitelist data that need to be persisted 