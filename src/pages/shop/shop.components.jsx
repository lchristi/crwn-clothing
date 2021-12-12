import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

import { Routes, Route } from "react-router";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {  
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />        
        <Route path="/:categoryId" element={<CollectionPage />} />        
      </Routes>
    </div>        
  );
};
const mapStateToProps = createStructuredSelector({
  shopItems: selectCollections
});

export default connect(mapStateToProps) (ShopPage);