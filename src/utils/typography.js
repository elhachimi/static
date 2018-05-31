import Typography from 'typography';
import Wordpress2011 from 'typography-theme-wordpress-2011';

const typography = new Typography(Wordpress2011);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography;
