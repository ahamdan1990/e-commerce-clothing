import React, {useEffect} from 'react';

import {Route} from 'react-router-dom';
import ItemPreviewContainer from '../../components/item-preview/item-preview.container';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { connect } from 'react-redux';

import {/*fetchCollectionsStartAsync,*/fetchCollectionStart} from '../../redux/shop/shop.actions';

// import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';



// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import { createStructuredSelector } from 'reselect';
// import { selectIsCollectionLoaded} from '../../redux/shop/shop.selector';

//defining new component with the Higher order component withSpinner that we created in order to load spinner in case the data didn't came back yet

// const ColletctionOverviewWithSpinner = WithSpinner(ColletctionOverview);

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// const CollectionItemWithSpinner = WithSpinner(ItemPreview);

// class ShopPage extends React.Component {

//     // state = {
//     //     loading: true
//     // }
//     //we're defining a variable here because we know that we're going to be subscribing to some reference.

//     // unsubscribeFromSnapshot = null;
    
//     componentDidMount() {

        
//         //Using thunk middleware

//         // const {fetchCollectionsStartAsync} = this.props;
//         // fetchCollectionsStartAsync();

//         //using saga middleware

//         const {fetchCollectionStart} = this.props;
//         fetchCollectionStart();
//         // Directly from firebase

//         // const {updateCollections} = this.props;
//         // const collectionRef = firestore.collection('collections');

//         // Using Observable onSnapshot and observer method which will gets updated live whenver the data changes into the observables live stream

//         // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=> {
//         //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         //     updateCollections(collectionsMap);
//         //     this.setState({loading:false})
//         // })

//         // using Promises to get the colletctions but with this method we're going to update our data only when this component renrender
        
//         // collectionRef.get().then(snapshot=> {
//         //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         //     updateCollections(collectionsMap);
//         //     this.setState({loading:false})
//         // })

//         // Using fetch Patterns
//         // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-45f8a/databases/(default)/documents/collections')
//         // .then(resp => resp.json())
//         // .then(collections => console.log(collections))
        
//     }

//     // componentWillUnmount() {
//     //     this.unsubscribeFromSnapshot();
//     // }

//     render() {
//         const {match} = this.props;
//         // const {loading} = this.state;
//         return (
//             <div className="shop-page">
//             {/* without the loading spinner  */}
//                 {/* <Route exact path={`${match.path}`} component={ColletctionOverview} />
//                 <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
//                 <Route exact path={`${match.path}/:collectionId/:itemId`} component={ItemPreview} /> */}

//             {/* with the loading spinner  */}

//                 <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />

                
//                 <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} /> 

//                 <Route exact path={`${match.path}/:collectionId/:itemId`} component={ItemPreviewContainer} />
//             </div>
//         );
//     };

// };

const ShopPage = ({fetchCollectionStart,match}) => {
    
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart])

    return (
        <div className="shop-page">
        {/* without the loading spinner  */}
            {/* <Route exact path={`${match.path}`} component={ColletctionOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            <Route exact path={`${match.path}/:collectionId/:itemId`} component={ItemPreview} /> */}

        {/* with the loading spinner  */}

            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />

            
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} /> 

            <Route exact path={`${match.path}/:collectionId/:itemId`} component={ItemPreviewContainer} />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})


export default connect(null,mapDispatchToProps)(ShopPage);