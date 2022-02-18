import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import SettingsTab from '../components/SettingsTab';
import { SvgXml } from 'react-native-svg';

import timerIcon from '../../assets/timer_black_24dp';
import accountIcon from '../../assets/manage_accounts_black_24dp';
import NavBar from '../components/NavBar';

const Settings = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors.background}
				style={styles.linearGradient}
				start={{ x: 0.7, y: 0 }}>
				<SafeAreaView
					style={{ alignItems: 'center', flexDirection: 'column', flex: 1 }}>
					<View
						style={{
							width: '80%',
							marginTop: 40,
							flex: 8,
						}}>
						<Text style={styles.title}>Settings</Text>
						<View>
							<SettingsTab title={'Account'} icon={timerIcon} />
							<SettingsTab title={'Timer'} icon={accountIcon} />
						</View>
					</View>
					<View
						style={{
							width: '80%',
							alignItems: 'center',
							flex: 1,
						}}>
						<NavBar />
					</View>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	linearGradient: {
		flex: 1,
	},
	title: {
		fontFamily: fonts.heading,
		fontSize: 40,
		color: colors.white,
		fontWeight: 'bold',
		marginBottom:40
	},
});
