import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../utils/colors';

const Timer = ({ goal }) => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors.background}
				style={styles.linearGradient}
				start={{ x: 0.7, y: 0 }}>
				<SafeAreaView>
					<View style={{ width: '80%' }}>
						<View style={styles.goalTitle}>
							<Text style={styles.goalTitleText}>{goal}</Text>
						</View>
						<View style={styles.timerOuter}>
								<LinearGradient style={styles.timerInner} colors={colors.background} start={{ x: 0.7, y: 0 }}>
									<Text>41:75</Text>
								</LinearGradient>
						</View>
					</View>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

export default Timer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	linearGradient: {
		flex: 1,
		alignItems: 'center',
	},
	goalTitle: {
		minWidth: '100%',
		backgroundColor: colors.white,
		minHeight: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
		marginTop: 30,
		borderRadius: 10,
	},
	goalTitleText: {
		color: colors.grey,
	},
	timerOuter: {
		backgroundColor: colors.white,
		minWidth: '100%',
		height: 300,
		borderRadius: 300,
		alignItems: 'center',
		justifyContent: 'center',
	},
	timerInner: {
		width:'80%',
		height:260,
		alignItems:'center',
		justifyContent: 'center',
		borderRadius: 125
	},
});
