import { Box, Stack, IconButton } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

const SingleProduct = ({ singleProduct }) => {

    return (
        <Stack direction='column'
            sx={{
                height: 'auto',
                minHeight: 250,
                width: '100%',
                maxWidth: { md: '20%', sm: '40%', xs: '100%' },
                borderRadius: 3,
                background: 'yellow',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}>
            <Box component="img"
                alt="This is a dog art"
                flexGrow={1}
                boxSizing="border-box"
                flexWrap="wrap"
                src={singleProduct.img}
                sx={{
                    height: 167,
                    width: 250,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                    margin: 'auto',
                    borderRadius: 3,
                    position: 'relative'
                }} >
            </Box>

            <h4>{singleProduct.name}</h4>
            <IconButton
                aria-label="edit"
                sx={{ bgcolor: '#fff', position: 'absolute', borderRadius: 1, ':hover': { bgcolor: '#f7f7f7' } }}>
                <EditIcon />
            </IconButton>
        </Stack >
    );
};

export default SingleProduct;