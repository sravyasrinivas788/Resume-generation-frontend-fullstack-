import React from "react";
import './Interview.css';
import Navbars from './Navbars'; 
import Buttonss from './Buttonss';
import img2 from './images.png'
function Interview(){
    return(

        <div>
            <Navbars/>
            <Buttonss/>
      <h3 style={{ textAlign: 'center',color: 'rgb(161, 107, 21)' }}>Interview Experiences</h3>
      <h4 style={{ textAlign: 'center',color: 'rgb(161, 107, 21)' }}>Students of 2024</h4>

      {/* Apply styles from the external CSS file */}
      <div className="student-div">
        <div>
          <img src={img2} alt="Student 1" className="student-image" />
        </div>
        <div>
          <h4 className="sname">Sravyasri</h4>
          <p>I have done BE in Computer science engineering. I planned to do MS. So I prepared for GRE for nearly one and a half years. I really worked very hard to get a high score but I couldn’t. Tears welled up in eyes when I saw the score because while attempting the test I had a feel like ‘I am doing good’. I took the test during my final year. The date was 07 Aug 2018 (Wednesday). It was very hard for me to digest. I felt very bad. Wept, Wept, Wept Wept…. I was in a thought to retake the test. At that time, my college’s campus interview season started.</p>
        </div>
        
      </div>
      <div className="student-div" >
        <img src={img2} alt="Student 2" className="student-image" />
        <div>
          <h4  className="sname">Akanksha</h4>
          <p>I attended a mock PI before my actual interview to get some experience before the D-Day. And from the moment i entered the hall to the moment i came back, it was a terrible nightmare. They made me feel my knowledge was absolutely low and i dint possess any technical skills.

Somehow i gathered some courage as the first real interview i had to face was just a few days away and that too of IIMC.</p>
        </div>
      </div>

      {/* Repeat the similar structure for other students */}
    </div>
       
    )


}
export default Interview;