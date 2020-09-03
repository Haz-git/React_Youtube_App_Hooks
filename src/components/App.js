import React, { useState } from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';

const App = () => {

    const [ ytRequest, setYtRequest ] = useState('');

    const handleApiRequest = (term) => {
        const youtubeRequest = async () => {
            const response = await axios.get('/search', {
                params: {
                    q: term,
                }
            })
            console.log(response.data.items);
            setYtRequest(response.data.items);
        }
    }
    
    return (
        <div>
            <Searchbar requestHandler={handleApiRequest} />
        </div>
    )
}

export default App;