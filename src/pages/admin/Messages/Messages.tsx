import React from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { supabase } from '../../../utils/supabaseClient';
import TablePlaceHolder from '../../../components/placeHolder/TablePlaceHolder';

interface MessagesType {
  lastName: string
  firstName: string
  email: string
  objet: string
  message: string
}

const Messages = () => {

    // const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [messages, setMessages] = React.useState<MessagesType[]>([]);
    const [selectedMessage, setSelectedMessage] = React.useState<MessagesType>({} as MessagesType);


    React.useEffect(() => {
        getmsg()
    }, [])

 
    const getmsg = async () => {
        const { data: msg, error } = await supabase.from('Zmessages').select('*')
    setIsLoading(true)
    if (msg) {
        setMessages(msg)
        setIsLoading(false)

        }
        if (error) {
          console.log(error)
        }
    }
    
  return (
    <Col xs={10}>
      {selectedMessage !== undefined ? (
        <Container fluid>
          <Container className='my-3'>
            <Row>
              <Col xs={1} className='m-auto'>
                <Button variant='transparent' onClick={() => setSelectedMessage({} as MessagesType)}>
                  
                  <i className='ri-arrow-left-line fs-5 '></i>
                </Button>
              </Col>
              <Col className='m-auto'>
              de :   {selectedMessage?.firstName} {''}
                {selectedMessage?.lastName}
              </Col>
              <Col className='text-end m-auto'>email : {selectedMessage?.email}</Col>
            </Row>
            objet : {selectedMessage?.objet}
          </Container>
          <Card>
            <Container className='p-5'>{selectedMessage.message === null ? "Auncun message" : selectedMessage.message}</Container>
          </Card>
        </Container>
      ) : (
        <Container fluid>
          <h4><i className='ri-mail-line'></i>{' '}Messages</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Objet</th>
                <th>Messge</th>
                <th>Modifier</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <TablePlaceHolder row={10} col={6} />
              ) : (
                messages?.map((msg: MessagesType, indx: number) => (
                  <tr key={indx} onClick={() => setSelectedMessage(msg)}>
                    <td>{msg?.lastName}</td>
                    <td>{msg?.firstName}</td>
                    <td>{msg?.email}</td>
                    <td>{msg?.objet}</td>
                    <td>{(msg?.message)?.slice(0, 20) + "..."}</td>
                    <td>id</td>
                    <td>id</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Container>
      )}
    </Col>
  )
}

export default Messages
