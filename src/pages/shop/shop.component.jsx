import React from 'react';

import {Route} from 'react-router-dom';

import ColletctionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={ColletctionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage;