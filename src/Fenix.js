
if (typeof XMLHttpRequest === 'undefined') {
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}

if (typeof window !== "undefined" && !window.XMLHttpRequest) // code for IE6, IE5
    XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");


const _fetch = (method, url, data) => {

	let xhr = new XMLHttpRequest();
	let a = [];
	xhr.open(method, url, false);

	return new Promise((resolve, response) => {

		let res = {};
		xhr.onreadystatechange = () => {

		    // Test if request is complete
		    if (xhr.readyState == 4) {

		      // Safari doesn't support xhr.responseType = 'json'
		      // so the response is parsed
		      if (xhr.status>=200 && xhr.status<300) {
		        try {
		          res = JSON.parse(xhr.responseText)
		        } catch (e) {
		          res = null
		        }
		        resolve(res);
		      }
		    }
		};

		xhr.send(data);

	});
	
}


class Fenix {

	constructor(params) {

		let { urlBase, sources } = params;

		urlBase += urlBase.slice(-1) !== "/" ? "/" : "";

		Object.keys(sources).forEach((k) => {

			let m = sources[k].methods;
			m = m==="*" ? ["GET","POST","PUT","DELETE"] : m;

			let methods = {}
			methods.GET    = (id)   => _fetch('GET',    (id) ? `${urlBase}${k}/${id}` : `${urlBase}${k}`);
			methods.POST   = (data) => _fetch('POST',   `${urlBase}${k}/${data.id}`, data);
			methods.PUT    = (data) => _fetch('PUT',    `${urlBase}${k}/${data.id}`, data);
			methods.DELETE = (id)   => _fetch('DELETE', `${urlBase}${k}/${id}`);

			let _ = null;

			if (m.length===0) {
				_ = methods[m[0]];
			} else {
				if (m.indexOf("GET")>-1) {
					m.splice( m.indexOf('GET'), 1 );
				}
				_ = methods.GET;
				m.forEach(k => {
					_[k.toLowerCase()] = methods[k];
				});
			}

			this[k] = _;

		});

	}


}

export default Fenix;