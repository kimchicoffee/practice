var fs = require('fs');

fs.readFile('employees.json', function (err, result) {
  if(err) {
    console.log('unable to read employees.json')
  }
  var employees = JSON.parse(result);
})

fs.readFile('projects.json', function () {

})