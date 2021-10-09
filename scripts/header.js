const d = document;
const rootElement = d.getElementById('root');

// class Header extends React.Component{
//     constructor(props){
//         super(props);   
//     }
//     render(){
//         return(
//            <header className="header">
//                 <nav className="header__nav">
//                     <div className="header__logo">
//                         <img className="logo" src="assets/logo.svg" alt=""/>
//                     </div>
//                     <ul className="header__menu">
//                         <li className="header__menuItem"><a href="#">{this.props.headOp1}</a></li>
//                         <li className="header__menuItem"><a href="#">{this.props.headOp2}</a></li>
//                         <li className="header__menuItem"><a href="#">{this.props.headOp3}</a></li>
//                         <li className="header__menuItem"><a href="#">{this.props.headOp4}</a></li>
//                     </ul>
//                 </nav>
//                 <section className="header__mainContainer">
//                     <div className="header__imgContain">
//                         <img className="header__imgContain-img" src={this.props.hURLPhoto}/>
//                     </div>
//                     <section className="header__infoUser">

//                         <div className="infoUser__Name">
//                             <h2 className="userName">{this.props.headUserName}</h2>
//                             <div className="infouser__Name-button">
//                             Follow +</div>
//                         </div>

//                         <div className="infoUser__Statistics">
//                             <div className="infoUser__Statistics-item">
//                                 <h4 className="item">Followers</h4>
//                                 <h5 className="item-number">{this.props.hFollowersNumb}</h5>
//                             </div>    
//                             <div className="infoUser__Statistics-item">
//                                 <h4 className="item">Following</h4>
//                                 <h5 className="item-number">{this.props.hFollowingNumb}</h5>
//                             </div>    
//                             <div className="infoUser__Statistics-item">
//                                 <h4 className="item">Friends</h4>
//                                 <h5 className="item-number">{this.props.hFriendsNumb}</h5>
//                             </div>    
//                         </div>

//                         <div className="infoUser__Descript">
//                             <p className="infoUser__Descript-p">
//                                {this.props.headDesc}
//                             </p>
//                         </div>
//                     </section>
//                 </section>
//            </header>
//         );
//     }
// }

function Header(props){
    const [followers,setFollowers] = React.useState(1);

    function addFollowers(props){
        setFollowers(followers+1);
        alert(`${props.userName} now has ${followers} new Follower`);
    }

    return(
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">
                    <img className="logo" src="assets/icono.png" alt=""/>
                </div>
                <ul className="header__menu">
                    <li className="header__menuItem"><a href="#">{props.headOp1}</a></li>
                    <li className="header__menuItem"><a href="#">{props.headOp2}</a></li>
                    <li className="header__menuItem"><a href="#">{props.headOp3}</a></li>
                    <li className="header__menuItem"><a href="#">{props.headOp4}</a></li>
                </ul>
            </nav>
            <section className="header__mainContainer">
                <div className="header__imgContain">
                    <img className="header__imgContain-img" src={props.hURLPhoto}/>
                </div>
                <section className="header__infoUser">

                    <div className="infoUser__Name">
                        <h2 className="userName">{props.headUserName}</h2>
                        <div className="infouser__Name-button" onClick={addFollowers}>
                        Follow +</div>
                    </div>

                    <div className="infoUser__Statistics">
                        <div className="infoUser__Statistics-item">
                            <h4 className="item">Followers</h4>
                            <h5 className="item-number">{props.hFollowersNumb}</h5>
                        </div>    
                        <div className="infoUser__Statistics-item">
                            <h4 className="item">Following</h4>
                            <h5 className="item-number">{props.hFollowingNumb}</h5>
                        </div>    
                        <div className="infoUser__Statistics-item">
                            <h4 className="item">Friends</h4>
                            <h5 className="item-number">{props.hFriendsNumb}</h5>
                        </div>    
                    </div>

                    <div className="infoUser__Descript">
                        <p className="infoUser__Descript-p">
                            {props.headDesc}
                        </p>
                    </div>
                </section>
            </section>
        </header>
    );
}
ReactDOM.render(
    <React.Fragment>
        <Header
            headOp1="Start"
            headOp2="Account"
            headOp3="Settings"
            headOp4="Log out"
            hURLPhoto="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
            headUserName="A'lars Alviter"
            hFollowersNumb="542"
            hFollowingNumb="117"
            hFriendsNumb="239"
            headDesc="A cup of coffee and 4 hours later I found myself going crazy. I don't know what else to type so here lorem comes Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus numquam ipsum excepturi."
            />
    </React.Fragment>,rootElement);