import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import 'vazir-font/dist/font-face.css';

export default createMuiTheme({
    direction: 'rtl',
    palette: {
      primary: {
        main: '#fafafa'
      },
      secondary: {
        main: purple[900]
      }
    },
    typography: {
      fontFamily: '"Vazir", sans-serif',
      htmlFontSize: 10,
      useNextVariants: true
    }
  });
  
  
 
