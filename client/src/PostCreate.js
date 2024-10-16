import React, {useState} from 'react';
import axios from 'axios';

export default () => {

    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.prventDefault();

        await axios.post('https://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            </div>
            <label>Title</label>
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)}
                className="form-control"
            />
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
};