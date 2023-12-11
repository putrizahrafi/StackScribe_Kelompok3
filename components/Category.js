import { Box, Image, Text } from 'native-base';
import React from 'react';

const Category = ({ source, name }) => {
    return (
        <Box>
            <Image
                source={{ uri: source }}
                size={45}
                alt='mosque'
                mr={10}
            />
            <Text fontSize={14} fontWeight={"medium"}>{name}</Text>
        </Box>
    )
}

export default Category