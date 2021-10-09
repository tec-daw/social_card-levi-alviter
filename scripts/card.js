// const main = document.getElementById("main");

//  class Card extends React.Component {

//     constructor(props){
//         super(props);
//         this.showMessage = this.showMessage.bind(this);
//     }

//     showMessage(){
//         console.log('Now you follow me');
//     }

//     render(){
//         return(
//             <section className="card">
//                 <div className="card__header">
//                     <div className="img__container">
//                         <img className="card__header-covimg" src={this.props.cURLcoverImg}/>
//                         <img className="card__header-profimg" src={this.props.cURLprofImg}/>
//                     </div>
//                 </div>
//                 <div className="card__body">
//                     <div className="card__bodyName">
//                         <h4>{this.props.cUserName}</h4>
//                         <h6>{this.props.cShortDesc}</h6>
//                     </div>
//                     <div className="card__body-statics">
//                         <div className="card__body-statistics-item">
//                             <h2>{this.props.cFollowersNumb}</h2> 
//                             <h5>Followers</h5>
//                         </div>
//                         <div className="card__body-statistics-item">
//                             <h2>{this.props.cFollowingNumb}</h2> 
//                             <h5>Following</h5>
//                         </div>
//                     </div>
//                     <div className="card__body-button" onClick={this.showMessage}>Follow +</div>
//                     <div className="card__body-text">{this.props.cLongDesc}
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }
function Card(props){
    const [count, setCount] = React.useState(1);
    function addArtist(){
        setCount(count + 1);
        alert(`${props.cUserName} has +${count} follow`);
    }
    
    return(
        <div className="cardContainer">
            <section className="card">
                <div className="cardFront">
                    <div className="card__header">
                        <div className="img__container">
                            <img className="card__header-covimg" src={props.cURLcoverImg}/>
                            <img className="card__header-profimg" src={props.cURLprofImg}/>
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="card__bodyName">
                            <h4>{props.cUserName}</h4>
                            <h6>{props.cShortDesc}</h6>
                        </div>
                        <div className="card__body-statics">
                            <div className="card__body-statistics-item">
                                <h2>{props.cFollowersNumb}</h2> 
                                <h5>Followers</h5>
                            </div>
                            <div className="card__body-statistics-item">
                                <h2>{props.cFollowingNumb}</h2> 
                                <h5>Following</h5>
                            </div>
                        </div>
                        <div className="card__body-button" onClick={addArtist}>Follow +</div>
                        <div className="card__body-text">{props.cLongDesc}
                        </div>
                    </div>
                </div>
                <div className="cardBack">
                    <div className="back-item-imgCont">
                        <img className="imgCont-cont" src="assets/facebook.png" alt=""/>
                    </div>
                    <div className="back-item-imgCont">
                        <img className="imgCont-cont" src="assets/twitter.png" alt=""/>    
                    </div>
                    <div className="back-item-imgCont">
                        <img className="imgCont-cont" src="assets/instagram.png" alt=""/>            
                    </div>
                    <div className="back-item-imgCont">
                        <img className="imgCont-cont" src="assets/spotify.png" alt=""/>
                    </div>
                </div>
            </section>
        </div>
        );
}

ReactDOM.render(
    <React.Fragment>
        <Card
            cURLcoverImg="https://photos.bandsintown.com/large/8041870.jpeg"
            cURLprofImg="https://sss.radiooasis.pe/imagen/apaisado/green-day-billie-joe-armstrong-20-c7148.jpg"
            cUserName="Billy Joe Armstrong"
            cShortDesc="Won't you save me close to you?"
            cFollowersNumb="239123"
            cFollowingNumb="90"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
        <Card
            cURLcoverImg="https://heraldodemexico.com.mx/u/fotografias/m/2021/7/12/f608x342-395011_424734_0.jpg"
            cURLprofImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlYs1T_rEHxEdx0l-pmHmMYRI8V8s-maVoA&usqp=CAU"
            cUserName="Brian May"
            cShortDesc="We are the champions"
            cFollowersNumb="982341"
            cFollowingNumb="190"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
        <Card
            cURLcoverImg="https://www.elindependiente.com/wp-content/uploads/2017/07/nirvana-video-inedito-656x368.jpg"
            cURLprofImg="https://i.guim.co.uk/img/media/bd6b06ff92b70969fdd78bdcaee38f2a7f71b3d4/1953_0_1047_628/master/1047.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=ecd069602015a9afeb4e45d9a302af5a"
            cUserName="Krist Novoselic"
            cShortDesc="Come as you are, as you were, as I want you to be"
            cFollowersNumb="54109"
            cFollowingNumb="1023"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
        <Card
            cURLcoverImg="https://www.latercera.com/resizer/IEsO_RzGReHf93y8iiej_iIcGeA=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/X6V3MNFU6NACBDDHKCGD3TON6I.jpg"
            cURLprofImg="https://rockfm-cdnmed.agilecontent.com/resources/jpg/4/9/1620214286694.jpg"
            cUserName="Jon Bon Jovi"
            cShortDesc="It’s my life it’s now or never"
            cFollowersNumb="409203"
            cFollowingNumb="12034"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
        <Card
            cURLcoverImg="https://cdn.pixabay.com/photo/2017/10/17/07/11/london-2859743_960_720.jpg"
            cURLprofImg="https://aws.glamour.es/prod/designs/v1/assets/620x620/651561.jpeg"
            cUserName="Withney Houston"
            cShortDesc="It's alright buts not ok"
            cFollowersNumb="109256"
            cFollowingNumb="46098"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
        <Card
            cURLcoverImg="https://los40es00.epimg.net/los40/imagenes/2018/07/30/musica/1532965523_362168_1532969568_noticia_normal.jpg"
            cURLprofImg="https://fotos.perfil.com/2021/08/25/cropped/1200/900/center/taylor-swift-debuto-en-tiktok-y-su-vestido-de-lino-se-agoto-de-inmediato-1221756.jpg"
            cUserName="Taylor Swift"
            cShortDesc="Best people in life is free"
            cFollowersNumb="9034855"
            cFollowingNumb="102"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
        <Card
            cURLcoverImg="https://i.pinimg.com/originals/62/4f/43/624f43162031eb243cd60c64b1add977.png"
            cURLprofImg="https://img.discogs.com/OaRSZuJXhOOi-IRAmb2Ht1YQgvc=/594x443/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-3733958-1508927711-9604.jpeg.jpg"
            cUserName="Zoe Colotis"
            cShortDesc="I will never, free you, hand in hand"
            cFollowersNumb="8379"
            cFollowingNumb="901"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
        <Card
            cURLcoverImg="https://images.genius.com/d0124ecb8e67e74e0fa166d3f020c857.1000x1000x1.jpg"
            cURLprofImg="https://img.discogs.com/5e5lCo5KDyDRHjDnQ0aob22mMk4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15393376-1590799691-8189.jpeg.jpg"
            cUserName="Mark Foster"
            cShortDesc="All the other kids with the pumped up kicks"
            cFollowersNumb="564012"
            cFollowingNumb="276"
            cLongDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda ipsa rem dolorem odio autem."
        />
    </React.Fragment>,main
);