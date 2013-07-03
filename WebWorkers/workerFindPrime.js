var version = '1.0'

self.addEventListener('message', handleMessage, false);

function handleMessage (event) {
	n = event.data.value;

	if(isNaN(n) || !isFinite(n)){
		postMessage({errorMessage: 'No es un numero.', value: NaN});
	}

	while(true){
		if(!is12(n)){
			postMessage({errorMessage: 'Numero muy grande', value: NaN});
			break;
		}
		if(isPrime(n)){
			postMessage({value: n});
			break;
		}
		else ++n;
	}
}

function isPrime(n){
	if( n % 1 || n < 2 ) return false;
	if( n == leastFactor(n)) return true;
}

function is12(n){
	return n <= 999999999999;
}

function leastFactor(n){
	if(isNaN(n) || !isFinite(n)) return NaN;
	if(n==0) return 0;
	if(n % 1 || n * n < 2) return 1;
	if(n % 2 == 0) return 2;
	if(n % 3 == 0) return 3;
	if(n % 5 == 0) return 5;
	var q, m  = Math.sqrt(n);
	for (var i = 7 ; i<=m; i+=30){
		if ( ( q = n/i)			==	Math.floor(q) ) return i;
		if ( ( q = n/(i + 4))	==	Math.floor(q) ) return i + 4;
		if ( ( q = n/(i + 6))	==	Math.floor(q) ) return i + 6;
		if ( ( q = n/(i + 10))	==	Math.floor(q) ) return i + 10;
		if ( ( q = n/(i + 12))	==	Math.floor(q) ) return i + 12;
		if ( ( q = n/(i + 16))	==	Math.floor(q) ) return i + 16;
		if ( ( q = n/(i + 22))	==	Math.floor(q) ) return i + 22;
		if ( ( q = n/(i + 24))	==	Math.floor(q) ) return i + 24;
	}
	return n;

}






