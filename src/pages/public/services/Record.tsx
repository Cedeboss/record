import { Container, Image } from 'react-bootstrap';
import ad1 from '../../styles/ima ges/enregistrement.jpg'


const Record = () => {

return (
    <>
    <Container fluid className="px-0">
        <div className="ze-title pt-5 mt-5">
          <h1 className="text-light-secondary">Sculpter le son </h1> 
          <p className="text-light">Et plonger dans l'univers de l'enregistrement</p>
        </div>
        <Image
          src={ad1}
          height={350}
          className="d-block vh-100 w-100"
          alt="image de fond"
        />
      </Container>
      
    </>
)

}

export default Record