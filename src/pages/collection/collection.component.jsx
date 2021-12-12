import React from "react";
import { useParams } from "react-router";
import '../collection/collection.styles.scss';

import { connect, useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = () => {          
    let {categoryId} = useParams();
    const collection = useSelector(selectCollection(categoryId))

    const {title, items} = collection;    
    
    return (
        <div className='collection-page'>
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(itemx => <CollectionItem key={itemx.id} item={itemx} />)}
            </div>
        </div>
        );    
}
export default CollectionPage;

// const mapStateToProps = (state, ownProps) => ({                   
//     collection: selectCollection(ownProps)(state)
// });

// export default connect(mapStateToProps)(CollectionPage);