import React, { Dispatch, SetStateAction } from 'react'
import { Container } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import NavBar from '../../ui/NavBar'
import LoadingStud from '../../loading/LoadingStud';

type navBarType = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const PublicLayout = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);


  const navBarProps: navBarType = {isDarkTheme, setIsDarkTheme}

  return (
    <Container fluid id='layout-wrapper' className='px-0' data-bs-theme="">
      <React.Suspense fallback={<LoadingStud />}>
      <NavBar navBarProps={navBarProps} />
        <Outlet
          context={{
            isDarkTheme,
            setIsDarkTheme,
          }}
        />
      </React.Suspense>
    </Container>
  )
}

export default PublicLayout
