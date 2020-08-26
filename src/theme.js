export default // example base theme from @theme-ui/presets
{
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#6d23ed',
    secondary: '#6d23ed',
    muted: '#f6f6f9',
    gray: '#dddddf',
    darkGray: '#5e6973'
  },
  fonts: {
    body: 'Roboto, Helvetica, sans-serif',
    heading: 'Roboto, Helvetica, sans-serif',
    monospace: 'Roboto, Helvetica, sans-serif'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 800,
    lightBold: 500,
    bold: 700
  },
  opacity: {
    mid: 0.5,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 28, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    'default': 4,
    circle: 99999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    indicator: {
      fontFamily: 'heading',
      fontSize: [0, 1, 2]
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  },
  forms: {    
    label: {
      fontWeight: 'bold'
    },
  },
};
