var component = require('./modules/mod-a');
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());
