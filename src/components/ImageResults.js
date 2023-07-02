import { Button, Dialog, Grid, IconButton, ListItem, Paper, Typography } from '@mui/material';
import React, { Component } from 'react'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import styled from '@emotion/styled';
import PropTypes from 'prop-types'

export default class ImageResults extends Component {

    state = {
        open: false,
        currentImg: ''
    }

    handleOpen = img => {
        this.setState({ open: true, currentImg: img })
    }
    handleClose = () => {
        this.setState({ open: false })
    }

    render() {
        let imageListContent;
        const { images } = this.props;

        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            width: 300,
            height: 200,
            margin: '5px 10px',
            overflow: 'hidden',
        }));

        if (images) {
            imageListContent = (
                <Grid container spacing={3} display='flex' justifyContent='center' mt={10}  >
                    {images.map(img => (
                        <Item

                        
                        >
                            <Typography>{img.tags}<span>by<strong>{img.user}</strong></span></Typography>
                            <img src={img.largeImageURL} sx={{ width: '100%', height: '100%'}} alt="" fullWidth={true}
                            /> <IconButton
                                onClick={() => this.handleOpen(img.largeImageURL)}
                                sx={{ mt: '-150px', fontWeight: '700', color: 'red' }}
                            >
                                <ZoomInIcon color="white" />
                            </IconButton>
                        </Item>
                    ))}
                </Grid>
            )
        } else {
            imageListContent = null
        }



        return (
            <div sx={{ flexGrow: 1 }}>
                {imageListContent}
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.currentImg} alt='' style={{ with: '100%' }} />
                    <Button variant="text" onClick={this.handleClose} >Close</Button>
                </Dialog>
            </div>
        )
    }
}

// ImageResults.prototype = {
//     images: PropTypes.array.isRequired
// }