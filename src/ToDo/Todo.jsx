import { useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';

function Todo() {

    const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

    const [toggle, setToggle] = useState(true);

    const [item, setItem] = useState([]);

    const [addItem, setAddItem] = useState('');

    useEffect (() => {
        fetchItems();
    }, []);

    // function for complete button
    // const handleChange = () => {
    //     return setToggle(!toggle);
    // }

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

    const deleteItem = (itemId) => {
        console.log('testing delete item button');

        axios.delete(`http://localhost:5001/api/todo/${itemId}`)
            .then((response) => {
                console.log(response);
                fetchItems();
            })
            .catch((error) =>{
                console.log(error)
            })
    }

    // function to ADD items

    const postItem = (event) => {
        event.preventDefault();

        const newItem = {

            item: addItem
        }

        axios.post('http://localhost:5001/api/todo', newItem)
            .then((response) => {
                console.log(response);

                setAddItem('');
                
                fetchItems();
            })
            .catch((error) =>
            console.log(error))
    }

    // function to PUT aka EDIT items




    return (
        <>

        To do app practice

         {/* <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div> */}

        <h1>March Checklist</h1>

        <form onSubmit={postItem}>

            <input id="item-input"
            value={addItem}                                   
            onChange={(event) => setAddItem(event.target.value)}
            
            />

            <button type="submit">Add Item</button>

        </form>

        <ul>

{/* add checkbox */}

            {item.map(
                function(item) {
                    return (
                        <li key={item.id}>

                            <Checkbox/>
                            {item.item} 
                           
                            <button onClick={ () => deleteItem(item.id)}>Delete</button>

                        </li>
                    )
                }
            )}

            
            {/* <li>Item One</li> 
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
                 */}

        </ul>
        
        </>
    )
}

export default Todo;