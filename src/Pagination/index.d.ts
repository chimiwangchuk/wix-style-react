import * as React from 'react';

export interface PaginationProps {
  dataHook?: string;
  totalPages?: number;
  currentPage?: number;
  onChange?(event: { event: React.SyntheticEvent; page: number }): void;
}

export default class Pagination extends React.PureComponent<PaginationProps> {}
