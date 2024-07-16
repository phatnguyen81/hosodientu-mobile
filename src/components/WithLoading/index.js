import React from 'react';
import {View} from 'react-native';
import Loader from '../Loader';

const WithLoading = Component => {
  return function WihLoadingComponent({
    isLoading,
    isAfterLoaded,
    isActionHeader,
    isBackground = true,
    ...props
  }) {
    return isAfterLoaded ? (
      <View style={{width: '100%', height: '100%'}}>
        {isLoading && <Loader background light />}
        {!isLoading && <Component {...props} />}
      </View>
    ) : (
      <View style={{width: '100%', height: '100%'}}>
        <Component {...props} />
        {isLoading && (
          <Loader
            background={isBackground}
            isActionHeader={isActionHeader}
            light
          />
        )}
      </View>
    );
  };
};

export default WithLoading;
