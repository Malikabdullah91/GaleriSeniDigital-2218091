import PushNotification from 'react-native-push-notification';

class NotificationHelper {
  configure = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      requestPermissions: true,
    });

    PushNotification.createChannel(
      {
        channelId: 'art-gallery-channel', // required
        channelName: 'Art Gallery Channel', // required
        importance: 4,
        vibrate: true,
      },
      created => console.log(`Channel created: ${created}`),
    );
  };

  showNotification = (title, message) => {
    PushNotification.localNotification({
      channelId: 'art-gallery-channel',
      title: title,
      message: message,
    });
  };
}

export default new NotificationHelper();
