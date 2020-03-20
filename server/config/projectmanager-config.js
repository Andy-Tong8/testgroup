const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projectmanager', {useNewUrlParser: true, useUnifiedTopology:true});
mongoose.set('useCreateIndex', true);