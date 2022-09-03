import { styled } from '@mui/material'
import ConversationFeed from '../components/dashboard/ConversationFeed'
import MessageFeed from '../components/dashboard/MessageFeed'
import RouterProtection from '../components/RouterProtection'

const PageContainer = styled('div')({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    overflowX: 'hidden',
    overflowY: 'hidden'
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

export default function Dashboard(){       
    return (
        <RouterProtection>
            <PageContainer>
                <MenuContainer>
                    <ConversationFeed />
                </MenuContainer>
                <MessageContainer>
                    <MessageFeed/>
                </MessageContainer>
            </PageContainer>
        </RouterProtection>
    )
}