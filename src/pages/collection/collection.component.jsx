import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import {selectCollection} from '../../redux/shop/shop.selector';
import {Route} from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import ItemPreview from '../../components/item-preview/item-preview.component';

const CollectionPage = ({match,collection}) => {
    const {title,items} = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                <Route exact path={`${match.path}`} render={()=>( 
                    items.map(item=> <CollectionItem key={item.id} item={item} />)
                )}/>
                <Route path={`${match.path}/:itemId`} component={ItemPreview} />
            </div>
        </div>
    )
}



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);