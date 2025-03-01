import React from 'react'
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap'
import { supabase } from '../../../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { authAdminType } from '../../../types/types';
import adminUserStore, { UserState } from '../../../stores/adminUserStore';


const Auth = () => {

  const navigate = useNavigate()

  // const dataStore = adminUserStore((state: UserState) => state)
  const authLogin = adminUserStore((state: UserState) => state.authLogin)

    const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isShow, setIsShow] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState<authAdminType>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: authAdminType) => {
        return{
                ...prev,
                [e.target?.name]:e.target?.value
            }
        })

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setIsError(false)

       try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })
          console.log(data)
          if(data?.session?.user?.aud === "authenticated" ){
            getUserData(data?.session?.user?.email)
            setIsError(false)
            setIsLoading(false)
            navigate("/admin")
          }
          if(error){
            setIsError(true)
        setIsLoading(false)

            console.log(error)
          }
       } catch (error) {
        console.log("Errorss   : " + error)
        setIsLoading(false)

       }
    }

    const getUserData = async(userEmail: string | undefined) => {
      const { data: users, error } = await supabase
        .from("users")
        .select("first_name, last_name, role, id")
        .eq("email", userEmail)
        .single();
        console.log(error)
  

  if(users){
    console.log(users)
   
    authLogin(
      users?.id,
      users.first_name,
      users?.last_name,
      null,
      users?.role,
      userEmail
    );
  }

    }


  return (
    <Container className='pt-5 vw-100 vh-100 '>
      <Container className='pt-5'>
        <Row>
          <Col></Col>
          <Col xs={12} md={8} lg={5} xl={4}>
            <Card className='p-4 shadow'>
              <Card.Title className='text-center'>
                <i className='ri-fire-line fs-4'></i> Identifiez-vous
              </Card.Title>
              <Container>
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Identifiant'
                    className='mb-3'
                    onChange={handleChange}
                  />
                  <InputGroup className="mb-3">
                  <Form.Control
                    type={isShow ? 'text'  : 'password'}
                    name='password'
                    aria-describedby="basic-addon1"
                    placeholder='Mot de passe'
                    onChange={handleChange}
                    />
                  <InputGroup.Text id="basic-addon1" className='py-0'
                  onClick={() => setIsShow(!isShow)}
                  >
                    {isShow ? 
                  <i className='ri-eye-line'></i>
                  :
                  <i className='ri-eye-off-line'></i>

                }
                  </InputGroup.Text>
                    </InputGroup>
      
                  {isError && (
                    <Alert variant='danger'>
                      <i className='ri-alert-line fs-4'></i>Vos Identifiants sont incorrects
                    </Alert>
                  )}
                  <Button variant='outline-secondary' type='submit' className='mb-3 w-100'>
                    {isLoading && <Spinner size='sm' />} connexion
                  </Button>
                </Form>
              </Container>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Auth
