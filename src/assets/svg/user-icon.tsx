import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

interface UserIconProps extends Omit<SvgProps, 'fill' | 'viewBox'> {
  color?: string;
  size?: number;
}

export const UserIcon: React.FC<UserIconProps> = ({ color = '#1C274C', size = 32 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={6} r={4} stroke={color} strokeWidth={1.5} />
      <Path
        d="M15 20.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default UserIcon;
