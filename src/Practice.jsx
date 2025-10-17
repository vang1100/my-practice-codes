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

    let numbers = [0, 3, 9, 10, 15, 19, 20, 37];

    

//    console.log(0+10);

//    console.log(10+20);

    return (
        <div>

            PRACTICE
        </div>
    )
}

export default Practice;