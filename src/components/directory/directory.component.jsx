import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {sectionsSelector} from '../../redux/directory/directory.selector';

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

const mapStateToProps = (state) => {
    console.log("i'm called again");
    return({sections: sectionsSelector(state)})
}

export default connect(mapStateToProps)(Directory);