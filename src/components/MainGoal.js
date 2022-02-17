import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const MainGoal = ({text, subGoalNumber}) => {
	return (
		<View style={styles.goalContainer}>
			<Text style={styles.goalText}>{text}</Text>
			<Text>{subGoalNumber} Sub Goals</Text>
		</View>
	);
};

export default MainGoal;

const styles = StyleSheet.create({
	goalContainer: {
		width: '100%',
		backgroundColor: colors.white,
        height:60,
        justifyContent: 'center',
        marginBottom:30,
        borderRadius:10,
        paddingLeft:20
	},
    goalText:{
        fontSize:10
    }
});
