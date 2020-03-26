import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as CorePagination } from 'wix-ui-core/dist/src/components/pagination';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import { dataHooks } from './constants';

import style from './Pagination.st.css';

const coreComponentDefaults = {
  showFirstPage: true,
  showLastPage: true,
  responsive: false,
  showFirstLastNavButtons: false,
  showInputModeTotalPages: false,
  paginationMode: 'pages',
  nextLabel: <ChevronRight {...style('arrow')} />,
  previousLabel: <ChevronLeft {...style('arrow')} />,
};

/** Component for pagination */
class Pagination extends React.PureComponent {
  static displayName = 'Pagination';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Total available pages to show */
    totalPages: PropTypes.number,
    /** Currently selected page */
    currentPage: PropTypes.number,
    /** Returns selected page or arrow ({event,page})  */
    onChange: PropTypes.func,
  };

  static defaultProps = {
    currentPage: 1,
  };

  _getMaxPagesToShow = () => {
    const { currentPage, totalPages } = this.props;
    const absoluteNumDistance = Math.min(
      Math.abs(1 - currentPage),
      Math.abs(currentPage - totalPages),
    );

    if (absoluteNumDistance >= 4) {
      return 9;
    } else if (absoluteNumDistance === 3) {
      return 8;
    }
    return 7;
  };

  render() {
    const {
      dataHook,
      currentPage,
      totalPages,
      onChange,
      nextLabel,
      previousLabel,
      ...props
    } = this.props;

    return (
      <div
        {...style('root', {}, props)}
        data-hook={dataHook}
        onFocus={this.props.focusableOnFocus}
        onBlur={this.props.focusableOnBlur}
      >
        <CorePagination
          {...style('pagination', {}, props)}
          {...coreComponentDefaults}
          data-hook={dataHooks.paginationComponent}
          onChange={onChange}
          totalPages={totalPages}
          currentPage={currentPage}
          maxPagesToShow={this._getMaxPagesToShow()}
          showNextLabel={currentPage !== totalPages}
          showPreviousLabel={currentPage !== 1}
        />
      </div>
    );
  }
}

export default withFocusable(Pagination);
