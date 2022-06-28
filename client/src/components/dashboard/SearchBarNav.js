import SearchIcon from '@mui/icons-material/Search';

export default function SearchBarNav(){

    const changeStyle = () => {
        return
    }


    return(
        <input 
            style={{
                padding: '4px',
                borderRadius: '18px',
                backgroundColor: '#F3F3F5',
                border: 'none',
                height: '26px',
                fontSize: '14px',
                paddingLeft: '30px',
                color: '#65676B',
                outline: 'none', 
                position: 'relative'

            }}    
            placeholder="Search Messenger"    

            onFocus={changeStyle}
        >
            <SearchIcon/>
        </input>
    )
}