import { dropdownBaseDriverFactory } from '../DropdownBase/DropdownBase.uni.driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';
import popoverCommonDriverFactory from '../Popover/Popover.common.uni.driver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const PopoverMenuDriver = (base, body) => {
  const dropdownBaseTestkit = dropdownBaseDriverFactory(base, body);

  const createDropdownLayoutDriver = async () =>
    dropdownLayoutDriverFactory(
      (await getContentElement()).$(
        `[data-hook="dropdown-base-dropdownlayout"]`,
      ),
    );

  const getContentElement = async () =>
    popoverCommonDriverFactory(base, body).getContentElement();

  return {
    ...baseUniDriverFactory(base),
    /** Returns true of popoverMenu exists */
    exists: () => dropdownBaseTestkit.exists(),
    /** Returns trigger element */
    getTriggerElement: dataHook => base.$(`[data-hook="${dataHook}"]`),
    /** Select a specific option by its index (requires the menu to be opened) */
    clickAtChild: index => dropdownBaseTestkit.selectOption(index),
    /** Select a specific option by its data-hook (requires the menu to be opened) */
    clickAtChildByDataHook: dataHook =>
      dropdownBaseTestkit.selectOptionByDataHook(dataHook),
    /** Return true if the menu is opened */
    isMenuOpen: () => dropdownBaseTestkit.isDropdownShown(),
    /** Returns children count */
    childrenCount: () => dropdownBaseTestkit.optionsCount(),
    /** Returns text of <PopoverMenu.MenuItem/> of a specific index */
    itemContentAt: async index => {
      const dropdownLayoutDriver = await createDropdownLayoutDriver();
      const options = await dropdownLayoutDriver.options();
      const nodeContent = options[index].element().$$(':first-child');
      return await nodeContent.get(0).text();
    },
  };
};
