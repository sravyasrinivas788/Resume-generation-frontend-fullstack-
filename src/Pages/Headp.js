import React from 'react';

import './Headp.css' 
import Default from '../components/Default'
import { useNavigate } from 'react-router-dom';
import img from '../resources/templates/show.jpeg';
import img2 from '../resources/templates/temp2.jpg';
import img3 from '../resources/templates/temp3.jpg'

const Headp = () => {
  const navigate = useNavigate();
  const templates = [
    {
      title: " Resume",
      image: img,
    },
    {
      title: "Highlighted Sections Resume",
      image: img2,
    },
    {
      title:"Try",
      image:img3,
    }
  ];
  return (
    

    <Default>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>


    </Default>
  );
};

export default Headp;

