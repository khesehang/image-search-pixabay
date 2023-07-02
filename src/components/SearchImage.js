import { MenuItem, Select, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import React, { Component } from 'react'
import ImageResults from './ImageResults'

export default class SearchImage extends Component {

    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apikey: '37978536-34a82dbab2b455e790fb53c72',
        images: [],

    }


    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&sagesearch=true`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err))
            }
        })
    }
    onAmountChange = (value) => this.setState({ amount: value });

    render() {
        console.log('text', this.state.images, this.state.amount)
        return (
            <div>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField
                    name='searchText'
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    label="Search For Images..."
                    variant="standard"
                    fullWidth={true}
                    sx={{ margin: '20px 0' }}
                />
                <br />
                <Typography>Amount to Show</Typography>
                <Select
                    value={this.state.amount}
                    label="Amount"
                    onChange={(e) => this.onAmountChange(e.target.value)}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
                <br />
                {this.state.images.length > 0 ? (
                    <ImageResults images={this.state.images} />
                ) : null}
            </div>
        )
    }
}
