const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String,
    health:String
}
const Mydata= mongoose.model('cats', schema);

// const kitty = new Mydata({ name1: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
// const kitty1= new Mydata({ name: 'Zil' ,age:1,health:"good"});
// kitty.save().then(() => console.log('new meow'));
Mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})