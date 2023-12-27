


import React, { useRef } from 'react';
import Template1 from './Template1';
import Template2 from './Template2';
import Template4 from './Template4';
import Default from '../../components/Default';
import { useReactToPrint } from 'react-to-print';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import ReactToPdf from "react-to-pdf";

function Templates() {
  const componentRef = useRef();
  const navigate = useNavigate();
  const params = useParams();

  const convertToPdf = async () => {
    try {
      console.log('Converting to PDF...');
      if (componentRef && componentRef.current) {
        const pdfOptions = {
          orientation: 'portrait',
        };

        const pdfBuffer = await ReactToPdf({ target: componentRef.current, options: pdfOptions });

        // Create a FormData object to send the PDF file
        const formData = new FormData();
        formData.append('resume', new Blob([pdfBuffer], { type: 'application/pdf' }), 'resume.pdf');
         const RollNumber = JSON.parse(localStorage.getItem('Student')).RollNumber;
         const skills =JSON.parse(localStorage.getItem('Student')).skills;
         formData.append('RollNumber', RollNumber);
         formData.append('skills',JSON.stringify(skills));


        // Send a POST request to your backend to save the PDF
        await axios.post('/api/user/save-pdf', formData, {
          headers: {


            
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('PDF saved successfully.');
      }
    } catch (error) {
      console.error('Error saving PDF:', error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => {
      try{
      convertToPdf();
      }catch (error) {
        console.error('Error during printing:', error);
      }
    },
  });

  const getTemplate = () => {
    switch (params.id) {
      case '1':
        return <Template1 />;
      case '2':
        return <Template2 />;
      case '4':
        return <Template4 />;
      default:
        return null;
    }
  };

  return (
    <Default>
      <div className="d-flex justify-content-end my-5 mx-5">
        <Button
          style={{ color: 'black', backgroundColor: 'grey' }}
          className="back-btn"
          onClick={() => navigate('/home')}
        >
          Back
        </Button>
        <Button className="mr-5" onClick={handlePrint}>
          Print
        </Button>
      </div>
      <div ref={componentRef}>{getTemplate()}</div>
    </Default>
  );
}

export default Templates;



