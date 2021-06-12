import React from 'react';
 
// if we're using the styled component we don't need the scss file anymoer 

// import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

import {HomePageContainer} from './homepage.styles';
import { firestore,convertDirectoryCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import {updateSections} from '../../redux/directory/directory.action';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const DirectoryContainer = WithSpinner(Directory);

class HomePage extends React.Component {
    state={
        loading:true
    }
    // here in the below we can use useEffect as a componentWillUnmout as well as below :

    // useEffect(()=>{
    //     const unsubscribeFromSnapshot = firestore.collection('directory').onSnapshot( snapshot => {
    //         const collectionMap = convertDirectoryCollectionSnapshotToMap(snapshot);
    //         updateSections(collectionMap);
    //     })
    //     return () => { // it's a function that useEffect will fire up when the component will unmout
    //         unsubscribeFromSnapshot();
    //     }
    // },[])

    // it will be the same as the below but using useEffect() instead of using componentDidMout() and componentWillUnmout() lifeCycle methods

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateSections} = this.props;
        const collectionRef = firestore.collection('directory');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
            const collectionMap = convertDirectoryCollectionSnapshotToMap(snapshot);
            updateSections(collectionMap);
            this.setState({loading:false});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }
    
    render() {
        const {loading} =this.state;
        return (
            <HomePageContainer>
                <DirectoryContainer isLoading={loading} />
            </HomePageContainer>
        )
    }

} 

const mapDispatchToProps = dispatch => ({
    updateSections: collectionMap => dispatch(updateSections(collectionMap)),
})

export default connect(null,mapDispatchToProps)(HomePage);