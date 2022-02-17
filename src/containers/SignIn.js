import react from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

const SignInPage = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors.background}
				style={styles.linearGradient}
				start={{ x: 0.7, y: 0 }}>
				<Text style={styles.title}>GoalTree</Text>
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
					<Text style={{ color: colors.grey }}>Sign In</Text>
				</Pressable>
				<Pressable
					color={colors.white}
					onPress={() => {
						console.log('Sign Up Pressed');
					}}
					title="Sign Up"
					style={styles.strokeButton}>
					<Text style={{ color: colors.white }}>Sign Up</Text>
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
		fontSize: 40,
		fontWeight: 'bold',
		paddingBottom: 40,
	},
	strokeButton: {
		borderColor: colors.white,
		borderWidth: 1,
		borderRadius: 5,
		padding: 15,
		width: '50%',
		alignItems: 'center',
		color: colors.white,
	},
	fillButton: {
		backgroundColor: colors.white,
		width: '50%',
		alignItems: 'center',
		padding: 15,
		marginTop: 30,
		marginBottom: 30,
		borderRadius: 10,
	},
});
