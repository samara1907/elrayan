import React from 'react';
import './Home.css';
import 'animate.css';
import {Button} from 'react-bootstrap';
import Slider from '../Slider/Slider';
import Slider2 from '../Slider/Slider2';


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

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
          <h1><img className="animate__animated animate__flip animate__slower animate__infinite" src= {require('./imgs/dishicon.png')} alt="discrption pic" width="70px" height="70px" /> AL RAYAN CO.</h1>
             <img  className="logo" src={require('./imgs/img_logo.jpg')} alt="logo" width="200px" height="200px"/>
             <p className="des">تعد شركة الريان لصيانة الدش و للانظمة الامنية من اكبر واقدم شركات تركيب الدش و كاميرات المراقبة والانتركم  كما قامت الشركة بالعديد من المشروعات الدش المركزى وجميع الانظمة الامنية منذ عام 2010 حتى الان بمدينة الشروق و مدن القاهرة الجديدة شركة الريان للدش و للأنظمة الأمنية أسم له تاريخ </p>
        </div></div>
		  <div className="item2"> 
        <div className="bg animate__animated animate__backInLeft animate__delay-1s">
               <h2>خدمات صيانة الدش</h2>
               <div>
          <Slider/>
        </div>
               <p>
تركيب صيانة دش والريسيفر في التجمع
يمكنك الحصول على أفضل خدمات الدش والريسيفر في التجمع ضمن صيانة وتركيب أطباق الدش، وجميع أجهزة الريسيفر والشاشات، من خلال مركز خدمي في التجمع، وسيتلقي المركز أي بلاغات إعطال الدش أو الريسيفر ليبدأ فورا في التحرك لموقع العميل وبدأ مرحلة الإصلاح، ستتمكن من الحصول على أرقام تركيب وصيانة الدش والريسيفر، وفي العديد من الأماكن الأخرى، ومن خلال التعامل مع الأرقام الرئيسية والموثوق فيها، وستتمكن من الحصول على صيانة ممتازة وخدمة لن تجدها في أي مكان آخر.
<span id="dots">...</span><span id="more">
خدمات الدش والريسيفر في التجمع
يوفر مركز خدمي خدمات الدش والريسيفر في التجمع أفضل خدمات صيانة وتركيب الدش والريسيفر وجميع أنواع الشاشات، ونعمل دائماً على تطوير خدماتنا، لنصل دائماً إلى التميز، وتسهيل إنجازات تركيب وصيانة الدش والريسيفر في أسرع وقت بدقة وكفاءة فى العمل.

كما يوجد لدينا جميع قطع الغيار الأصلية والمعتمدة، وفريق الفنيين متخصص ومتدرب على كيفية فك وتركيب جميع قطع أجزاء الجهاز المراد صيانته، وصيانة الأجهزة بأسعار بسيطة وليست غالية.

ويعمل مركز خدمي على مدار الساعة، وذلك من أجل راحة السادة العملاء، وحرصاً منا على مساعدة عملائنا في إيجاد الخدمات التى تحتاجونها، في أسرع وقت، سوف تحصلون على أفضل خدمات منزلية لتركيب وصيانة الدش والريسيفر، نقدم لكم خدمة الصيانة الشاملة بجودة عالية، ستجدون العديد من المميزات والتعامل الجاد والمحترف، والتي تغنيك عن التعامل مع فنيين غير مؤهلين فى صيانة وتركيب الدش والريسيفر.

كما نقدر جميع طلبات العملاء باهتمام لتوفير الخدمات المطلوبة، بالإضافة لتركيب جميع أنواع الشاشات بأقصى سرعة، وبدقة ومهارة عالية، ونحن نملك خبرة عالية، حيث نقوم ببرمجة وضبط إشارة الدش بدقة وكفاءة عالية، لتكون الصورة واضحة وسليمة.

لقد وفرنا لكم أفضل الخدمات متواجدة في أكبر مركز تركيب الدش بالتجمع، في مجال تركيب الدش والريسيفر، ومتوفر لدينا أيضاً جميع مستلزمات تركيب الدش والريسيفر، وتركيب الشاشات. </span></p>
<button onClick={myFunction} id="myBtn">Read less</button>
           </div></div>  
		  <div className="item3">
        
        <div className="bg animate__animated animate__bounceInUp animate__delay-2s">
               <h2>كاميرات المراقبة</h2>
               <Slider2/>
               <p>قمت بتركيب كاميرات مراقبة وتواجه مشاكل فيها، سواء من حيث وجود اعطال تمنعها من العمل تماما، أو مشكلة في دقة ووضوح الرؤية في الكاميرات، او مشاكل تخص التسجيل والاسترجاع، أو ترغب في زيادة عدد الكاميرات المركبة<span id="dots1">...</span><span id="more1"> او تغيير أي كاميرات موجودة بالفعل.
               
نحن يعمل لدينا في اتقان فنيين صيانة كاميرات مراقبة على أعلى مستوى فني في مجال كاميرات المراقبة، كل ما عليك هو الاتصال للحصول على موعد زيارة فنية وسيقوم الفني بالكشف على الكاميرات واكتشاف الأعطال فيها واصلاحها فورا باستخدام احدث الأجهزة والمعدات.

صيانة الكاميرات تشمل جميع انواع كاميرات المراقبة سواء الداخلية او الخارجية، وأجهزة الدي في ار، والوصلات والباور سابلاي، وبرمجة الدي في ار، وكل ما يتعلق بكفاءة عمل شبكة المراقبة، كما يتوفر لدينا صيانة كاميرات المراقبة السلكية واللاسلكية.

</span></p>
<button onClick={myFunction1} id="myBtn1">Read less</button>
           </div></div>
		 <div className="footer">
       <div className="container">
         <div className="social">
         <a href="https://www.facebook.com/Alrayantelecom"><img src={require('./imgs/facebook.png')} alt="facebook" title="FOLLOW US" width="55px" height="55px" /></a>
         </div>
         <div className="social">
         <a href="https://wa.me/201127263344"><img src={require('./imgs/whatsapp.png')} alt="whatsapp" title="CONTACT US" width="55px" height="55px" /></a>
         </div>
         <div className="social">
         <a href="https://twitter.com/"><img src={require('./imgs/twitter.png')} alt="twitter" title="FOLLOW US" width="55px" height="55px" /></a>
         </div>

       </div>
       <h6>Developed by <a href="https://www.facebook.com/profile.php?id=100028847222002">Mahmoud Osman</a></h6>
     </div>
		</div>

          </div>
      

	
	);
}

export default Home;