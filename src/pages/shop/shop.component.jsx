import React from 'react';

import {Route} from 'react-router-dom';
import ItemPreview from '../../components/item-preview/item-preview.component';
import ColletctionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={ColletctionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        <Route exact path={`${match.path}/:collectionId/:itemId`} component={ItemPreview} />
    </div>
)

export default ShopPage;