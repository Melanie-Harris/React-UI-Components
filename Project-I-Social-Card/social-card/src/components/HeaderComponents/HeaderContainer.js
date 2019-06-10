import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent'
// import HeaderContent from '.HeaderContent';
// import ImageThumbnail from '.ImageThumbnail';
  
const HeaderContainer = ()=>{
    return(
 <div className='headerContainer'>
            <HeaderTitle />
            <HeaderContent /> 
    {/* <ImageThumbnail />  */}
                     
        </div>
    );
 };

export default HeaderContainer;