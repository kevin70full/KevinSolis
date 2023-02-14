import { SocialLink } from '../SocialLink/SocialLink'
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'

const SocialMedia = () => (
  <div className='socialmedia'>
    <SocialLink
      label='LinkedIn'
      href='https://www.linkedin.com/in/kevin-solis-castillo-a173b5127/'
    >
      <BsLinkedin className='socialmedia__icon' />
    </SocialLink>
    <SocialLink
      label='GitHub'
      href='https://github.com/kevin70full'
    >
      <BsGithub className='socialmedia__icon' />
    </SocialLink>
    
    <SocialLink
      href='mailto:soliskevin903@gmail.com'
      label='Email'
    >
      <IoMdMail className='socialmedia__icon' />
    </SocialLink>
  </div>
)

export { SocialMedia }
