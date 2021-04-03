import React from 'react';
import {NavLink} from 'react-router-dom';
import citys from '../../citys.json';

export default class SideDrawer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            menu_show:false,
            city_show:false,
            city_options:[]
        }
        this.toggleMenuShow=this.toggleMenuShow.bind(this);
        this.toggleCityShow=this.toggleCityShow.bind(this);
    }

    componentDidMount(){
        let city_options=Object.entries(citys).map(
            entry=>React.createElement(NavLink,{to: '/scenicSpot/'+entry[0], className: 'link', activeClassName: 'selected'}, entry[1])
        );
        this.setState({city_options:city_options});
    }

    toggleMenuShow(){
        this.setState({menu_show:!this.state.menu_show});
    }

    toggleCityShow(){
        this.setState({city_show:!this.state.city_show});
    }

    render(){
        return (
        <div className={"side-drawer"+(this.state.menu_show?' open':'')}>
            <div className="toggle-btn" onClick={this.toggleMenuShow}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="30px" height="30px" viewBox="0 0 124 124" style={{fill:'white'}}>
                    <g>
                        <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
                        <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
                        <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
                    </g>
                </svg>
            </div>
            <div className={"nav-options"+(this.state.menu_show?'':' invisible')}>
                <NavLink to='/scenicSpot' exact className='link' activeClassName='selected'>全部景點</NavLink>
                <div className="sub-option" onMouseEnter={this.toggleCityShow} onMouseLeave={this.toggleCityShow}>
                    <span>縣市景點</span>
                    <div className={'options'+(this.state.city_show?' show':'')}>
                        {this.state.city_options}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}