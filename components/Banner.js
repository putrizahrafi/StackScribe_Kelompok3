import { Box, Image } from 'native-base';
import React from 'react';

const Banner = ({source}) => {
    return (
        <Box>
            <Image
                source={source}
                height={150}
                borderRadius={20}
                alt='banner'
                width={"300"}
                mr={4}
            />
        </Box>
    )
}

export default Banner