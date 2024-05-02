import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface ChatIconProps extends Omit<SvgProps, 'fill' | 'viewBox'> {
  color?: string;
}

export const ChatIcon: React.FC<ChatIconProps> = ({ color = '#1C274C' }) => {
  return (
    <Svg width="22" height="26" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Path d="M8 10.5h8M8 14h5.5" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
};
