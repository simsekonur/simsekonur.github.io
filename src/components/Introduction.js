import { SocialIcon } from 'react-social-icons';

export default function Introduction({name, role}) {
    return (
        <div style = {{color:'white'}}>
            <h1>{name}</h1>
            <h3>{role}</h3>
            <SocialIcon url='https://www.linkedin.com/in/onur-%C5%9Fim%C5%9Fek-7566a7170/' bgColor='white' style={{marginRight:'8px'}}/>
            <SocialIcon url='https://github.com/simsekonur' bgColor='white' style={{marginRight:'8px'}} />
            <SocialIcon url='https://www.instagram.com/smsk_onur/' bgColor='white' className='fas fa-square-full' />
        </div>
    );
}