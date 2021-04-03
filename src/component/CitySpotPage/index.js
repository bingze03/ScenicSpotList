import React from 'react';
import AutoLoader from '../AutoLoader';
import citys from '../../citys.json';

var CitySpotPage=props=>{
    let {city}=props.match.params;
    
    return (
        <div className="city-spot-page">
            <div className="title">
                <h2>{citys[city]}景點列表</h2>
            </div>
            <div className="list">
                <AutoLoader load_url={'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'+city}/>
            </div>
        </div>
    )
}

export default CitySpotPage;