import Typography from 'typography';
import Wordpress2011 from 'typography-theme-wordpress-2011';

Wordpress2011.bodyColor = "#394765"
Wordpress2011.headerColor = "#394765"
Wordpress2011.headerWeight = "500"
Wordpress2011.bodyWeight = "400"
const typography = new Typography(Wordpress2011);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography;
