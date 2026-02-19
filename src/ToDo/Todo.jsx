import { useEffect, useState } from 'react';
import axios from 'axios';


function Todo() {

    const [toggle, setToggle] = useState(true);

    const [item, setItem] = useState([]);

    useEffect (() => {
        fetchItems();
    }, []);

    // function for complete button
    const handleChange = () => {
        return setToggle(!toggle);
    }

    // function to GET items

    const fetchItems = () => {

        //axios

        axios.get('http://localhost:5001/api/todo')
        .then((response) => {
            console.log('this is axios get', response.data);
            setItem(response.data);
        })
        .catch((error) => {
            console.log('whats the error', error);
        })

    }

    // function to DELETE items

    // function to ADD  items

    // function to PUT aka EDIT items




    return (
        <>

        To do app practice

        <h1>February Checklist</h1>
        <input></input><button>Submit</button>
        <ul>

            {JSON.stringify(item)}
            
            <li>Item One</li> 
                <button 
                    style={{backgroundColor: 'yellow'}}
                >
                    Delete
                </button> 

                <button onClick={() => handleChange()}
                        style={{ backgroundColor: toggle ? 'red' : 'green' }}
                    >
                    {toggle ? 'Incomplete' : 'Completed'}
                </button>
                
            <li>Item Two</li> 
                <button>Delete</button> 
                 <button>Incomplete</button>
                

        </ul>
        
        </>
    )
}

export default Todo;