  // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    console.log('Data available! Type "people" or "comments" into the console to view available data.');

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    Array.prototype.some = function(age){
      var truthy = true;
      const date = new Date;
      const currentYear = date.getFullYear();
        for(var i = 0; i < this.length; i++){
          if(currentYear - this[i].year >= 19){
            truthy = true;
            break;
          } else {
            truthy = false;
            continue;
          }
        }
        return truthy;
    }


    // Array.prototype.every() // is everyone 19 or older?
    Array.prototype.every = function(age){
      var truthy = true;
      const date = new Date;
      const currentYear = date.getFullYear();
        for(var i = 0; i < this.length; i++){
          if( currentYear - this[i].year >= age && truthy){
            continue;
          } else {
            truthy = false;
            break;
          }
        }
        return truthy;
    }

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    Array.prototype.find = function(key){
      for(var i = 0; i < this.length; i++){
        if(this[i].id === key){
          return this[i];
        } else {
          continue;
        }
      }
      return 'Not Found.'
    }

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    Array.prototype.findIndex = function(key){
      for(var i = 0; i < this.length; i++){
        if(this[i].id === key){
          delete this[i]
          return {message: 'Deleted item with property value of ' + key, data: this};
        } else {
          continue;
        }
      }
      return {'message': 'No match found for '  + key, 'data': this};
    }