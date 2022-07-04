import { styled } from '@mui/material'
import  { Link } from 'react-router-dom'

import Form from '../components/landing/Form'

import Logo from '../media/landing/logo.png'
import Welcome from '../media/landing/welcome.png'


const PageContainer = styled('div')({
    width: '75vw',
    margin: '0 auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
})

const LogoContainer = styled('div')({
    width: '100%',
    paddingTop: '20px',
    height: '5%'
})

const ContentContainer = styled('div')({
    width: '100%',
    height: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
})

export default function Landing(){
    return(
        <PageContainer>
            <LogoContainer>
                <img src={Logo} width="40px" height="40px" />
            </LogoContainer>
            <ContentContainer>
                <Form/>
                <img src={Welcome} width= "600px" height= '560px'/>
            </ContentContainer>
        </PageContainer>
    )
}