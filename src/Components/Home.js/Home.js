import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import img1 from "./../../img/img1.png";
import img2 from "./../../img/img2.png";
import img4 from "./../../img/img4.png";
import img5 from "./../../img/img5.png";
import photo1 from "./../../img/photo1.png";
import photo2 from "./../../img/photo2.png";
import photo3 from "./../../img/photo3.png";
import photo4 from "./../../img/photo4.png";
import pp1 from "./../../img/pp1.png";
import pp3 from "./../../img/pp3.png";
import fb from "./../../img/fb.png";
import inst from "./../../img/inst.png";
import google from "./../../img/google.png";


const Home = ()=>{
  return(
    <Fragment>
      <Header />
    <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
                  <img src={img1} style={{
                          width:"40%",
                          height:"130px",
                          top:"20%",
                          position:"relative"
                          }}/><br /> 
                  <h6>Livraison Sous<br /> 24h Chrono</h6>
            </div>
            <div className="col-md-3">
                  <img src={img2} style={{
                                width:"40%",
                                height:"130px",
                                top:"20%",
                                position:"relative"
                                }}/><br /> 
                  <h6>Retours<br /> de marchandises</h6>
            </div>
            <div className="col-md-3">
                  <img src={img4}
                  style={{
                    width:"40%",
                    height:"130px",
                    top:"20%",
                    position:"relative"
                  }} /><br /> 
                  <h6>Collecte de cash &<br /> Retour de fonds</h6>
            </div>
            <div className="col-md-3">
                  <img src={img5} style={{
              width:"40%",
              height:"130px",
              top:"20%",
              position:"relative"
            }}/><br /> 
                  <h6>Warehousing<br /> & Entreposage</h6>
            </div>
            <div className="gh">
                    <h2>Pourquoi on est le meilleur partenaire pour<br />
                      vos livraisons e-commerce ?</h2>
            </div>
          </div>
        </div>  
      <div className="gridcontiner">
        <div className="g1">
          <div className="foto">
            <img src={photo1} /><br /><br />
            <p>Suivez vos commandes<br /> en temps réel ou vous soyez<br /> et à n'importe quel moment.</p>
          </div>
          <div className="foto">
            <img src={photo2} /><br /><br />
            <p>Gérez vos paiements à la livraison<br /> et retours d'argent de manière <br /> optimisée.</p>
          </div>
          <div className="foto">
            <img src={photo3} /><br /><br />
            <p>Centre relation client trés réactif.</p>
          </div>
          <div className="foto">
            <img src={photo4} /><br /><br />
            <p>Vous pouvez automatiquemet envoyer<br /> vos colis en tout simplicité et confort.<br /> Des connecteurs à votre disposition <br /> pour toutes les plateformes Ecommerce </p>
          </div>
        </div>
        <div className="g2">
          <img src={pp1} className= "imgsize2"></img>
        </div>
      </div>
      <div className="container pop">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <hr />
              <p>Nos opérations non <br />
                pas de limites, <br />
                pour que vos ambitions<br />
                soient sans fin.  </p>
                <a href="#" className="btn">Livrer maintenent</a>
            </div>
          </div>
      </div>
      <div className="pp">
        <p>A partir de    <img src={pp3} />     DH partout au Maroc</p>
      </div>
      <div className="tab">
        <table>
          <thead>
            <tr>
              <th className="pin"></th>
              <th>Livraison ville<br /> ramassage</th>
              <th>Livraison grandes<br /> villes</th>
              <th>Livraison regions<br /> Nord</th>
              <th>Livraison regions<br /> Sud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pack Silver</th>
              <td>35 Dhs</td>
              <td>50 Dhs</td>
              <td>55 Dhs</td>
              <td>60 Dhs</td>
            </tr>
            <tr>
              <th>Pack Gold</th>
              <td>40 Dhs</td>
              <td>55 Dhs</td>
              <td>60 Dhs</td>
              <td>65 Dhs</td>
            </tr>
          </tbody>
        </table>
        <button>Livrer maintenent</button>
      </div>  
      <footer className='foote'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <hr />
                        <p><b>Chaque jour est un nouveau jour<br />
                        pour nous et nous travaillons très <br />
                        dur pour satisfaire nos clients partout.</b></p>
                    </div>
                    <div className='col-md-6 mi'>
                        <h6>EXPÉDITIONS</h6>
                        <a href="#">&gt; Nos Tarifs</a> <br />
                        <a href="#">&gt; Suivi de Livraison</a>
                    </div>
                    <div className="col-md-4">
                      <img src={fb} style={{
                    width:"30%",
                    height:"60px"
                  }} />
                    </div>
                    <div className="col-md-4">
                      <img src={inst} style={{
                    width:"30%",
                    height:"60px"
                  }}/>
                    </div>
                    <div className="col-md-4">
                      <img src={google} style={{
                    width:"30%",
                    height:"60px"
                  }}/>
                    </div>
                </div>
            </div>
        </footer>                                                                                                                                                                                                                                                                                                                                   
    </section>
    </Fragment>
  );
}
export default Home;