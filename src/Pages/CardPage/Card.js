import { Box, IconButton, Stack } from '@mui/material';
import React from 'react';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Products } from '../../fakeDb/Product';
import SingleProduct from '../../Components/CardPage/SingleProduct';

const Card = () => {
    return (
        <Box width="100%">
            <Stack direction='row' width="80%" spacing={0.2} justifyContent='flex-end' sx={{ margin: 'auto' }}>
                <IconButton
                    aria-label="Bookmark"
                    sx={{ bgcolor: '#fff', color: '#171820', borderRadius: 1, ':hover': { bgcolor: '#f7f7f7' } }}>
                    <DisplaySettingsIcon />
                </IconButton>
                <IconButton
                    aria-label="Bookmark"
                    sx={{ bgcolor: '#fff', color: '#171820', borderRadius: 1, ':hover': { bgcolor: '#f7f7f7' } }}>
                    <BookmarksIcon />
                </IconButton>
            </Stack>
            <Stack alignItems="center" justifyContent="center" mt={2} width="100%">
                <Stack width="80%" flexWrap="wrap" direction="row" alignItems="center" gap={9} justifyContent="center">
                    {Products.map((singleProduct) => (
                        <SingleProduct key={singleProduct.id} singleProduct={singleProduct} />
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default Card;