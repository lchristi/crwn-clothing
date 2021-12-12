import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../preview-collection/collection-preview.component";

import './collections-overview.styles.scss'

const CollectionsOverview = ({shopItems}) =>{
  return (
    <div className="shop-page">
      {shopItems.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
shopItems: selectCollectionsForPreview
});

export default connect(mapStateToProps) (CollectionsOverview);