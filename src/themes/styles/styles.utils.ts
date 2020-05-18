import { TFlexDirectionItem } from './styles.typings';

export const createItemGap = (isColumn?: boolean, itemGap?: string) =>
  itemGap &&
  `> * + * {
    margin-${isColumn ? 'top' : 'left'}: ${itemGap} !important;
  }`;

export const createDirection = (
  direction?: TFlexDirectionItem,
  isCentralize?: boolean
) => ((direction || isCentralize) && direction) ?? (isCentralize && 'center');
