import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

import { Routes, Route } from "react-router";
import CollectionPage from "../collection/collection.component";

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import { UpdateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.styles";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {  
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const {UpdateCollections} = this.props;
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);      
      UpdateCollections(collectionsMap);
      this.setState({loading: false});      
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  // componentDidMount() {    
  //   //https://crwn-db-4a083.firebaseio.com/collections/
  //   fetch('https://firestore.googleapis.com/v1/projects/crwn-db-4a083/databases/(default)/documents/collections')
  //       .then(response => response.json())
  //       .then(collections => {          
  //         const collectionsMap = convertCollectionsSnapshotToMap(collections);      
  //         console.log('shop_api: ' + collectionsMap);
  //         UpdateCollections(collectionsMap);
  //         this.setState({loading: false});
  //       }); 
  // }

  
  render() {    
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Routes>
          {/* <Route path="/" element={<CollectionsOverview />} />         */}
          <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={loading}/>} />        
          <Route path="/:categoryId" element={<CollectionsPageWithSpinner isLoading={loading} />} />        
        </Routes>
      </div>       
    )
  }
};
const mapStateToProps = createStructuredSelector({
  shopItems: selectCollections
});

const mapDispatchToProps = dispatch => ({
  UpdateCollections: collectionsMap => dispatch(UpdateCollections(collectionsMap))
})

export default connect(mapStateToProps, mapDispatchToProps) (ShopPage);