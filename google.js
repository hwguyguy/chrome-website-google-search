function removeTracking() {
	document.getElementById('search').querySelectorAll('a').forEach(el => {
		if (el.hasAttribute('onmousedown')) {
			el.removeAttribute('onmousedown')
		}
		if (el.hasAttribute('ping')) {
			el.removeAttribute('ping')
		}
	})
}

if (document.readyState === 'complete') {
	removeTracking()
} else {
	document.addEventListener('readystatechange', e => {
		if (e.target.readyState === 'complete') {
			removeTracking()
		}
	})
}
