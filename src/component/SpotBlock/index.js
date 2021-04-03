import React from 'react';

var SpotBlock=props=>{
    return (
        <div className="spot-block">
            <div className="header">
                <div className="name">
                    <h3>{props.Name}</h3>
                </div>
                <div className="pic">
                    <img src={props.Picture.PictureUrl1 || ''} alt={props.Picture.PictureDescription1 || ''}/>
                </div>
            </div>
            <div className="content">
                {props.Description || '尚無景點介紹'}
            </div>
        </div>
    )
}

export default SpotBlock;