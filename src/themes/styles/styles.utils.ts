import { TFlexDirectionItem } from './styles.typings';

export const createItemGap = (isColumn?: boolean, itemGap?: string) =>
  itemGap &&
  `> * + * {
    margin-${isColumn ? 'top' : 'left'}: ${itemGap};
  }`;

export const createDirection = (
  direction?: TFlexDirectionItem,
  isCentralize?: boolean
) => ((direction || isCentralize) && direction) ?? (isCentralize && 'center');
