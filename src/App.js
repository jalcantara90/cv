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
      profession: 'Desarrollador frontEnd',
      bio: 'Desarrollador, aprendiendo a usar los frameworks más modernos de JavaScript',
      address: 'Barcelona, España',
      social: [
        {name: 'twitter', url: 'https://twitter.com/Jalcantara90'},
        {name: 'github', url: 'https://github.com/jalcantara90'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/jonathan-alcantara-76748312a/'}
      ],
      experience: [
        {jobTitle: 'Desarrollador y técnico de soporte informático', company: 'Hutchitson Ports BEST', startDate: 'Abril 2013', endDate: 'Presente', jobDescription: 'Mi principal taréa es el soporte informático, pero desde 2014 me dedico a hacer aplicaciones web para ayudar al funcionamiento operativo de la empresa, desde 2016 también llevo a cabo el proyecto de desarrollo y mejora de la intranet de la empresa.'},
      ],
      education: [
        {degree: 'CFGM ESMI', institution: 'I.E.S Ribera Baixa', startDate: 'Sep. 2008', endDate: 'Julio 2010', description: 'Estudié un grado medio de explotación de sistemas microinformáticos'},
        {degree: 'CFGS ASIX', institution: 'I.E.S Ribera Baixa', startDate: 'Sep. 2011', endDate: 'Julio 2013', description: 'Estudié un grado superior de administración de sistemas informáticos'},
      ],
      certificate: [
        {name: 'Angular 2+: De cero a experto creando aplicaciones', institution: 'Udemy', date: 'Cursando', description: 'Curso de Angular, donde se enseña desde los fundamentos a crear diversas aplicaciones, Desde una SPA sencilla a crear aplicaciones usando las APIs de Spotify, ThemovieDB, youtube, uso de firebase tanto para guardar datos como para hacer logins con redes sociales, uso de Auth0 y Ionic' },
        {name: 'Curso de Desarrollo Web con Angular', institution: 'Platzi', date: 'Marzo 2017', description: 'Curso de Angular, donde se muestra como usar typescript y crear una aplicación sencilla que permite hacer CRUD tanto a mongodb como Firebase.' },
        {name: 'Curso de Frontend con Bootstrap y Foundation', institution: 'Platzi', date: 'Enero 2017', description: 'Curso donde se enseña a usar los frameworks de css Bootsrap y foundation, uso de grid y sus diversos componentes.' },
        {name: 'Curso de Responsive Design', institution: 'Platzi', date: 'Noviembre 2016', description: 'Curso donde se enseña css para que las aplicaciones web se vean bien en cualquier tipo de dispositivo.' },
        {name: 'Curso de Definitivo de Javascript', institution: 'Platzi', date: 'Septiembre 2016', description: 'Curso donde se enseña el uso de JavaScript a nivel profesional, donde se crea una aplicación similar a Instagram desde cero, sin usar ningún framework, solamente JS tanto en lado cliente como servidor, uso de rethinkdb para la persistencia de datos, gulp como automatizador de tareas para compilar scss y refrescar navegador al guardar cambios.' },
      ],
      skills: [
        {name: 'Angular', percentage: '70%'},
        {name: 'React', percentage: '45%'},
        {name: 'AngularJS', percentage: '85%'},
        {name: 'HTML5', percentage: '90%'},
        {name: 'CSS', percentage: '85%'},
        {name: 'JavaScript', percentage: '85%'},
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
