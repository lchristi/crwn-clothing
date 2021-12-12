import { createSelector } from "reselect";

const selectShop = state => state.shop;

//createSelector = Memoization?
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.shopItems
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])

);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
