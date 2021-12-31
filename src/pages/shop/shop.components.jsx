import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Routes, Route } from "react-router";

import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {  
  
  componentDidMount() {    
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }    

  
  render() {    
    const {isCollectionsFetching, isCollectionLoaded} = this.props;
    return (
      <div className="shop-page">
        <Routes>          
          {/* <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={isCollectionsFetching}/>} />         */}
          {/* <Route path="/:categoryId" element={<CollectionsPageWithSpinner isLoading={!isCollectionLoaded} />} /> */}
          <Route path="/" element={ <CollectionsOverviewContainer />} />          
          <Route path="/:categoryId" element={ <CollectionPageContainer />} />
        </Routes>
      </div>       
    )
  }
};
const mapStateToProps = createStructuredSelector({  
 // isCollectionsFetching: selectIsCollectionFetching,
  //isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps) (ShopPage);

//following is much simple to understand how to use HOC using withSpinner


//Following is refined - multiple HOC - to make it cleaner but I find it hard to understand 
// so I am keeping code above
/*

import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {    
  componentDidMount() {    
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }    

  render() {        
    return (
      <div className="shop-page">
        <Routes>          
          <Route path="/" element={<CollectionsOverviewContainer/>} />        
          <Route path="/:categoryId" element={<CollectionPageContainer />} />        
        </Routes>
      </div>       
    )
  }
};
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);

*/