


const scriptsInEvents = {

		async списоксобытий1_Event35_Act5(runtime, localVars)
		{
			function getParameterByName1(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return '112834996';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			function getParameterByName2(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return 'BambooPanda';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			var tgId = getParameterByName1('user_id');
			var gameName = getParameterByName2('game')
			
			const dataObject = {
			    telegram_id: tgId ,
			    game: gameName,
			    score: runtime.globalVars.counterRecord,
			    played_time: runtime.gameTime,
			};
			
			fetch('https://gamerooms.uz/api/v1/user/score/',{
			    method:'PUT',
			    headers:{
			    'Content-Type':'application/json'
			    },
			    body:JSON.stringify(dataObject)
			}).then(response=>{
			    return response.json()
			}).then(data=> 
			// this is the data we get after putting our data,
			console.log(data)
			);
		},

		async списоксобытий1_Event36_Act5(runtime, localVars)
		{
			function getParameterByName1(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return '112834996';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			function getParameterByName2(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return 'BambooPanda';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			var tgId = getParameterByName1('user_id');
			var gameName = getParameterByName2('game')
			
			const dataObject = {
			    telegram_id: tgId ,
			    game: gameName,
			    score: runtime.globalVars.counterRecord,
			    played_time: runtime.gameTime,
			};
			
			fetch('https://gamerooms.uz/api/v1/user/score/',{
			    method:'PUT',
			    headers:{
			    'Content-Type':'application/json'
			    },
			    body:JSON.stringify(dataObject)
			}).then(response=>{
			    return response.json()
			}).then(data=> 
			// this is the data we get after putting our data,
			console.log(data)
			);
		},

		async списоксобытий1_Event37_Act5(runtime, localVars)
		{
			function getParameterByName1(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return '112834996';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			function getParameterByName2(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return 'BambooPanda';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			var tgId = getParameterByName1('user_id');
			var gameName = getParameterByName2('game')
			
			const dataObject = {
			    telegram_id: tgId ,
			    game: gameName,
			    score: runtime.globalVars.counterRecord,
			    played_time: runtime.gameTime,
			};
			
			fetch('https://gamerooms.uz/api/v1/user/score/',{
			    method:'PUT',
			    headers:{
			    'Content-Type':'application/json'
			    },
			    body:JSON.stringify(dataObject)
			}).then(response=>{
			    return response.json()
			}).then(data=> 
			// this is the data we get after putting our data,
			console.log(data)
			);
		},

		async списоксобытий1_Event39_Act5(runtime, localVars)
		{
			function getParameterByName1(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return '112834996';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			function getParameterByName2(name, url = window.location.href) {
			    name = name.replace(/[\[\]]/g, '\\$&');
			    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			        results = regex.exec(url);
			    if (!results) return 'BambooPanda';
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
			
			var tgId = getParameterByName1('user_id');
			var gameName = getParameterByName2('game')
			
			const dataObject = {
			    telegram_id: tgId ,
			    game: gameName,
			    score: runtime.globalVars.counterRecord,
			    played_time: runtime.gameTime,
			};
			
			fetch('https://gamerooms.uz/api/v1/user/score/',{
			    method:'PUT',
			    headers:{
			    'Content-Type':'application/json'
			    },
			    body:JSON.stringify(dataObject)
			}).then(response=>{
			    return response.json()
			}).then(data=> 
			// this is the data we get after putting our data,
			console.log(data)
			);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

