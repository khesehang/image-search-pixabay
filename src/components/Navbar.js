import { AppBar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <AppBar  sx={{p:2}}>
                <Typography >Pixabay Image Finder</Typography>
            </AppBar>
        </div>
    )
}

export default Navbar