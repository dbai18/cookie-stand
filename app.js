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
    console.log(cookiesArray);
    return cookiesArray;
  },
  randomOutputSum: function(){
    var arraySum = this.dailyRandomOutput();
    var sum = 0;
    for(i = 0; i < arraySum.length; i++){
      sum += arraySum[i];
    }
    console.log(sum);
    arraySum.push(sum);
    console.log(arraySum);
  }
};

var seaTacAirport = {
  min: 6,
  max: 24,
  avg: 1.2,
  dailyRandomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  }
};

var southcenter = {
  min: 11,
  max: 38,
  avg: 1.9,
  dailyRandomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  }
};

var bellevueSquare = {
  min: 20,
  max: 48,
  avg: 3.3,
  dailyRandomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min + 1)) + this.min) * this.avg);
  }
};

var alki = {
  min: 3,
  max: 24,
  avg: 2.6,
  dailyRandomOutput: function(){
    return Math.floor(((Math.random()*(this.max - this.min)) + this.min) * this.avg);
  }
};
