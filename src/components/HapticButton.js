import React from 'react';
import { Pressable, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

const HapticButton = ({ 
  onPress, 
  title, 
  className = '',
  textClassName = '',
  hapticType = 'medium'
}) => {
  
  const handlePress = () => {
    switch(hapticType) {
      case 'light':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case 'heavy':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        break;
      default:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      className={`bg-primary py-3 px-6 rounded-lg active:opacity-70 ${className}`}
    >
      <Text className={`text-white text-center font-poppins-bold text-lg ${textClassName}`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default HapticButton;
