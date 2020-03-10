import * as React from 'react';
import { TooltipCommonProps } from '../common';

export type InfoIconSize = 'small' | 'medium';

export interface InfoIconProps {
  content: React.ReactNode;
  size?: InfoIconSize;
  dataHook?: string;
  tooltipProps?: TooltipCommonProps;
}

declare const InfoIcon: React.FC<InfoIconProps>;

export default InfoIcon;
