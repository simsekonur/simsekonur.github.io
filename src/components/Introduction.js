import { SocialIcon } from 'react-social-icons';

export default function Introduction({name, role}) {
    return (
        <div style = {{color:'white'}}>
            <h1 style= {{fontSize:'40px'}}>{name}</h1>
            <h3 style= {{fontSize:'24px'}}>{role}</h3>
            <SocialIcon url='mailto:onursimsek0643@gmail.com?Subject=About%20meeting' bgColor='white' style={{marginRight:'8px'}} />
            <SocialIcon url='https://github.com/simsekonur' bgColor='white' style={{marginRight:'8px'}} />
            <SocialIcon url='https://www.linkedin.com/in/simsek-onur' bgColor='white' style={{marginRight:'8px'}} />
            <SocialIcon url='https://www.instagram.com/smsk_onur/' bgColor='white'/>
        </div>
    );
}
