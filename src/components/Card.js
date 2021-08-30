import { Card } from 'react-bootstrap';

export default function CardCustom({header, imageSrc, content}) {
    // the content is string
    if (typeof(content) === 'string') {
        return (
            <Card className="bg-dark text-white" style={{ width: '30rem',marginTop:'2rem' }}>
                <Card.Img variant="top" src={imageSrc} width='300' height='300' />
                <Card.Body>
                  <Card.Title>{header}</Card.Title>
                  <Card.Text >
                    {content}
                  </Card.Text>
                </Card.Body>
            </Card>
        );
    }
    // the content is an array of items
    else if(typeof(header) ==='string' )  {
        return (
            <Card className="bg-dark text-white" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={imageSrc} width='300' height='300'/>
            <Card.Body>
              <Card.Title>{header}</Card.Title>
              <Card.Text style= {{textAlign:'left'}} >
                <ul>
                  {content.map(item => <li>{item}</li>)}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        );
    }
    else {
        const c = content.map ((o,i) => 
            <div>
                <Card.Title>{o.header}</Card.Title>
                <Card.Text style= {{textAlign:'left'}}>
                    <ul>
                    {o.items.map(item => <li style= {{fontSize:'14px'}}>{item}</li>)}
                    </ul>
                </Card.Text>
            </div>
        );
        return (
            <Card className="bg-dark text-white" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={imageSrc} width='300' height='300'/>
            <Card.Body>
                {c}
            </Card.Body>
          </Card>
        );
    }
}