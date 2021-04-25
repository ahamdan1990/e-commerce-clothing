import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

// const COLLECTION_ID_MAP = {
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop=> shop.collections
)

//convert our object collections into an array so we can use map function on it to display them 
export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
// memoize does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector:

// (collectionUrlParam) =>
//   createSelector(
//     [selectCollections],
//     (collections) => collections[collectionUrlParam]
//  )
// By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize(collectionUrlParm => 
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParm]
    )
)
