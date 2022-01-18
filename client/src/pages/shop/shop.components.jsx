import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = () => {  
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCollectionsStart());    
  }, [dispatch])
       

  
  return (    
      <div className="shop-page">
        <Routes>                    
          <Route path="/" element={ <CollectionsOverviewContainer />} />          
          <Route path="/:categoryId" element={ <CollectionPageContainer />} />
        </Routes>
      </div>       
    );
}

export default ShopPage;
