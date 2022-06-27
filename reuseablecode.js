
class mainTemplate extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
      
        <div class="container maindiv">
        <div id="iddiv" class=" row justify-content-center">
         <div class="col-lg-3 bg-white subdiv1 text-center">
          <div class="mt-5">
            <img class="pt-4" width="80%" src="Avatars - Default with Backdrop.png" alt="">
            <h3 class="mt-2 yourname">sonny sangha</h3>
            <button class="mt-4 cvbutton">Download my cv</button>
          </div>
           
         </div>
        
     <!--about me section-->
     <div id="aboutme"  class=" bg-white subdiv2 aboutmediv col-lg-8 ">
      <div id="aboutmediv" class="">

          <a id="homeanchor" class="anchoricons" style=" text-decoration: none;  " href="home.html" >
              <i id="homeicon" class="fas fa-home fa-2x icons "></i>
              <button  class="aboutbtns" id="homebtn" >Home</button>
              
          </a>
          <a id="testimonialanchor" class="anchoricons" style=" margin-left: 10px;  text-decoration: none; " href="">
              <i id="testimonialicon"  class="fas fa-quote-right fa-2x icons " ></i>
              <button  class="aboutbtns" id="testimonialbtn" >Testimonial</button>
               </a>
            <a id="aboutmeanchor" style="margin-left: 10px; text-decoration: none;" class="anchoricons" href="aboutme.html">
              <i id="aboutmeicon" class="fas fa-user-circle fa-2x icons" ></i>
              <button  class="aboutbtns" id="aboutmebtn" > About me 
              </button>
            </a>
            <a  id="CVanchor" class="anchoricons" style="margin-left: 10px;  text-decoration: none;" href="">
              <i id="CVicon" class="fas fa-graduation-cap fa-2x icons"></i>
              <button class="aboutbtns" id="CVbtn" >Resume</button>
              </a>
           
          <a id="projectsanchor" class="anchoricons"style="margin-left: 10px;  text-decoration: none;" href="">
            <i  id="projectsicon" class="fas fa-briefcase fa-2x icons"></i>
            <button class="aboutbtns" id="projectsbtn" >Portfolio</button>
    
          </a>
          <a id="contactanchor" class="anchoricons" style="margin-left: 10px;  text-decoration: none;" href="">

              <i id="contacticon" class="fas fa-envelope fa-2x icons"></i>
              <button class="aboutbtns" id="contactbtn" >Contact me</button>
    
    
            </a>
            <a  id="serviecesanchor" style="margin-left: 10px;" class="anchoricons  text-decoration: none;" href="">
              <i id="serviecesicon" class="fas fa-cogs fa-2x icons"></i>
             <button class="aboutbtns" id="serviecesbtn">Servieces</button>
               </a>      
      </div>
      
     </div>
        </div>
    </div>


        
        `
        }
}
customElements.define('my-template' , mainTemplate);