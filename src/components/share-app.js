import {Share} from 'react-native';
import {Toast} from './toast';

export const ShareApp = async ({message}) => {
  try {
    const result = await Share.share({
      title: 'Share this app.',
      message,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Toast(error.message);
  }
};
