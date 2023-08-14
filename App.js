import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import './styles.css'
import styled from 'styled-components/native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyles}>Hello</Text>
			<Text
				style={{
					fontSize: 16,
				}}
			>
				world!
			</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	textStyles: {
		color: 'purple',
		fontSize: 24,
	},
});
