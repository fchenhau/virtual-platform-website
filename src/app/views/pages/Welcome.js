import React, { Component } from 'react';
import { Image } from "react-native";
import { View, Text } from 'native-base';
import * as styles from '../../lib/styles';
import { Actions } from 'react-native-router-flux';
import PrimaryButton from "../components/PrimaryButton";

import WelcomeImg from "../../assets/images/Welcome/Welcome.png";

import { withTranslation } from "react-i18next";

const Welcome = ({ username, t: trans }) => {
    
    const next = () => {
        Actions.Home();
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <Image source={WelcomeImg} 
                    resizeMode="contain" 
                    style={{ width: "100%", height: "100%" }} />
            </View>

            <View style={{ flex: 1, paddingHorizontal: 60, alignItems: 'center' }}>
                <Text style={{ fontSize: styles.font_header, fontWeight: 'bold', lineHeight: 32, marginBottom: 10, textAlign: 'center' }}>
                    Welcome {username || 'Customer Name'}
                </Text>
                <Text style={{ fontSize: styles.font_medium, lineHeight: 20, textAlign: 'center', color: styles.grey }}>
                    Have some mess today?
                </Text>
                <Text style={{ fontSize: styles.font_medium, lineHeight: 20, textAlign: 'center', color: styles.grey }}>
                    Don't worry, now you are part of Helpee Service. Lets us help you.
                </Text>
            </View>

            <View style={{ flex: 1, paddingHorizontal: 60, justifyContent: 'center' }}>
                <PrimaryButton
                    title="Next"
                    onPress={next}
                />
            </View>
        </View>
    )
}

export default withTranslation("translations")(Welcome);