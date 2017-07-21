import React from 'react';

const Certificate = (props) => {
  const myCertificates = (
    <div>
      {props.certificate.map((cert) =>
        <div className='item' key={cert.name}>
          <h3>{cert.name} @ {cert.institution} <span>{cert.date}</span> <a className="certification" href={cert.certificateUrl}>
            Show Certificate
          </a></h3>
          <p>{cert.description}</p>
          
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>Certificates</h2>
      {myCertificates}
    </div>
  )
};

export default Certificate;
