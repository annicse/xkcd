# xkcd
Simple xkcd comic fetch with javascript and php

## Description
Fetch a random comic from XKCD comics using the api. Also performs a search.<br>
For fetch I am using : https://xkcd.com/COMIC_ID/info.0.json <br>
For search I am using : https://relevantxkcd.appspot.com/process?action=xkcd&query=SEARCH_QUERY <br>
After search you can go through next and previous comics (one by one) if there are several results.

## Installation
Pull/download the repo and then run <code>npm install</code><br>
I am using <a href="https://laravel.com/docs/8.x/mix">Laravel Mix</a>, a fluent API for defining webpack build steps using several common CSS and JavaScript pre-processors.<br><br>

## Commands for development
<code>npm run watch</code> for watching<br>
<code>npm run dev</code> for dev version<br>
<code>npm run production</code> for watching<br><br>

## Versions
PHP: 7.3.5