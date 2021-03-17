import { readableColor } from 'polished';
import { generate } from '@ant-design/colors';

export const getFont = (font = 'Roboto') => {
  return `${font}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
};

export const generateThemeColors = ({
  primary,
  secondary,
  info,
  success,
  danger,
  warning
}) => ({
  colors: {
    primary,
    secondary,
    info,
    success,
    danger,
    warning,
    shadow: '#002840',
    readable: {
      primary: readableColor(primary),
      secondary: readableColor(secondary),
      info: readableColor(info),
      success: readableColor(success),
      danger: readableColor(danger),
      warning: readableColor(warning)
    },
    background: {
      primary: '#FFFFFF',
      secondary
    },
    text: {
      title: 'rgba(0,0,0,0.85)',
      primary: 'rgba(0,0,0,0.65)',
      secondary: 'rgba(0,0,0,0.45)',
      disable: 'rgba(0,0,0,0.25)',
      border: 'rgba(0,0,0,0.15)',
      dividers: 'rgba(0,0,0,0.06)',
      background: 'rgba(0,0,0,0.04)',
      tableHeaders: 'rgba(0,0,0,0.02)'
    }
  },
  palettes: {
    // Arrays 0-9 from ant-design
    primary: generate(primary),
    info: generate(info),
    success: generate(success),
    danger: generate(danger),
    warning: generate(warning),
    secondary: generate(secondary)
  }
});
