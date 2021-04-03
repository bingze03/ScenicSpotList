import React from 'react';
import axios from 'axios';
import SpotBlock from '../SpotBlock';

export default class AutoLoader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
            step:30,
            content:null
        }
        this.ref=React.createRef();
        this.handleOnScroll=this.handleOnScroll.bind(this);
    }

    componentDidMount(){
        axios.get(
            this.props.load_url+'?$top='+this.state.step+'&$format=JSON'
        ).then(
            response=>{
                this.setState({counter:this.state.counter+this.state.step});
                this.setState({
                    content:response.data.map(
                        spot=>React.createElement(SpotBlock,{...spot})
                    )
                });
            }
        ).catch(
            error=>{
                if(error.response!==undefined){
                    console.log(error.response);
                }
            }
        );
    }

    componentDidUpdate(prevProps){
        if(prevProps.load_url!==this.props.load_url){
            this.setState({counter:0});
            axios.get(
                this.props.load_url+'?$top='+this.state.step+'&$format=JSON'
            ).then(
                response=>{
                    this.setState({counter:this.state.counter+this.state.step});
                    this.setState({
                        content:response.data.map(
                            spot=>React.createElement(SpotBlock,{...spot})
                        )
                    });
                }
            ).catch(
                error=>{
                    if(error.response!==undefined){
                        console.log(error.response);
                    }
                }
            );
            this.ref.current.scrollTo(0, 0);
        }
    }

    isBottom(target){
        return target.scrollHeight - target.clientHeight === Math.ceil(target.scrollTop);
    }

    handleOnScroll(e){
        let target=e.target;
        if(this.isBottom(target)){
            axios.get(
                this.props.load_url+'?$top='+this.state.step+'&$skip='+this.state.counter+'&$format=JSON'
            ).then(
                response=>{
                    this.setState({counter:this.state.counter+this.state.step});
                    this.setState({
                        content:this.state.content.concat(
                            response.data.map(
                                spot=>React.createElement(SpotBlock,{...spot})
                            )
                        )
                    });
                }
            ).catch(
                error=>{
                    if(error.response!==undefined){
                        console.log(error.response);
                    }
                }
            );
        }
    }

    render(){
        return (
            <div ref={this.ref} className="auto-loader" onScroll={this.handleOnScroll}>
                {this.state.content}
            </div>
        )
    }
}