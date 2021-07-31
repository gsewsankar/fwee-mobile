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
                title: 'Let\'s go!',
                subtitle: 'Press Done',
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