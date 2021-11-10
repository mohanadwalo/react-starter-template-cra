import { CSSProperties } from 'styled-components';

const colors = {
  black: '#05161C',
  white: '#fff',
};

type ThemeType = {
  [key: string]: CSSProperties | { [key: string]: string };
};
export const theme: ThemeType = {
  colors: colors,
  layout: {
    backgroundColor: colors.white,
  },
};
