import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View className='flex-1 justify-center items-center'>
			<Text>Welcome</Text>
			<Link href='/onboarding'>go</Link>
			<Link href='/movie/fu'>FU MOVIE</Link>
		</View>
	);
}
