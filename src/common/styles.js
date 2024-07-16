import {Dimensions, Platform} from 'react-native';
import normalize from 'react-native-normalize';

export const {width, height} = Dimensions.get('window');
const {heightWindow} = Dimensions.get('window');

let Styles = {
  s12: {
    fontSize: normalize(12),
  },
  s14: {
    fontSize: normalize(14),
  },
  s16: {
    fontSize: normalize(16),
  },
  s18: {
    fontSize: normalize(18),
  },
  s20: {
    fontSize: normalize(20),
  },
  s22: {
    fontSize: normalize(22),
  },
  s24: {
    fontSize: normalize(24),
  },
  s26: {
    fontSize: normalize(26),
  },
  s28: {
    fontSize: normalize(28),
  },
  s30: {
    fontSize: normalize(30),
  },

  s12b: {
    fontSize: normalize(12),
    fontWeight: 'bold',
  },
  s14b: {
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  s16b: {
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  s18b: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  s20b: {
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  s22b: {
    fontSize: normalize(22),
    fontWeight: 'bold',
  },
  s24b: {
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
  s26b: {
    fontSize: normalize(26),
    fontWeight: 'bold',
  },
  s28b: {
    fontSize: normalize(28),
    fontWeight: 'bold',
  },
  s30b: {
    fontSize: normalize(30),
    fontWeight: 'bold',
  },
  s40b: {
    fontSize: normalize(40),
    fontWeight: 'bold',
  },
  s50b: {
    fontSize: normalize(50),
    fontWeight: 'bold',
  },

  s12bi: {
    fontSize: normalize(12),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s14bi: {
    fontSize: normalize(14),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s16bi: {
    fontSize: normalize(16),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s18bi: {
    fontSize: normalize(18),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s20bi: {
    fontSize: normalize(20),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s22bi: {
    fontSize: normalize(22),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s24bi: {
    fontSize: normalize(24),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s26bi: {
    fontSize: normalize(26),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s28bi: {
    fontSize: normalize(28),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  s30bi: {
    fontSize: normalize(30),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  s12i: {
    fontSize: normalize(12),
    fontStyle: 'italic',
  },
  s14i: {
    fontSize: normalize(14),
    fontStyle: 'italic',
  },
  s16i: {
    fontSize: normalize(16),
    fontStyle: 'italic',
  },
  s18i: {
    fontSize: normalize(18),
    fontStyle: 'italic',
  },
  s20i: {
    fontSize: normalize(20),
    fontStyle: 'italic',
  },
  s22i: {
    fontSize: normalize(22),
    fontStyle: 'italic',
  },
  s24i: {
    fontSize: normalize(24),
    fontStyle: 'italic',
  },
  s26i: {
    fontSize: normalize(26),
    fontStyle: 'italic',
  },
  s28i: {
    fontSize: normalize(28),
    fontStyle: 'italic',
  },
  s30i: {
    fontSize: normalize(30),
    fontStyle: 'italic',
  },
  FontSize: {
    tiny: normalize(12),
    small: normalize(14),
    medium: normalize(16),
    big: normalize(18),
    large: normalize(20),
  },

  radius: {
    tiny: normalize(5),
    small: normalize(10),
    medium: normalize(15),
    big: normalize(18),
    large: normalize(20),
  },

  padding: {
    tiny: normalize(5),
    small: normalize(10),
    medium: normalize(15),
    big: normalize(18),
    large: normalize(20),
  },

  margin: {
    tiny: normalize(5),
    small: normalize(10),
    medium: normalize(15),
    big: normalize(18),
    large: normalize(20),
  },

  FontFamily: {
    robotoBold: 'Roboto-Bold',
    robotoMain: 'Roboto-Light',
    robotoItalic: 'Roboto-Italic',
    regular: 'Roboto-Regular',
    joseBold: 'JosefinSans-Bold',
    joseMain: 'JosefinSans-Light',
    joseRegular: 'JosefinSans-Regular',
    sourceSansProBold: 'SourceSansPro-Bold',
    sourceSansProLight: 'SourceSansPro-Light',
    sourceSansProRegular: 'SourceSansPro-Regular',
    sourceSansProBoldItalic: 'SourceSansPro-Italic',
    sourceSansProLightItalic: 'SourceSansPro-LightItalic',
  },

  Common: {
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    paddingHorizontal: normalize(10),

    Column: {},
    ColumnCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    ColumnCenterTop: {
      alignItems: 'center',
    },
    ColumnCenterBottom: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    ColumnCenterLeft: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    ColumnCenterRight: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    Row: {
      flexDirection: 'row',
    },
    RowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    RowCenterTop: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    RowCenterBottom: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    RowCenterLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    RowCenterRight: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    RowCenterBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
};

export default Styles;
