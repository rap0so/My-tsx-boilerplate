import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const theme = {
  colors,
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#181818',
        color: 'text',
        lineHeight: 'tall',
      },
    },
  },
};

const extendedTheme = extendTheme(theme);

export default extendedTheme;
