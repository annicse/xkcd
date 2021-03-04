/**
 * @module Comics
 */

//let request = require('request');

const HOST = "http://xkcd.com/"

const tabTogglers = document.querySelectorAll('[data-tab]');

const Comics = {

	latest : (callback) => {
		fetch('https://cors.x7.workers.dev/https://xkcd.com/614/info.0.json')
			.then(function(response) {
				//return response.text();
				console.log('response');
			})
			.then(function(text) {
				console.log('Request successful', text);
			})
			.catch(function(error) {
				console.log('Request failed', error)
			});
		
	},

	init: () => {
			
	}

};


Comics.latest();