import React from 'react';
import * as styles from '../../lib/styles';
import { Button } from 'react-native-elements';

const PrimaryButton = ({ title, type, onPress, loading }) => {

    return (
        <Button
            title={title}
            type={type}
            onPress={onPress}
            loading={loading}
            buttonStyle={{ 
                backgroundColor: styles.orange, 
                paddingVertical: 15, 
                borderRadius: 10
            }}
            titleStyle={{
                color: styles.white, 
                fontSize: styles.font_medium, 
            }}
        />
    )
};

export default (PrimaryButton);