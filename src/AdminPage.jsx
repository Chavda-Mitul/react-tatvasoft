import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function cliked(){
    alert('clicked');
}
export function AdminPage(){
    return(
        <>
        <div>
            <h1>Admin Page</h1>
        </div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button variant="contained" onClick={cliked}>Button</Button>
    
    </>
    )
}