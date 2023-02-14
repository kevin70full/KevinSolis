import { ImHtmlFive } from 'react-icons/im'
import { SiCss3, SiJavascript, SiReact, SiMaterialui, SiFirebase, SiMongodb} from 'react-icons/si'

export const works = [
  {
    name: 'Lading de Venta',
    description: {
      es: 'Una web para una empresa de fotografia profesional.',
      en: 'A website for a professional photography company..'
    },
    tech: [
      <ImHtmlFive
        key={1}
        className='project__icon'
        color='#e56027'
      />,
      <SiCss3
        key={2}
        className='project__icon'
        color='#2760e5'
      />,
      
    ],
    img: '/img/lading_de_venta.jpg',
    deploy: 'https://kevin70full.github.io/Lading-de-Venta.github.io/',
    github: 'https://github.com/kevin70full/Lading-de-Venta.github.io'
  },

  {
    name: 'CRUD',
    description: {
      es: 'Una web para una empresa publica del estado.',
      en: 'A website for a state public company'
    },
    tech: [
      <ImHtmlFive
        key={1}
        className='project__icon'
        color='#e56027'
      />,
      <SiCss3
        key={2}
        className='project__icon'
        color='#2760e5'
      />,
      <SiJavascript
        key={3}
        className='project__icon'
        color='#2760e5'
      />,
      
    ],
    img: '/img/CRUD.jpg',
    deploy: 'https://kevin70full.github.io/crud.github.io/',
    github: 'https://github.com/kevin70full/crud.github.io'
  },
  {
    name: 'Restaurante',
    description: {
      es: 'Una web para un restaurante.',
      en: 'A website for a restaurant'
    },
    tech: [
      <SiReact
        key={1}
        className='project__icon'
        color='#e56027'
      />,
      <SiCss3
        key={2}
        className='project__icon'
        color='#2760e5'
      />,
      <SiFirebase
        key={3}
        className='project__icon'
        color='#2760e5'
      />,
      <SiJavascript
        key={4}
        className='project__icon'
        color='#2760e5'
      />,
      
    ],
    img: '/img/restaurante.jpg',
    deploy: 'https://kevin70full.github.io/restaurante.github.io/',
    github: 'https://github.com/kevin70full/restaurante.github.io'
  },
  {
    name: 'Ecommerce',
    description: {
      es: 'Una web para una empresa de ventas de zapatos deportivos',
      en: 'A website for a sports shoe sales company'
    },
    tech: [
      <SiReact
        key={1}
        className='project__icon'
        color='#e56027'
      />,
      <SiCss3
        key={2}
        className='project__icon'
        color='#2760e5'
      />,
      <SiMongodb
        key={3}
        className='project__icon'
        color='#2760e5'
      />,
      <SiJavascript
        key={4}
        className='project__icon'
        color='#2760e5'
      />,
      <SiMaterialui
        key={5}
        className='project__icon'
        color='#2760e5'
      />,
    ],
    img: '/img/ecommerce.jpg',
    deploy: 'https://kevin70full.github.io/ecommerce-front/',
    github: 'https://github.com/kevin70full/ecommerce-front'
  }
]
