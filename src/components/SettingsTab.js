import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { SvgXml } from 'react-native-svg';
import arrow from '../../assets/Arrow';

const SettingsTab = ({ route, icon, title }) => {
	return (
		<View style={styles.container}>
			<View style={{flexDirection:'row'}}>
				<SvgXml xml={icon} fill={colors.disabled} />
				<Text style={styles.tabText}>{title}</Text>
			</View>
			<SvgXml xml={arrow} fill={colors.disabled} />
		</View>
	);
};

export default SettingsTab;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		minHeight: 60,
		alignItems: 'center',
		flexDirection: 'row',
        justifyContent: 'space-between',
		marginBottom: 30,
		borderRadius: 10,
		padding: 10,
		paddingLeft: 20,
        paddingRight: 20
	},
	tabText: {
		color: colors.disabled,
		paddingLeft: 10,
	},
});
