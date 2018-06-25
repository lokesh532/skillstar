import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ActionButton({ onPress, styles, text, color }){
	return (
		<TouchableOpacity onPress={onPress}>
			<Text >{text}</Text>
		</TouchableOpacity>
	)
}
