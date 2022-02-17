import React from 'react';
import { colors } from '../utils/colors';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const NavBar = () => {
	return (
		<View style={styles.navBarContainer}>
			<Text>NavBar</Text>
		</View>
	);
};

export default NavBar;

const styles = StyleSheet.create({
	navBarContainer: {
		backgroundColor: colors.white,
        width:'80%'
	},
});
