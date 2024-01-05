hash = window.location.hash.substr(1);
var reg = new RegExp('^[0-9]$');
console.log(reg.test(hash));