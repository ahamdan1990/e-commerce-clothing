import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

const Directory = ({sections}) => {
        return (
            <div className='directory-menu'>
                {/* {
                    this.state.sections.map(({id,title,imageUrl,size,linkUrl}) => (
                        <MenuItem 
                            key={id}
                            title={title}
                            imageUrl={imageUrl}
                            linkUrl={linkUrl}
                            size={size}
                        />
                    ))
                } */}

                {/* And we cana do the equivalent of the above by simply doing  */}

                {
                    sections.map(({id, ...otherSectionProps })=>(
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
})


export default connect(mapStateToProps)(Directory);