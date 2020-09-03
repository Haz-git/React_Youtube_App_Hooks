import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';

const App = () => {

    const [ ytRequest, setYtRequest ] = useState([]);

    const handleApiRequest = (term) => {
        const youtubeRequest = async () => {
            const response = await Youtube.get('/search', {
                params: {
                    q: term,
                }
            })

            console.log(response.data.items);
            setYtRequest(response.data.items);
        }

        youtubeRequest();
    }
    
    return (
        <div>
            <Searchbar requestHandler={handleApiRequest} />
            <VideoList ytResponse={ytRequest} />
        </div>
    )
}

export default App;