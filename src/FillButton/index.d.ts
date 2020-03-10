import * as React from 'react';
import { TooltipCommonProps } from '../common'

export interface FillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconSize?: FillButtonIconSize;
  disabled?: boolean;
  fill?: string;
  tooltipProps?: TooltipCommonProps;
  dataHook?: string;
}

export default class FillButton extends React.PureComponent<FillButtonProps> {}
export type FillButtonIconSize = 'small' | 'medium';
