var timeLabelsArray = ['10AM: ','11AM: ','12PM: ', '1PM: ', '2PM: ', '3PM: ', '4PM: ', '5PM: ', 'SUM: ']
var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  randomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  },
  dailyRandomOutput: function(){
    var cookiesArray = [];
    for(i = 0; i < 8; i++){
      var arrayValue = this.randomOutput();
      cookiesArray.push(arrayValue);
    }
    return cookiesArray;
  },
  randomOutputSum: function(){
    var arraySum = this.dailyRandomOutput();
    var sum = 0;
    for(i = 0; i < arraySum.length; i++){
      sum += arraySum[i];
    }
    arraySum.push(sum);
    console.log(arraySum);
    return arraySum;
  },
  renderManipulation: function(){
    var arrSum = this.randomOutputSum();
    var x = document.getElementById('pike_place');
    for(i=0;i<9;i++){
      var el = document.createElement('li');
      var updatedListItem = x.appendChild(el);
      updatedListItem.textContent = timeLabelsArray[i] + arrSum[i];
    };
  }
};
pikePlace.renderManipulation();

var seaTacAirport = {
  min: 6,
  max: 24,
  avg: 1.2,
  randomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  },
  dailyRandomOutput: function(){
    var cookiesArray = [];
    for(i = 0; i < 8; i++){
      var arrayValue = this.randomOutput();
      cookiesArray.push(arrayValue);
    }
    return cookiesArray;
  },
  randomOutputSum: function(){
    var arraySum = this.dailyRandomOutput();
    var sum = 0;
    for(i = 0; i < arraySum.length; i++){
      sum += arraySum[i];
    }
    arraySum.push(sum);
    console.log(arraySum);
    return arraySum;
  },
  renderManipulation: function(){
    var arrSum = this.randomOutputSum();
    var x = document.getElementById('seatac_airport');
    for(i=0;i<9;i++){
      var el = document.createElement('li');
      var updatedListItem = x.appendChild(el);
      updatedListItem.textContent = timeLabelsArray[i] + arrSum[i];
    };
  }
};
seaTacAirport.renderManipulation();

var southcenter = {
  min: 11,
  max: 38,
  avg: 1.9,
  randomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  },
  dailyRandomOutput: function(){
    var cookiesArray = [];
    for(i = 0; i < 8; i++){
      var arrayValue = this.randomOutput();
      cookiesArray.push(arrayValue);
    }
    return cookiesArray;
  },
  randomOutputSum: function(){
    var arraySum = this.dailyRandomOutput();
    var sum = 0;
    for(i = 0; i < arraySum.length; i++){
      sum += arraySum[i];
    }
    arraySum.push(sum);
    console.log(arraySum);
    return arraySum;
  },
  renderManipulation: function(){
    var arrSum = this.randomOutputSum();
    var x = document.getElementById('southcenter');
    for(i=0;i<9;i++){
      var el = document.createElement('li');
      var updatedListItem = x.appendChild(el);
      updatedListItem.textContent = timeLabelsArray[i] + arrSum[i];
    };
  }
};
southcenter.renderManipulation();

var bellevueSquare = {
  min: 20,
  max: 48,
  avg: 3.3,
  randomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  },
  dailyRandomOutput: function(){
    var cookiesArray = [];
    for(i = 0; i < 8; i++){
      var arrayValue = this.randomOutput();
      cookiesArray.push(arrayValue);
    }
    return cookiesArray;
  },
  randomOutputSum: function(){
    var arraySum = this.dailyRandomOutput();
    var sum = 0;
    for(i = 0; i < arraySum.length; i++){
      sum += arraySum[i];
    }
    arraySum.push(sum);
    console.log(arraySum);
    return arraySum;
  },
  renderManipulation: function(){
    var arrSum = this.randomOutputSum();
    var x = document.getElementById('bellevue_square');
    for(i=0;i<9;i++){
      var el = document.createElement('li');
      var updatedListItem = x.appendChild(el);
      updatedListItem.textContent = timeLabelsArray[i] + arrSum[i];
    };
  }
};
bellevueSquare.renderManipulation();

var alki = {
  min: 3,
  max: 24,
  avg: 2.6,
  randomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  },
  dailyRandomOutput: function(){
    var cookiesArray = [];
    for(i = 0; i < 8; i++){
      var arrayValue = this.randomOutput();
      cookiesArray.push(arrayValue);
    }
    return cookiesArray;
  },
  randomOutputSum: function(){
    var arraySum = this.dailyRandomOutput();
    var sum = 0;
    for(i = 0; i < arraySum.length; i++){
      sum += arraySum[i];
    }
    arraySum.push(sum);
    console.log(arraySum);
    return arraySum;
  },
  renderManipulation: function(){
    var arrSum = this.randomOutputSum();
    var x = document.getElementById('alki');
    for(i=0;i<9;i++){
      var el = document.createElement('li');
      var updatedListItem = x.appendChild(el);
      updatedListItem.textContent = timeLabelsArray[i] + arrSum[i];
    };
  }
};
alki.renderManipulation();
