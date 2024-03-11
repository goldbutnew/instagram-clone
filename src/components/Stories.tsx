import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const StoryContainer = styled.View`
    flex-direction: column;
    padding-horizontal: 8px;
    position: relative;
`;

const CircleIcon = styled(Entypo)`
    font-size: 20px;
    color: #405de6;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
`;

const ProfileImageContainer = styled.View`
    width: 68px;
    height: 68px;
    background-color: white;
    border-width: 1.8px;
    border-radius: 100px;
    border-color: #c13584;
    justify-content: center;
    align-items: center;
`;

const ProfileImage = styled(Image)`
    resize-mode: cover;
    width: 92%;
    height: 92%;
    border-radius: 100px;
    background-color: orange;
`;

const StyledText = styled.Text`
    text-align: center;
    font-size: 10px;
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const Stories = () => {
    const navigation = useNavigation();
    const storyInfo = [
        {
            id: 1,
            name: '나의 스토리',
            image: require('../../assets/images/userProfile.jpeg'),
        },
        {
            id: 0,
            name: 'john',
            image: require('../../assets/images/profile1.jpeg'),
        },
        {
            id: 0,
            name: 'tonny',
            image: require('../../assets/images/profile2.jpeg'),
        },
        {
            id: 0,
            name: 'daniel',
            image: require('../../assets/images/profile3.jpeg'),
        },
        {
            id: 0,
            name: 'sojeong',
            image: require('../../assets/images/profile4.jpeg'),
        },
        {
            id: 0,
            name: 'jaeho',
            image: require('../../assets/images/profile5.jpeg'),
        },
    ];

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 20 }}>
            {storyInfo.map((data, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            navigation.push('Status', {
                                name: data.name,
                                image: data.image,
                            })
                        }>
                        <StoryContainer>
                            {data.id == 1 && (
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 15,
                                        right: 10,
                                        zIndex: 1,
                                    }}>
                                    <CircleIcon name="circle-with-plus" />
                                </View>
                            )}
                            <ProfileImageContainer>
                                <ProfileImage source={data.image} />
                            </ProfileImageContainer>
                            <StyledText isActive={data.id == 1}>{data.name}</StyledText>
                        </StoryContainer>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default Stories;
