/* global describe, it */
var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon');

var _ = require(path.join(__dirname, '..', './lowbar.js'));

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
    it('returns a new array', function (){
      var test = [1,2,3]
      var ans = [3,6,9];
      expect(_.map(test)).to.equal(ans);
    });
  });
});
