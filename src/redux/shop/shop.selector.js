import { createSelector } from "reselect";

const selectShop = state => state.shop;

//createSelector = Memoization?
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.shopItems
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    shopItems => shopItems ? Object.keys(shopItems).map(key => shopItems[key]) : []

);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        shopItems => shopItems[collectionUrlParam]
    )
