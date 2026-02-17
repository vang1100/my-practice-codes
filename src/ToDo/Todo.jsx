import { useEffect, useState } from 'react';
import axios from 'axios';


function Todo() {

    const [toggle, setToggle] = useState(true);

    const handleChange = () => {
        return setToggle(!toggle);
    }
    return (
        <>

        To do app practice

        <h1>February Checklist</h1>
        <input></input><button>Submit</button>
        <ul>
            
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