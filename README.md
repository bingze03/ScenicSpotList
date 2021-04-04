# Dcard 2021 Web Frontend Intern Homework
串接交通部觀光景點API，使用 React 實作一個瀏覽景點的網站
## Demo

#### Requirement
npm

#### Instruction

###### `npm install`
根據package.json安裝專案所需套件

###### `npm start`
在local上以開發模式建置起來: http://localhost:3000

## 使用套件
#### [react-router](https://reactrouter.com/)
在React的環境中提供頁面間的連結與跳轉
#### [axios](https://axios-http.com/)
promise based的非同步HTTP請求發送套件
#### [gulp](https://gulpjs.com/)
在開發階段將CSS預處理語言less轉換成CSS


## 頁面切版
![](https://i.imgur.com/sKTltjv.jpg)


## 元件說明

### App

root DOM渲染元件的進入點，包住SideDrawer及Route，Route中控制頁面的切換，隨要求的網址切換至全部景點列表(AllSpotPage)或縣市景點列表(CitySpotPage)


> code snippet
```jsx=
<div className="App">
    <div className="app-content">
        <SideDrawer/>
        <Switch>
            <Route path='/' exact render={()=><Redirect to='/scenicSpot'/>}/>
            <Route path='/scenicSpot' exact component={AllSpotPage}/>
            <Route path='/scenicSpot/:city' component={CitySpotPage}/>
        </Switch>
    </div>
</div>
```

### AutoLoader

從props接收要取得資料的API URL，透過React的lifecycle method在元件載入時、API URL被更新時、scroll bar滾動到底時呼叫API抓取新的資料

> code snippet
```jsx=
class AutoLoader extends React.Component{
    constructor(props){
        this.state={
            counter:0,
            step:30,
            content:null
        }
    }
    
    componentDidMount(){
        //call API request
        axios.get(
            this.props.load_url+'?$top='+this.state.step+'&$format=JSON'
        ).then(
            //write data into state
            ...
        ).catch(
            ...
        );
    }

    componentDidUpdate(prevProps){
        if(prevProps.load_url!==this.props.load_url){
            this.setState({counter:0});
            //call API request
            axios.get(
                this.props.load_url+'?$top='+this.state.step+'&$format=JSON'
            ).then(
                //write data into state
                ...
            ).catch(
                ...
            );
        }
    }
    
    //return if scroll bar is at bottom
    isBottom(target){
        return target.scrollHeight - target.clientHeight === Math.ceil(target.scrollTop);
    }

    handleOnScroll(e){
        let target=e.target;
        if(this.isBottom(target)){
            axios.get(
                this.props.load_url+'?$top='+this.state.step+'&$skip='+this.state.counter+'&$format=JSON'
            ).then(
                //write data into state
                ...
            ).catch(
                ...
            );
        }
    }

    render(){
        return (
            <div onScroll={this.handleOnScroll}>
                {this.state.content}
            </div>
        )
    }
}
```