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

    console.log('People Array:');
    console.table(people);

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const atLeastOneOverX = people.some((person) => {
      const currentYear = (new Date).getFullYear();
      return currentYear - person.year >= 19;
    })
    console.log('Is at least one person in the people array over 19?: ' + atLeastOneOverX);


    // Array.prototype.every() // is everyone 19 or older?
    const allOverXAge = people.every((person) => {
      const currentYear = (new Date).getFullYear();
      return currentYear - person.year < 19;
    });
    console.log('Is everyone in the people array over 19?: ' + allOverXAge);



    console.log('\n')
    console.log('Comments Array:');
    console.table(comments);
    console.log('\n')


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const commentEqualsId = comments.find((comment) => {
      return comment.id === 823423 ?  comment  : 'No Match Found'
    });
    console.log('Match Result for comment id of 812423: ');
    console.table(commentEqualsId);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const commentDeleteIndex = comments.findIndex((comment) => {
       return comment.id === 823423       
    });

    const newComments = [
      ...comments.slice(0, commentDeleteIndex),
      ...comments.slice(commentDeleteIndex + 1)
    ]

    console.log('Delete result for comment ID of 812423: ')
    console.table(newComments);