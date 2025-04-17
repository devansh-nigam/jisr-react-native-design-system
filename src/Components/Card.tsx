import React from 'react';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import Box from './Box';
import {Theme} from '../theme';

const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({themeKey: 'cardVariants'})], Box);

export default Card;
