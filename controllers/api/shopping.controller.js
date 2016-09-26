/**
 * Created by fjatori on 9/22/2016.
 */
/**
 * Created by fjatori on 9/22/2016.
 */
var config = require('config.json');
var express = require('express');
var router = express.Router();

module.exports = router;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopping');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

console.log(ObjectId)

var shoppingSchema = new Schema({
    itemId    : ObjectId,
    name      : String,
    price     : Number,
    image     : String
});

//console.log(shoppingSchema);
var items = mongoose.model('items', shoppingSchema);

//console.log(shoppingModel)
var items;
items.find({}, function (err, docs) {
    console.log(docs);
    items = docs;
});

router.get('/', function (req, res) {
    res.send(items);
});