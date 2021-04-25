import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';


const CollectionPage = ({collection}) => {
    const {title,items,routeName} = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
                Object.keys(items).map(key=>items[key]).map(item=> <CollectionItem key={item.id} routeName={routeName} item={item} />)
            }
            </div>
        </div>
    )
}



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);