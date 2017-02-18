// var timeLabelsArray = ['10AM: ','11AM: ','12PM: ', '1PM: ', '2PM: ', '3PM: ', '4PM: ', '5PM: ', 'SUM: ']

function Store(storeName, min, max, avg){
  this.storeName = storeName;
  this.min = min;
  this.max = max;
  this.avg = avg;
}
Store.prototype.randomOutput = function () {
  return Math.floor(((Math.random() * (this.max - this.min + 1)) + this.min) * this.avg);
};
Store.prototype.dailyRandomOutput = function () {
  var cookiesArray = [];
  for(i = 0; i < 8; i++){
    var arrayValue = this.randomOutput();
    cookiesArray.push(arrayValue);
  }
  return cookiesArray;
};

Store.prototype.randomOutputSum = function(){
  var arraySum = this.dailyRandomOutput();
  var sum = 0;
  for(i = 0; i < arraySum.length; i++){
    sum += arraySum[i];
  }
  arraySum.push(sum);
  console.log(arraySum);
  return arraySum;
};
Store.prototype.storeLabel = function(){
  var el = document.getElementById('name');
  var tableRowElement = document.createElement('tr');
  var updateTableRow = el.appendChild(tableRowElement);
  updateTableRow.textContent = this.storeName;
};
Store.prototype.renderTable = function(){
  var outputArr = this.randomOutputSum();
  console.log(outputArr);
  for(i = 0; i < outputArr.length; i++){
    var el = document.getElementById('index' + i);
    var tableRowElement = document.createElement('tr');
    var updateTableRow = el.appendChild(tableRowElement);
    updateTableRow.textContent = outputArr[i];
  }
};
Store.prototype.callMethods = function () {
  this.randomOutput();
  this.dailyRandomOutput();
  this.randomOutputSum();
  this.storeLabel();
  this.renderTable();
};
var pikePlace = new Store ('Pike Place', 17, 88, 5.2);
pikePlace.callMethods();

var seaTacAirport = new Store ('SeaTac Airport', 6, 24, 1.2);
seaTacAirport.callMethods();

var southcenter = new Store ('Southcenter', 11, 38, 1.9);
southcenter.callMethods();

var bellevueSquare = new Store ('Bellevue Square', 20, 48, 3.3);
bellevueSquare.callMethods();

var alki = new Store ('Alki', 3, 24, 2.6);
alki.callMethods();

function storeFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  var storeName = event.target.storeName.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;
  var newStore = new Store(storeName, min, max, avg);
  newStore.callMethods();
  event.target.storeName.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
};
var submitForm = document.getElementById('input_form');
submitForm.addEventListener('submit', storeFormSubmit);
