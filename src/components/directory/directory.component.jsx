import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    // linkUrl: 'shop/jackets'
                    linkUrl:''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    // linkUrl: 'shop/sneakers'
                    linkUrl:''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    // linkUrl: 'shop/womens'
                    linkUrl:''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    // linkUrl: 'shop/mens'
                    linkUrl:''
                }
            ],
        }
    }

    render() {
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
                    this.state.sections.map(({id, ...otherSectionProps })=>(
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
};

export default Directory;