import { Fragment } from 'react'

export const dictionary = {
  es: {
    header: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      works: 'Proyectos'
    },
    home: {
      title: 'Hola 👋! Soy',
      developer: 'Desarrollador Web Full Stack'
    },
    about: {
      title: 'Sobre Mí',
      text: [
        <Fragment key={1}>Soy <strong className='aboutme__text--decorated'>Desarrollador Web Full Stack 👨🏻‍💻</strong>, me apasiona combinar lo técnico con lo estético para crear interfaces amigables e intuitivas con el mejor rendimiento.</Fragment>,
        <Fragment key={2}>Desarrollo interfaces dinámicas con React y CSS ademas de otras herramientas como Material UI, Boostrap, SCSS. También, tengo conocimiento en el backend utilizando herramientas como mongoDB, FireBase, nodeJS .</Fragment>,
        <Fragment key={3}>Estoy en busca de Experiencia realizando proyectos como <strong className='aboutme__text--decorated'>Freelance</strong>, Colaborando 👥 con colegas de la industria.</Fragment>,
        <Fragment key={4}>Mi método de <strong className='aboutme__text--decorated'>Trabajo</strong> se basa en la Cooperación y en la Organización 🗃️, sin dejar de lado la Eficiencia.</Fragment>,
        <Fragment key={5}>Me gusta <strong className='aboutme__text--decorated'>Aprender</strong> cosas nuevas todos los días, para renovar mis maneras de trabajar y ser capaz de encontrar la mejor Solución 💡.</Fragment>
      ]
    },
    skills: {
      tech: 'Tecnologías',
      tool: 'Herramientas'
    },
    works: {
      title: 'Proyectos'
    },
    footer: {
      copy: 'Todos los derechos reservados'
    }
  },
  // prettier-ignore
  en: {
    header: {
      home: 'Home',
      about: 'About Me',
      skills: 'Skills',
      works: 'My Projects'
    },
    home: {
      title: 'Hi 👋! I\'m',
      developer: 'Full Stack Web Developer'
    },
    about: {
      title: 'About Me',
      text: [
        <Fragment key={1}>I&#39;m <strong className='aboutme__text--decorated'>Full Stack Web Developer 👨🏻‍💻</strong>, passionate about combining technicality with aesthetics to create user-friendly and intuitive interfaces with the best performance.</Fragment>,
        <Fragment key={2}>I develop dynamic interfaces with React and CSS, as well as other tools such as Material UI, Bootstrap, and SCSS. I also have knowledge in backend development using tools such as MongoDB, Firebase, and Node.js.</Fragment>,
        <Fragment key={3}>I am seeking experience as a <strong className='aboutme__text--decorated'>Freelancer</strong>, working on projects with other industry professionals 👥.</Fragment>,
        <Fragment key={4}>My <strong className='aboutme__text--decorated'>Work</strong> approach is based on Cooperation and Organization 🗃️, while maintaining Efficiency.</Fragment>,
        <Fragment key={5}>I enjoy <strong className='aboutme__text--decorated'>Learning</strong> new things every day to refresh my work methods and be able to find the best Solution 💡.</Fragment>
      ]
    },
    skills: {
      tech: 'Technologies',
      tool: 'Tools'
    },
    works: {
      title: 'Projects'
    },
    footer: {
      copy: 'All rights reserved'
    }
  }
}
