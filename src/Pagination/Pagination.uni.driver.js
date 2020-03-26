import { default as corePaginationDriverFactory } from 'wix-ui-core/dist/src/components/pagination/Pagination.uni.driver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/unidriver';

export const paginationDriverFactory = (base, body) => {
  const paginationDriver = corePaginationDriverFactory(base);
  return {
    ...baseUniDriverFactory(base, body),

    exists: paginationDriver.exists,
    getCurrentPage: paginationDriver.getCurrentPage,
    getTotalPages: paginationDriver.getTotalPages,
    clickOnPage: paginationDriver.clickOnPage,
    clickNextButton: paginationDriver.clickNextButton,
    clickPreviousButton: paginationDriver.clickPreviousButton,
  };
};
