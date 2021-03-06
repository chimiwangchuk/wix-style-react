import * as React from 'react';
import Skeleton from '../../src/Skeleton';
import { skeletonTestkitFactory } from '../../dist/testkit';
import { skeletonTestkitFactory as skeletonEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import * as enzyme from 'enzyme';

function SkeletonWithMandatoryProps() {
  return <Skeleton content={[{ type: 'line', size: 'small' }]} />;
}

function SkeletonWithAllProps() {
  return (
    <Skeleton
      alignment="middle"
      dataHook="hook"
      styles="font: 14px"
      spacing="large"
      content={[{ size: 'full', type: 'line' }]}
      className={"class"}
    />
  );
}

async function testkits() {
  const testkit = skeletonTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = skeletonEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });
}
