import url from 'node:url';


const myURL = new URL('https://google.com');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)