const path = require('path')
const a= path.basename('/foo/bar/baz/asdf/quux.html');
const b = path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(a)
console.log(b)
const c = path.extname(__filename);
console.log(__filename,c)