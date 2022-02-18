import React from 'react';
import { colors } from '../utils/colors';
import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


import homeIcon from '../../assets/home_white_24dp';
import statsIcon from '../../assets/insights_black_24dp';
import settingsIcon from '../../assets/settings_black_24dp';



const NavBar = () => {
	return (
		<View style={styles.navBarContainer}>
			<SvgXml xml={homeIcon} width={30} fill={colors.disabled}/>
			<SvgXml xml={statsIcon} width={30} fill={colors.disabled}/>
			<SvgXml xml={settingsIcon} width={30} fill={colors.disabled}/>
		</View>
	);
};

export default NavBar;

const styles = StyleSheet.create({
	navBarContainer: {
		backgroundColor: colors.white,
        flex:1,
		width:'100%',
		borderRadius:15,
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems: 'center',
	},
});
