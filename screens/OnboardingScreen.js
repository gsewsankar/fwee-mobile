import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#add4bc',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Welcome to Free World Exchange',
                subtitle: 'Ready to fix the world?',
            },
            {
                backgroundColor: '#8c918e',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Gain 0.01 credits EVERY Minute!',
                subtitle: 'forever',
            },
            {
                backgroundColor: '#8c918e',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Design Your Store',
                subtitle: 'make it fresh',
            },
            {
                backgroundColor: '#8c918e',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Upload Your Content',
                subtitle: 'Art, Music, Stories, Games, Apps & Everything else',
            },
            {
                backgroundColor: '#8c918e',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Set Your Prices',
                subtitle: 'the value of time credits are deterined by the users',
            },
            {
                backgroundColor: '#8c918e',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Unlock and Discover New Content',
                subtitle: 'amazing 3d looking and artistic unlocking animation',
            },
            {
                backgroundColor: '#8c918e',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Get Recognition on the Leaderboards',
                subtitle: 'people who gain the most support from the community will get on the leaderboards',
            },
            {
                backgroundColor: '#8c918e',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'What are you waiting for?',
                subtitle: 'Stop Wasting Time,start using it, Let\'s Go',
            },
        ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});