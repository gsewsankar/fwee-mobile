import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const Dashboard = ({navigation}) => {
    const[balance,setBalance] = useState(0);

    const db = firebase.firestore();

    db.collection('users').doc('EVZgg8caaubmQ4luRf4OIMq9FqO2').get().then((ss)=>{
        setBalance(ss.data().balance);
    });
    
    return(
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <Text>Balance: {balance}</Text>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});