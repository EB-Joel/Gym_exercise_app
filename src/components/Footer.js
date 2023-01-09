import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ButtonMailto from './ButtonMailto';

const Footer = () => (
  <Box mt="80px" bgcolor="#bfbfbf">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      bodypart icons by Icons8
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="20px">WebApp Made by Eric Berroa</Typography>
    <Typography variant="body1" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="2px" textAlign="center" pb="10px"><ButtonMailto email="EricBerroa@gmail.com" >Contact Me</ButtonMailto></Typography>
  </Box>
);

export default Footer;