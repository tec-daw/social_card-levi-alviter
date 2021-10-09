const footer = document.getElementById('footer');

// class Foot extends React.Component{
//     render(){
//         return(
//             <div className="footer__container">
//                 <div className="footer__item">
//                     <ul>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer__item">
//                     <ul>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer__item">
//                     <ul>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer__item">
//                     <ul>
//                         <li className="list__item"><a href="#">Lorem</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer_icon">
//                     <img src="assets/logo.svg"/>
//                 </div>
//             </div>
//         );
//     }
// }
function Foot(props){
    return(
        <div className="footer__container">
            <div className="footer__item">
                <ul>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                </ul>
            </div>
            <div className="footer__item">
                <ul>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                </ul>
            </div>
            <div className="footer__item">
                <ul>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                    <li className="list__item"><a href="#">Lorem</a></li>
                </ul>
            </div>
            <div className="footer__item">
                <ul>
                    <li className="list__item"><a href="#">Lorem</a></li>
                </ul>
            </div>
            <div className="footer_icon">
                <img src="assets/icono.png"/>
            </div>
        </div>
    );
}
ReactDOM.render(
    <React.Fragment>
        <Foot/>
    </React.Fragment>,footer
);