import { paginationDriverFactory as corePaginationDriverFactory } from 'wix-ui-core/drivers/unidriver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/unidriver';

export const paginationDriverFactory = (base, body) => {
  const paginationDriver = corePaginationDriverFactory(base);
  return {
    ...baseUniDriverFactory(base, body),

    /** Check if element is rendered */
    exists: paginationDriver.exists,
    /** Returns currently selected page */
    getCurrentPage: paginationDriver.getCurrentPage,
    /** Returns a total amount of pages available*/
    getTotalPages: paginationDriver.getTotalPages,
    /** Clicks on gives page number */
    clickOnPage: paginationDriver.clickOnPage,
    /** Clicks on next button*/
    clickNextButton: paginationDriver.clickNextButton,
    /** Clicks on previous button*/
    clickPreviousButton: paginationDriver.clickPreviousButton,
  };
};
