import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { PaginationDriver } from 'wix-ui-core/drivers/unidriver';

export interface PaginationUniDriver extends BaseUniDriver {
  exists: PaginationDriver.exists;
  getCurrentPage: PaginationDriver.getCurrentPage;
  getTotalPages: PaginationDriver.getTotalPages;
  clickOnPage: PaginationDriver.clickOnPage;
  clickNextButton: PaginationDriver.clickNextButton;
  clickPreviousButton: PaginationDriver.clickPreviousButton;
}
