import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import IconAdd from 'wix-ui-icons-common/Add';
import IconAddSmall from 'wix-ui-icons-common/AddSmall';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

import styles from './FillButton.st.css';
import Tooltip from '../Tooltip';
import Proportion from '../Proportion';
import { dataHooks } from './constants';
import { parseColor, parseGradient, parseContrastColor } from './utils';
import deprecationLog from '../utils/deprecationLog';

const { iconSmall, iconMedium } = dataHooks;

/** FillButton */
class FillButton extends React.PureComponent {
  static displayName = 'FillButton';

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,
    /** click handler */
    onClick: PropTypes.func,
    /** supports `small` and `medium` add icon size */
    iconSize: PropTypes.oneOf(['small', 'medium']),
    /** components disable state */
    disabled: PropTypes.bool,
    /** @deprecated tooltip content value */
    tooltipContent: PropTypes.node,
    /** fill value in string. Hex or gradient */
    fill: PropTypes.string,
    /** tooltip common props */
    tooltipProps: PropTypes.shape(TooltipCommonProps),
  };

  static defaultProps = {
    iconSize: 'small',
  };

  constructor(props) {
    super(props);

    if (props.hasOwnProperty('tooltipContent')) {
      deprecationLog(
        '<FillButton/> - tooltipContent prop is deprecated, use tooltipProps={{ content: ... }} instead.',
      );
    }
  }

  _getBackground = fill => {
    const { disabled } = this.props;

    if (parseColor(fill) && !disabled) {
      return { backgroundColor: fill };
    }

    if (parseGradient(fill) && !disabled) {
      return {
        backgroundImage: fill,
      };
    }
    return undefined;
  };

  _renderIcon = () => {
    const { iconSize, fill, disabled } = this.props;
    const AddIcon = iconSize === 'small' ? IconAddSmall : IconAdd;
    return (
      <AddIcon
        style={{ color: !disabled && parseContrastColor(fill) }}
        data-hook={iconSize === 'small' ? iconSmall : iconMedium}
      />
    );
  };

  render() {
    const {
      disabled,
      focusableOnBlur,
      focusableOnFocus,
      tooltipContent,
      dataHook,
      fill,
      iconSize,
      tooltipProps,
      ...rest
    } = this.props;
    const background = this._getBackground(fill);
    return (
      <Tooltip
        appendTo="window"
        disabled={disabled}
        content={tooltipContent}
        {...tooltipProps}
        upgrade
        dataHook={dataHook}
        size="small"
      >
        <Proportion className={styles.proportion}>
          <button
            {...rest}
            {...styles('root', { disabled, fill: !!background }, this.props)}
            style={{ ...background }}
            data-hook={dataHooks.button}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
            disabled={disabled}
          >
            {this._renderIcon()}
          </button>
        </Proportion>
      </Tooltip>
    );
  }
}

export default withFocusable(FillButton);
