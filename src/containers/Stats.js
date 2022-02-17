import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import { colors } from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar } from 'react-native-calendars';
import { LineChart } from 'react-native-chart-kit';

const Stats = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors.background}
				style={styles.linearGradient}
				start={{ x: 0.7, y: 0 }}>
				<SafeAreaView>
					<Text style={styles.title}>Stats</Text>
					<Calendar
						theme={{
							calendarBackground: 'rgba(255,255,255,0)',
						}}
					/>
					<LineChart
						data={{
							labels: ['January', 'February', 'March', 'April', 'May', 'June'],
							datasets: [
								{
									data: [
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
									],
								},
							],
						}}
						width={Dimensions.get('window').width} // from react-native
						height={220}
						yAxisLabel="$"
						yAxisSuffix="k"
						yAxisInterval={1} // optional, defaults to 1
						chartConfig={{
							backgroundColor: 'rgba(255,255,255,0)',
							backgroundGradientFrom: 'rgba(255,255,255,0)',
							backgroundGradientFromOpacity: 0,
							backgroundGradientTo: 'rgba(255,255,255,0)',
							backgroundGradientToOpacity: 0,
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							style: {
								borderRadius: 16,
							},
							propsForDots: {
								r: '6',
								strokeWidth: '2',
								stroke: '#ffa726',
							},
						}}
						bezier
						style={{
							marginVertical: 8,
							borderRadius: 16,
						}}
					/>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

export default Stats;

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
		padding: 40,
	},
	calendar: {
		borderColor: 'white',
	},
});
