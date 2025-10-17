function Practice () {

    console.log('this is the Practice.jsx file');

    // let myItems = ['journal', 'laptop', 'headphones', 'coffee mug', 'phone'];

    // console.log(myItems);

    //     let myItems = ['journal', 'headphones', 'coffee mug', 'phone'];

       


    // for ( let item of myItems) {
        
    //     if (item === 'laptop')
    //         return console.log(' grab your laptop it is time for coding day!');

    //     else {
    //         return console.log('take a rest today');
    //     }

            
    // }

    let ages = [18, 25, 34, 43]
    
    for (let age of ages) {

        if (age < 15 )

            return console.log('need parents');
        
        else {

            console.log('okay to enter haunted house');
        }
    }

    const myStuff = [
        {
            item: 'laptop',
            color: 'white'
        },

        {
            item: 'couch',
            color: 'blue'
        },

        {
            item: 'shirt',
            color: 'white'
        }
    ];

    for (let stuff in myStuff) {
        console.log("The" + " " + myStuff[stuff].item + " "+ "is the color" + " " + myStuff[stuff].color + ".");
    }

    let numbers = [3, 9, 10, 15, 19, 20, 32, 37];

    for (let number of numbers) {

        if ( number === 32) {

            console.log('found my age');

        } else  {

            console.log('no age');
        }


    }

    let oddNum = [];
    let evenNum = [];

    for (let i of numbers) {
        if ( i % 2 !==0) {
            oddNum.push(i);
        } else if ( i % 2 == 0) {
            evenNum.push(i);
        }
    }

    console.log('these are the even numbers', evenNum);


//    console.log(0+10);

//    console.log(10+20);


let randomNum = [1, 23, 1, 46, 9, 1];

let index = 0;



while ( index < randomNum.length) {

    if (randomNum[index] === 1) {

        randomNum.splice(index, 1);
    

    } else {

         index++;

    }

   
}

 console.log('new array without 1s', randomNum);


 let rats = [

    {
        object: 1,
        infected: 'yes'
    },

    {
        object: 2,
        infected: 'yes'

    },
     
    {
        object: 3,
        infected: 'no'

    },

    {
        object: 4,
        infected: 'n/a'
    }
 ];

let infected = [];
 let uninfected = [];
 let noStatus = [];

 let i = 0;

 
//  while ( i < rats.length) {
//     if (rats[i] === 'i');
//  }


while ( i < rats.length) {

        if (rats[i].infected === 'yes') {

              let infectedRats = rats.splice(i, 1);

              console.log(infectedRats);
        }

    i++;
}



    return (
        <div>

            PRACTICE
        </div>
    )
}

export default Practice;