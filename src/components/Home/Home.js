import React from 'react';
import './Home.css';
import 'animate.css';
import {Button} from 'react-bootstrap';




const Home = () =>{
	return(
          <div>
            <div>
               
          <a href="tel:01127263344">
        <Button className="secondary ">
          <strong >
                أتصل الأن
          </strong>
        <img className="" src={require('./imgs/img_147380.png')} title="أتصل الأن" alt="callus" width="25px" height="25px"/>
        </Button>
        </a>
        <a href="https://wa.me/201127263344">
        <Button className="first">
          <strong >
            ابعتلنا واتساب
          </strong>
        <img className="" src={require('./imgs/whatsapp.png')} title="أتصل بنا" alt="callus" width="25px" height="25px"/>
        </Button>
        </a>
  
      </div>
        <div className="grid-container ">
        <div ><div > 
          <h1><img className="animate__animated animate__flip animate__slower animate__infinite" src= {require('./imgs/camm.png')} alt="discrption pic" width="40px" height="40px" /> RAYAN <img className="animate__animated animate__flip animate__slower animate__infinite" src= {require('./imgs/dishicon.png')} alt="discrption pic" width="40px" height="40px" /></h1>
             <img  className="logo" src={require('./imgs/img_logo.jpg')} alt="logo" width="200px" height="200px"/>
             <p className="des">تعد شركة الريان لأنظمة الدش و كاميرات المراقبة من اكبر واقدم شركات تركيب الدش و كاميرات المراقبة  كما قامت الشركة بالعديد من مشروعات الدش و كاميرات المراقبة منذ عام 2010 حتى الان بمدينة الشروق و مدن القاهرة الجديدة شركة الريان للدش و كاميرات المراقبة أسم له تاريخ </p>
        </div></div>
		  <div className="item2"> 
        <div className="bg animate__animated animate__backInLeft animate__delay-1s">
               <h2>خدمات الدش</h2>
               <div>
          <img src={require('./imgs/Satellite-Installation-Technician-Worker_art.png')} alt="dish" width="300px" height="300px"/>
        </div>
               <p>تقدم الشركة جميع خدمات الدش الثابت و المتحرك
                 <br/>
                   التي تضمن مجموعة كاملة من أعمال و خدمات تركيب و صيانة الدش الثابت و المركزي و المتحرك و تأسيس الشبكات الداخلية و صيانة جميع انواع الريسيفرات من خلال مجموعة من افضل الفنين المتخصصين في مجال تركيب و صيانة الدش
                   <br/>
                    كما تتوفر لدينا جميع انواع قطع الغيار (أطباق دش - ريسيفرات - حوامل شاشات - أسلاك - لاقط إشارة). كما توفر الشركة جميع المستلزمات و الأكسسوارات الإضافية عند الطلب. و تقدم شركة الريان ضمان لمدة عام علي جميع قطع الغيار
                    <br/>
                      و تتشرف الريان بتقديم خدمة سريعة و متقنة. حيث نقوم بتنسيق المواعيد المناسبة لأوقاتكم عند طلب الفني. تقوم الريان بتنسيق الميعاد معكم. كما يقوم الفني بالتواصل معكم لتأكيد الميعاد </p>
           </div></div>  
		  <div className="item3">
        
        <div className="bg animate__animated animate__bounceInUp animate__delay-2s">
               <h2>كاميرات المراقبة</h2>
               <img src={require('./imgs/security-company-employee-sets-up-security-camera_107173-9209.jpg')} alt="camms" width="300px" height="300px" />
               <p>يعمل لدي شركة الريان فنيين تركيب و صيانة كاميرات مراقبة على أعلى مستوى فني في مجال كاميرات المراقبة، كل ما عليك هو الاتصال للحصول على موعد زيارة فنية وسيقوم الفني بالكشف على الكاميرات واكتشاف الأعطال فيها واصلاحها فورا باستخدام احدث الأجهزة والمعدات
<br/>كما توفر الشركة جميع انواع كاميرات المراقبة السلكية و اللاسلكية، وأجهزة الدي ڤي أر، الإن ڤي أر؛ والوصلات والباور سابلاي، وبرمجة الدي في ار، وكل ما يتعلق بكفاءة عمل شبكة المراقبة. و نتشرف دائما بخدمتكم
</p>
           </div></div>
		 <div className="footer">
       <div className="container">
         <div className="social">
         <a href="https://www.facebook.com/Alrayantelecom"><img src={require('./imgs/facebook.png')} alt="facebook" title="FOLLOW US" width="50px" height="50px" /></a>
         </div>
         <div className="social">
         <a href="https://www.instagram.com/alrayan_communications/"><img src={require('./imgs/instagram-logo.png')} alt="instagram" title="FOLLOW-US" width="50px" height="50px" /></a>
         </div>
         <div className="social">
         <a href="https://wa.me/201127263344"><img src={require('./imgs/whatsapp.png')} alt="whatsapp" title="CONTACT US" width="50px" height="50px" /></a>
         </div>
         <div className="social">
         <a href="https://twitter.com/"><img src={require('./imgs/twitter.png')} alt="twitter" title="FOLLOW US" width="50px" height="50px" /></a>
         </div>
         <div className="social">
         <a href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D9%87+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D9%86+%D9%84%D9%84%D8%AF%D8%B4%E2%80%AD/@30.1664433,31.6472799,15z/data=!4m5!3m4!1s0x0:0x3c6cafdef4f3dcc8!8m2!3d30.1664433!4d31.6472799"><img src={require('./imgs/pin.png')} alt="address" title="VISIT-US" width="50px" height="50px" /></a>
         </div>
         

       </div>
       <h6>Developed by <a className="mahmoud" href="https://www.facebook.com/profile.php?id=100028847222002">Mahmoud Osman</a></h6>
     </div>
		</div>

          </div>
      

	
	);
}

export default Home;
