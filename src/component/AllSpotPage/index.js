import React from 'react';
import AutoLoader from '../AutoLoader';

var AllSpotPage=()=>{
    return (
        <div className="all-spot-page">
            <div className="title">
                <h2>全部景點列表</h2>
            </div>
            <div className="list">
                <AutoLoader load_url='https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot'/>
            </div>
        </div>
    )
}

export default AllSpotPage;