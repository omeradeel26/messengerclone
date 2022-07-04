import { styled} from "@mui/material";
import ProfilePic from '../ProfilePic'


const MessageContainer = styled('div')({
    width: '95%',
    height: '55px',
    borderRadius: '10px',
    backgroundColor: 'white',
    transition: '0.2s ease-in-out',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: "#F5F5F5",      
        cursor: 'pointer'          
    },
    marginTop: '13px'
})

const TextContainer = styled('div')({
    width: '80%',
    marginLeft: '22px',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
})

const Title = styled('h3')({
    fontWeight: 400,
    display: 'block',
    margin: 0,
    fontSize: '16px',
    marginTop: '5px',
    marginBottom: '7px'
})

const SubTitle =styled('p')({
    fontWeight: 400,
    display: 'block',
    margin: 0,
    fontSize: '12px'
})


export default function Message({imageSrc, name, message}){
    return (
        <MessageContainer>
            <ProfilePic imageSrc={imageSrc} width="40px" height="40px"/>
            <TextContainer>
                <Title>{name}</Title>
                <SubTitle>{message}</SubTitle>
            </TextContainer>
        </MessageContainer>
    )
}