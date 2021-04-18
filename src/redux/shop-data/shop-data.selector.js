import {createSelector} from 'reselect';

const getShopData = state => state.shop_data.SHOP_DATA;

export const shopDataSelector = createSelector(
    [getShopData],
    shopData=>shopData
)