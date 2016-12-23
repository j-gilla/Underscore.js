var _ = {};

_.identity = function (value) {
  return value;
};

_.first = function (arr, n) {
  return n ? arr.slice(0, n) : arr.slice(0, 1);
};

_.last = function (arr, n) {
  return n ? arr.slice(arr.length - n, arr.length) : arr.slice(arr.length - 1);
};

_.each = function (list, callback) {

  if (Array.isArray(list)) {

    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list)
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list)
    }
  }
  return list;
};

_.indexOf = function (arr, value) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1
};


_.filter = function (list, predicate) {
  //predicate is a function - if the array passes the truth test return it
  var result = [];
  // checks if true and passes to new result array
  _.each(list, function (element, index, list) {
    if(predicate(element, index, list) ){
      result.push(element);
    }
  });
  return result;
};

_.reject = function (list, predicate) {
  if(!predicate){return list}
  var result =[];

  _.filter(list, function (element) {
    if (!predicate(element)) {
      result.push(element);
    }
  });
  return result;
};

_.uniq = function (list) {
  var result = [];

  if (typeof list === 'string') {
    list = list.split(" ");
  }

  _.each(list, function (element){
    if(_.indexOf(result, element) === -1){
      result.push(element);
    }
  });
  return result;
};

_.map = function (list,  callback) {
  var result = [];
  this.each(list, function (item) {
    result.push(callback (item) );
  });
  return result;
};

_.pluck = function (list, propertyName){
  var result = [];
  for(let i in list){
    if(list.hasOwnProperty(i)){
      result += propertyName + list[i];
    }
  }
return result;
};



console.log(_.pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]))

if (typeof module !== 'undefined') {
  module.exports = _;
}
