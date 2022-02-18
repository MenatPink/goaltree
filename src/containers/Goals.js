import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { LinearGradient } from 'expo-linear-gradient';
import MainGoal from '../components/MainGoal';
import NavBar from '../components/NavBar';
import { SvgXml } from 'react-native-svg';

import plusIcon from '../../assets/add_circle_black_24dp';

const Goals = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors.background}
				style={styles.linearGradient}
				start={{ x: 0.7, y: 0 }}>
				<SafeAreaView
					style={{ alignItems: 'center', flexDirection: 'column', flex: 1 }}>
					<View style={{ width: '80%', marginTop: 40, flex: 8 }}>
						<Text style={styles.title}>Goals</Text>
						<View style={{ alignItems: 'center', justifyContent: 'space-between', flex:1}}>
							<View style={styles.goalsContainer}>
								<MainGoal subGoalNumber={6} text={'Sign To A Major Label'} />
								<MainGoal
									subGoalNumber={12}
									text={'Reach A Thousand Subscribers'}
								/>
								<MainGoal subGoalNumber={3} text={'Buy a House'} />
							</View>
							<SvgXml
								xml={plusIcon}
								width={80}
								height={80}
								fill={colors.white}
								style={{marginBottom:30}}
							/>
						</View>
					</View>
					<View
						style={{
							width: '80%',
							alignItems: 'center',
							flex: 1,
							justifyContent: 'center',
						}}>
						<NavBar />
					</View>
				</SafeAreaView>
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
		fontFamily: fonts.heading,
		fontSize: 40,
		color: colors.white,
		fontWeight: 'bold',
	},
	goalsContainer: {
		paddingTop: 20,
	},
});
