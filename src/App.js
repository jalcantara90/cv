import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

import photoProfile from './assets/img/photo-profile.jpg';

class App extends Component {
  render() {

    const person = {
      avatar: photoProfile,
      name: 'Jonathan Alcántara',
      profession: 'FrontEnd Developer',
      bio: 'I am passionate about of web development.',
      address: 'Barcelona, Spain',
      social: [
        {name: 'twitter', url: 'https://twitter.com/Jalcantara90'},
        {name: 'github', url: 'https://github.com/jalcantara90'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/jonathan-alcantara-76748312a/'}
      ],
      experience: [
        {jobTitle: 'Web developer and IT support', company: 'Hutchitson Ports BEST', startDate: 'April 2013', endDate: 'Now', jobDescription: 'I have developed several web apps for them to make their jobs easier. Furthermore, I managing and developing with my team the intranet of the company'},
      ],
      education: [
        {degree: 'CFGM ESMI', institution: 'I.E.S Ribera Baixa', startDate: 'Sept. 2008', endDate: 'July 2010', description: 'Medium level education cycle of IT systems'},
        {degree: 'CFGS ASIX', institution: 'I.E.S Ribera Baixa', startDate: 'Sept. 2011', endDate: 'July 2013', description: 'Higher level education cycle of IT systems'},
      ],
      certificate: [
        {name: 'FrontEnd Architect', institution: 'Platzi', date: 'July 2017', description: 'Career of professional FrontEnd, that contain some courses where I learned since basics to more advanced javascript features on client side',certificateUrl:'https://platzi.com/@jonathanalcantarajimenez/arquitecto/diploma/'},
        {name: 'Professional Backend', institution: 'Platzi', date: 'July 2017', description: 'Career of professional backend, that contain some courses where I learned since basics to more advanced javascript features on server side',certificateUrl:'https://platzi.com/@jonathanalcantarajimenez/backend/diploma/'},
        {name: 'Angular 2+: De cero a experto creando aplicaciones', institution: 'Udemy', date: 'June 2017', description: 'Certification about Angular, in this course I learned since the fundamentals of this framework to crate a SPA, an applications using Spotify, themovieDB and youtube API, use of AngularFire2 to use firebase as backend, Auth0 to make social network login and Ionic' ,projects:{name:'PelisApp',githubURL:'https://github.com/jalcantara90/PelisApp'},certificateUrl:'https://www.udemy.com/certificate/UC-MDFBP07N/'},
        {name: 'Curso de Frontend con Bootstrap y Foundation', institution: 'Platzi', date: 'Jan. 2017', description: 'Course where I learned to create applications using Bootstrap and Foundation frameworks',certificateUrl:'https://platzi.com/@jonathanalcantarajimenez/fw-frontend/diploma/' },
        {name: 'Curso de Responsive Design', institution: 'Platzi', date: 'Nov. 2016', description: 'Course where I learned some tips to make responsive desing for all type of devices',projects:{name:'Invie',githubURL:'https://github.com/jalcantara90/invie'},certificateUrl:'https://platzi.com/@jonathanalcantarajimenez/responsive-design/diploma/' },
        {name: 'Curso de Definitivo de Javascript', institution: 'Platzi', date: 'Sept. 2016', description: 'A course where I learn how to build a real application like Instagram without use any framework',certificateUrl:'https://platzi.com/@jonathanalcantarajimenez/javascript-pro/diploma/' },
      ],
      skills: [
        {name: 'Angular', percentage: '90%'},
        {name: 'React', percentage: '45%'},
        {name: 'AngularJS', percentage: '85%'},
        {name: 'HTML5', percentage: '90%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '90%'},
        {name: 'PHP', percentage: '85%'},
        {name: 'SQL', percentage: '90%'},
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
            <div className="waves">
                <div className="wave a"></div>
                <div className="wave c"></div>
                <div className="wave b"></div>
            </div>
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
