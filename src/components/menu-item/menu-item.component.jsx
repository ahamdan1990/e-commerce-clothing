import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
    <div className={`${size?size:''} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image'
            style={
                {
                    'backgroundImage':`url(${imageUrl})`
                }
            }
        />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
);

export default withRouter(MenuItem); // we are wrapping this component with witRouter in order to get access to match, history, path objects from react router