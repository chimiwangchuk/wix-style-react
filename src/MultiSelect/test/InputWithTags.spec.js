import React from 'react';
import InputWithTags from '../InputWithTags';
import { createRendererWithDriver, cleanup } from '../../../test/utils/unit';
import inputDriverFactory from '../../Input/Input.driver';

const driverFactory = ({ element }) => {
  return {
    inputDriver: () =>
      inputDriverFactory({
        element: element.querySelector(`[data-hook="inputWithTags-input"]`),
      }),
  };
};

describe('InputWithTags', () => {
  const render = createRendererWithDriver(driverFactory);

  afterEach(() => {
    cleanup();
  });

  describe('clear button click', () => {
    it('should clear input value', () => {
      let component;
      const { driver } = render(
        <InputWithTags ref={comp => (component = comp)} />,
      );

      driver.inputDriver().enterText('foo');
      expect(driver.inputDriver().getValue()).toEqual('foo');

      component.clear();
      expect(driver.inputDriver().getValue()).toEqual('');
    });

    it('should call onClear', () => {
      const onClear = jest.fn();
      let component;
      const { driver } = render(
        <InputWithTags onClear={onClear} ref={comp => (component = comp)} />,
      );

      driver.inputDriver().enterText('foo');
      expect(onClear).toHaveBeenCalledTimes(0);

      component.clear();

      expect(onClear).toHaveBeenCalledTimes(1);
    });

    describe('updateControlledOnClear is true', () => {
      it('should NOT trigger onChange on clearing', async () => {
        const onChange = jest.fn();
        const { driver } = render(
          <InputWithTags
            onChange={onChange}
            value="some value"
            clearButton
            updateControlledOnClear
          />,
        );
        await driver.inputDriver().clickClear();
        expect(onChange).toHaveBeenCalledTimes(0);
      });

      it('should trigger onClear on clearing', async () => {
        const onClear = jest.fn();
        const { driver } = render(
          <InputWithTags
            onClear={onClear}
            value="some value"
            clearButton
            updateControlledOnClear
          />,
        );
        expect(onClear).toHaveBeenCalledTimes(0);
        await driver.inputDriver().clickClear();
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(onClear.mock.calls[0][0]).toBeTruthy;
      });
    });
  });
});
