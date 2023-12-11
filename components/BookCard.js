import { View } from 'react-native';
import React from 'react';
import { Box, HStack, Heading, Image, Text } from 'native-base';

const BookCard = ({ source, title, author }) => {
    return (
        <Box alignItems={"center"} mr={8}>
            <Image
                source={source}
                height={150}
                width={120}
                alt='book'
                borderRadius={20}
            />
            <Heading size={"sm"}>{title}</Heading>
            <Text fontSize={12} fontWeight={"light"}>{author}</Text>
            <HStack>
                <Image
                    source={{ uri: 'https://img.icons8.com/fluency/96/star--v1.png' }}
                    height={15}
                    width={15}
                    alt='star'
                />
                <Image
                    source={{ uri: 'https://img.icons8.com/fluency/96/star--v1.png' }}
                    height={15}
                    width={15}
                    alt='star'
                />
                <Image
                    source={{ uri: 'https://img.icons8.com/fluency/96/star--v1.png' }}
                    height={15}
                    width={15}
                    alt='star'
                />
                <Image
                    source={{ uri: 'https://img.icons8.com/fluency/96/star--v1.png' }}
                    height={15}
                    width={15}
                    alt='star'
                />
            </HStack>
        </Box>
    )
}

export default BookCard