import { styled } from '@mui/material'

import MessageNav from '../components/dashboard/MessageNav'
import Message from '../components/dashboard/Message'
import imageSrc from '../logo192.png'

const PageContainer = styled('div')({
    width: '100vw',
    height: '100vh',
    display: 'flex'
})

const MenuContainer = styled('div')({
    width: '22.5%',
    height: '100%',
    borderRight: '1px solid lightgrey',
    padding: '8px'
})

const MessageContainer = styled('div')({
    width: '77.5%',
    height: '100%',
})

const DMContainer = styled('div')({
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
})

export default function Dashboard(){
    return (
        <PageContainer>
            <MenuContainer>
                <MessageNav/>
                <DMContainer>
                    <Message imageSrc={imageSrc}/>
                </DMContainer>
            </MenuContainer>
            <MessageContainer>
            </MessageContainer>
        </PageContainer>
    )
}