import {useEffect} from 'react';
import {BackHandler} from 'react-native';

/* useBackButton */
function useBackButton(handler: () => boolean | null | undefined) {
  // Frustration isolated! Yay! 🎉
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}

export {useBackButton};
