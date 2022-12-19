import {ReactElement} from 'react';

type ComponentType = (
  props: any,
) => JSX.Element | ReactElement<any, any> | null;

export type {ComponentType};
