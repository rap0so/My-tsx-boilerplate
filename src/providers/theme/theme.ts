import { Theme } from 'theme-ui';

const colors = {
  background: '#fff',
  configuration: '#39b2c2',
  greyBackground: '#F8F8F9',
  negative: '#cd3636',
  positive: '#A4FF0E',
  text: '#404040',
  yellowBackground: '#F9E39E',
};

const theme: Theme = {
  colors,
  breakpoints: ['1100px'],
  //     [0, 1, 2,  3,  4,  5,  6,  7,  8,  9,   10],
  fontWeights: {
    bold: 600,
    default: 400,
    semibold: 500,
    thin: 300,
  },
  space: [0, 5, 10, 12, 20, 25, 30, 40, 50, 100, 155],
  styles: {
    root: {
      '#root': {
        minHeight: '100vh',
      },
      '*': {
        color: 'text',
        fontFamily: 'default',
        margin: 0,
      },
      code: {
        fontFamily:
          'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
      },
      fontFamily: 'default',
      fontWeight: 'default',
      minHeight: '100vh',
      outline: 'none',
      textDecoration: 'none',
    },
  },
  text: {
    normal: {
      fontSize: '18px',
      fontWeight: 'normal',
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
};

export default theme;
