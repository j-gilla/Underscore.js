/* global describe, it */
var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon');

var _ = require(path.join(__dirname, '..', './lowbar.js'));



// Test Object
var objOne = {one: 1, two: 'two'};
var objTwo = {three: 'three', four: 4};
var objThree = {name: 'Jack', age: 27, location: 'Kent'};
var objFour = {name: 'David', age: 70, location: 'Mars'};




describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });

  describe('#identity', function () {
    it('is a function', function () {
      expect(_.identity).to.be.a('function');
    });
    it('takes one argument', function () {
      expect(_.identity.length).to.equal(1);
    });
    it('returns the arg passed', function () {
      var test = 'value';
      expect(_.identity(test)).to.equal('value');
    });
  });

  describe('#first', function () {
    it('is a function', function () {
      expect(_.first).to.be.a('function');
    });
    it('takes two arguments', function () {
      expect(_.first.length).to.equal(2);
    });
    it('returns the first element of the array', function () {
      var test = [1, 2, 3];
      expect(_.first(test)).to.eql([1]);
    });
    it('returns n index if given', function () {
      var test = [1, 2, 3, 4];
      var n = 1;
      expect(_.first(test, n)).to.eql([1]);
    });
  });

  describe('#last', function () {
    it('is a function', function () {
      expect(_.first).to.be.a('function');
    });
    it('takes two arguments', function () {
      expect(_.last.length).to.equal(2);
    });
    it('returns the last element of the array', function () {
      var test = [1, 2, 3];
      expect(_.last(test)).to.eql([3]);
    });
    it('returns the n the element of the array', function () {
      var test = [1, 2, 3];
      var n = [2];
      expect(_.last(test, n)).to.eql([2, 3])
    });
  });

  describe('#each', function () {
    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    it('takes two argument', function () {
      expect(_.each.length).to.equal(2);
    });
    it('callback for array to take list[i],i,list', function () {
      var array = [];
      var iteratee = function (num) {
        var sum = (num + sum);
        return sum;
      };
      expect(_.each(array, iteratee)).to.equal(array)
    });
    it('calls the callback function the correct number of times', function () {
      var array = [1, 2, 3];
      var spy = sinon.spy();
      _.each(array, spy);
      expect(spy.called).to.equal(true);
    });
  });

  describe('#indexOf', function () {
    it('is a function', function () {
      expect(_.indexOf).to.be.a('function');
    });
    it('takes two args', function () {
      expect(_.indexOf.length).to.equal(2);
    });
    it('returns a the correct index if found', function () {
      var arr = [1, 2, 3, 4];
      expect(_.indexOf(arr, 2)).to.equal(1);
    });
    it('returns -1 if index is not found', function () {
      var arr = [1, 2, 3, 4];
      expect(_.indexOf(arr, 10)).to.equal(-1);
    });
  });

  describe('#filter', function () {
    it('is a function', function () {
      expect(_.filter).to.be.a('function');
    });
    it('takes two args', function () {
      expect(_.filter.length).to.equal(2);
    });
    it('returns the correct elements of an array', function () {
      var list = [1, 2, 3, 4, 5, 6];
      var predicate = function (number) {
        return number % 2 == 0
      };
      expect(_.filter(list, predicate)).to.eql([2, 4, 6]);
    });
    it('returns the correct element of an object', function () {
      var list = {name: 'jack', age: 27, languages: 'javascript'};
      var predicate = function (value, key, list) {
        return key === 'name'
      };
      expect(_.filter(list, predicate)).to.eql(['jack']);
    });
  });

  describe('#reject', function () {
    it('is a function' , function () {
      expect(_.reject).to.be.a('function');
    });
    it('takes two arguments',function () {
      expect(_.reject.length).to.equal(2);
    });
    it('rejects the correct elements of an array', function () {
      var list = [1, 2, 3, 4, 5, 6];
      var predicate = function (number) {
        return number % 2 == 0
      };
      expect(_.reject(list, predicate)).to.eql([1,3, 5]);
    });
    it('rejects the correct element of an object', function () {
      var list = {name: 'jack', age: 27, languages: 'javascript'};
      var predicate = function (value, key, list) {
        return value === 'jack';
      };
      expect(_.reject(list, predicate)).to.eql([27,'javascript']);
    });
  });

  describe('#uniq', function () {
    it('is a function', function (){
      expect(_.uniq).to.be.a('function');
    });
    it('takes one arguments', function (){
      expect(_.uniq.length).to.equal(1);
    });
    it('return an array', function (){
      expect(_.uniq()).to.eql([]);
    });
    it('returns correct answer', function () {
      var test = [1,1,1,2,3];
      var ans = [1,2,3];
      expect(_.uniq(test)).to.eql(ans);
    });
  });

  describe('#map', function () {
    it('is a function', function (){
      expect(_.map).to.be.a('function');
    });
    it('takes two arguments', function (){
      expect(_.map.length).to.equal(2);
    });
    it('return an array', function (){
      expect(_.map()).to.eql([]);
    });
    it('callback is called by each item in list', function () {
      var testArr = [1,2,3];
      var testFunc = function (item) {
        return item;
      };
      var spy = sinon.spy(testFunc);
      _.map(testArr, spy);
      expect(spy.called).to.equal(true);
      expect(spy.callCount).to.equal(3);
    });
    it('passes each value into callback', function () {
      var testArr = [1,2,3];
      var testFunc = function (item) {
        return item;
      };
      var spy = sinon.spy(testFunc);
      _.map(testArr, spy);
      var callOne = spy.getCall(0);
      var callTwo = spy.getCall(1);
      var callThree = spy.getCall(2);
      expect(callOne.args[0]).to.equal(1);
      expect(callTwo.args[0]).to.equal(2);
      expect(callThree.args[0]).to.equal(3);
    });
    it('each is called on each item', function () {
      var testObj = {name: 'Elton', age: 55, location: 'Mars'};
      var testFunc = function (item) {
        return item;
      };
      var spy = sinon.spy(testFunc);
      _.map(testObj, spy);
      expect(spy.called).to.equal(true);
      expect(spy.callCount).to.equal(3);
    });
    it('passes each value of object into callback', function () {
      var testObj = {name: 'Elton', age: 55, location: 'Mars'};
      var testFunc = function (item) {
        return item;
      };
      var spy  = sinon.spy(testFunc);
      _.map(testObj, spy);
      var callOne = spy.getCall(0);
      var callTwo = spy.getCall(1);
      var callThree = spy.getCall(2);
      expect(callOne.args[0]).to.equal('Elton');
      expect(callTwo.args[0]).to.equal(55);
      expect(callThree.args[0]).to.equal('Mars');
    });
    it('creates a new array when passed an array', function () {
      var testArr = [1,2,3];
      expect(_.map(testArr, _.identity)).to.eql([1,2,3]);
      expect(_.map(testArr, function (x) {
        return x + 1;
      })).to.eql([2,3,4]);
    });
    it('creates a new array when passed an object', function () {
      var testObj = {name: 'Elton', age: 55, location: 'Mars'};
      expect(_.map(testObj,_.identity)).to.eql(['Elton', 55, 'Mars']);
      expect(_.map('jack',function (x) {
        return x.toUpperCase();
      })).to.eql(['J','A','C','K']);
    });
    it('returns an array of correct booleans', function () {
      var boolArr = [true,true,false];
      expect(_.map(boolArr, _.identity)).to.eql([true,true,false]);
      expect(_.map(boolArr, function (x) {
        return !x;
      })).to.eql([false,false,true]);
    });
  });

  describe('#pluck', function () {
    it('is a function', function () {
      expect(_.pluck).to.be.a('function');
    });
    it('takes two arguments', function () {
      expect(_.pluck.length).to.equal(2);
    });
    it('returns an array', function () {
      expect(_.pluck()).to.eql([]);
    });
    describe('if only one argument (list) and', function () {
      describe('if list is a', function () {
        describe('number or boolean', function () {
          it('returns empty array', function () {
            expect(_.pluck(1)).to.eql([]);
            expect(_.pluck(true)).to.eql([]);
          });
        });
        describe('string, object or an array', function () {
          it('returns an array with undefined values for each value of the object, string or array.', function () {
            expect(_.pluck([1, 2, 3])).to.eql([undefined, undefined, undefined]);
            expect(_.pluck('cat')).to.eql([undefined, undefined, undefined]);
            expect(_.pluck(objThree)).to.eql([undefined, undefined, undefined]);
          });
        });
      });
    });
    describe('if two arguments', function () {
      it('returns an array with values equal to values in list corresponding to key, or undefined if key has no value', function () {
        expect(_.pluck([objThree, objFour], 'name')).to.eql(['Jack', 'Dave']);
        expect(_.pluck([objThree, objFour], 'location')).to.eql(['Manchester', 'Sheffield']);
        expect(_.pluck([objThree, objFour], 'email')).to.eql([undefined, undefined]);
        expect(_.pluck({Jack: objThree, Dave: objFour}, 'name')).to.eql(['Jack', 'Dave']);
        expect(_.pluck(['cat', 'dog', 'frog'], 0)).to.eql(['c', 'd', 'f']);
        expect(_.pluck(['cat', 'dog', 'frog'], 3)).to.eql([undefined, undefined, 'g']);
        expect(_.pluck([[1, 2], [2, 3]], 0)).to.eql([1, 2]);
      });
    });
  });
  });

  describe('#contains', function () {
    it('is a function', function () {
      expect(_.contains.to.be.a('function');
    });
    it('takes two arguments', function () {
      expect(_.contains.length).to.equal(2);
    });
    describe('if it takes single argument', function () {
      it('returns false', function () {
        expect(_.contains(()).to.equal(false);
        expect(_.contains((3423)).to.equal(false);
        expect(_.contains(('sasd')).to.equal(false);
        expect(_.contains((true)).to.equal(false);
        expect(_.contains((false)).to.equal(false);
      });
    });
  });
});
