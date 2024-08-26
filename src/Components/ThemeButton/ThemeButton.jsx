import React from 'react';

const ThemeButton = ({ name, outlined }) => {

    // console.log(outlined);
    let baseStyles = `btn bg-[#FF3811] text-white hover:bg-red-500 border-[#FF3811] hover:border-[#FF3811]`
    if(outlined === true){
        baseStyles = `btn btn-outline text-[#FF3811]  border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]`
    }
    
        return (
            <button className={`${baseStyles}`}>{name}</button>
        );
};

export default ThemeButton;