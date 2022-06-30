import { styled} from "@mui/material";
import ProfilePic from '../ProfilePic'


const MessageContainer = styled('div')({
    width: '95%',
    height: '65px',
    borderRadius: '10px',
    backgroundColor: 'white',
    transition: '0.2s ease-in-out',
    padding: '4px',
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
    marginLeft: '35px',
    border: '1px solid black',
    height: 'fit-content'
})

const Title = styled('h3')({
    fontWeight: 400,
    border: '1px solid black',
})

const SubTitle =styled('p')({
    fontWeight: 400,
    border: '1px solid black',
    marginBottom: '5px'
})


export default function Message({imageSrc}){
    return (
        <MessageContainer>
            <ProfilePic imageSrc={imageSrc}/>
            <TextContainer>
                <Title>Name</Title>
                <SubTitle>Description</SubTitle>
            </TextContainer>
        </MessageContainer>
    )
}