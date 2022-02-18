import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { SvgXml } from 'react-native-svg';

import openIcon from '../../assets/play_arrow_black_24dp';

const MainGoal = ({ text, subGoalNumber }) => {
	return (
		<View style={styles.goalContainer}>
			<Text style={styles.goalText}>{text}</Text>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text
					style={{
						fontFamily: fonts.lightBody,
						fontSize: 11,
						color: colors.grey,
						paddingRight: 10,
					}}>
					<Text style={styles.goalNumber}>{subGoalNumber}</Text> Sub Goals
				</Text>
				<SvgXml xml={openIcon} fill={colors.grey} width={15} />
			</View>
		</View>
	);
};

export default MainGoal;

const styles = StyleSheet.create({
	goalContainer: {
		minWidth: '100%',
		backgroundColor: colors.white,
		minHeight: 60,
		justifyContent: 'center',
		marginBottom: 30,
		borderRadius: 10,
		padding:10,
		paddingLeft: 20,
	},
	goalText: {
		fontFamily: fonts.body,
		fontSize: 15,
		color: colors.grey,
		paddingBottom: 3,
	},
	goalNumber: {
		fontFamily: fonts.body,
	},
});
