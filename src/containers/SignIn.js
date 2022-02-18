import react from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { LinearGradient } from 'expo-linear-gradient';

const SignInPage = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors.background}
				style={styles.linearGradient}
				start={{ x: 0.7, y: 0 }}>
				<View style={{ paddingBottom: 40, alignItems: 'center'}}>
					<Text style={styles.title}>GoalTree</Text>
					<Text style={styles.tagline}>1. Breakdown your goals into simple steps.</Text>
					<Text style={styles.tagline}>2. Achieve them.</Text>
				</View>
				<Image
					source={require('../../assets/gtlogo.png')}
					style={{ width: 100, height: 250 }}
				/>
				<Pressable
					onPress={() => {
						console.log('Sign In Pressed');
					}}
					color={colors.white}
					title="Sign In"
					style={styles.fillButton}>
					<Text style={{ color: colors.grey, fontFamily: fonts.lightBody }}>Sign In</Text>
				</Pressable>
				<Pressable
					color={colors.white}
					onPress={() => {
						console.log('Sign Up Pressed');
					}}
					title="Sign Up"
					style={styles.strokeButton}>
					<Text style={{ color: colors.white, fontFamily: fonts.lightBody }}>Sign Up</Text>
				</Pressable>
			</LinearGradient>
		</View>
	);
};

export default SignInPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	linearGradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	title: {
		color: colors.white,
		fontSize: 64,
		fontWeight: 'bold',

		fontFamily: fonts.heading,
	},
	strokeButton: {
		borderColor: colors.white,
		borderWidth: 1,
		borderRadius: 15,
		padding: 15,
		width: '70%',
		alignItems: 'center',
		color: colors.white,
	},
	fillButton: {
		backgroundColor: colors.white,
		width: '70%',
		alignItems: 'center',
		padding: 15,
		marginTop: 30,
		marginBottom: 30,
		borderRadius: 15,
	},
	tagline:{
		color:colors.white,
		fontFamily: fonts.lightBody,
	}
});
