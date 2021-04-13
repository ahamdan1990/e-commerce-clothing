import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import {Link} from 'react-router-dom';

export const HomePage = () => (
    <div className='homepage'>
        <Directory />
        {/* <Link to='/hats'>Hat</Link> */}
    </div>
)

// export default HomePage;