import { styled } from '@mui/material'

import MessageNav from '../components/dashboard/MessageNav'

const PageContainer = styled('div')({
    width: '100vw',
    height: '100vh',
    display: 'flex'
})

const MenuContainer = styled('div')({
    width: '22.5%',
    height: '100%',
    borderRight: '1px solid lightgrey'
})

const MessageContainer = styled('div')({
    width: '77.5%',
    height: '100%'
})

export default function Dashboard(){
    return (
        <PageContainer>
            <MenuContainer>
                <MessageNav/>
                
            </MenuContainer>
            <MessageContainer>

            </MessageContainer>
        </PageContainer>
    )
}