import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className='headerContainer'>
            {/* ImageThumbnail not wrapped in div so it will flex by itself */}
            <ImageThumbnail />
            <div>
                <HeaderTitle />
                <HeaderContent />

            </div>
            
            
            

        </div>
    );
};

export default HeaderContainer;