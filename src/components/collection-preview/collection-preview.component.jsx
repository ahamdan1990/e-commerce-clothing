import React from 'react';
import './collection-preview..styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) => {

    // Right now every time the CollectionPreview is Used it will rerender all what we have here so that's why if we check the console log it will have 4 arrays because every time the shop page is using CollectionPreview component in the .map of collections it's rerendering the entire component

    // console.log(items.filter((item,index) => index<4));
    
    return (
        <div className="collection-preview">

            <h1 className="title">{title.toUpperCase()}</h1>

            <div className="preview">
            {/* Here we're using the filter method that returns an array to limit the array items to 4 so and we're doing that by passing index argument which when it will return any item that have index < 4 */}     
                {  
                    items.filter((item,index) => index < 4).map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>

        </div>
    )
}

export default CollectionPreview;