import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import MainGoal from '../components/MainGoal';
import NavBar from '../components/NavBar';

const Goals = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors.background}
				style={styles.linearGradient}
				start={{ x: 0.7, y: 0 }}>
					<SafeAreaView style={{ alignItems: 'center' }}>
						<View style={{ width: '80%', marginTop: 40 }}>
							<Text style={styles.title}>Goals</Text>
							<View style={styles.goalsContainer}>
								<MainGoal subGoalNumber={6} text={'Sign To A Major Label'} />
								<MainGoal
									subGoalNumber={12}
									text={'Reach A Thousand Subscribers'}
								/>
								<MainGoal subGoalNumber={3} text={'Buy a House'} />
							</View>
						</View>
					</SafeAreaView>
						<NavBar />
			</LinearGradient>
		</View>
	);
};

export default Goals;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	linearGradient: {
		flex: 1,
	},
	title: {
		fontSize: 40,
		color: colors.white,
		fontWeight: 'bold',
	},
	goalsContainer: {
		paddingTop: 20,
	},
});
