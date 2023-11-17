import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'dev.vincedevfournier.cartLife',
  appName: 'CartLife',
  webDir: 'www',
  plugins:{
    
      Splash: {
        launchAutoHide: false
      },
      StatusBar: {
        style: 'light'
      },
      LocalNotifications: {
        smallIcon: "ic_stat_icon_config_sample",
        iconColor: "#488AFF",
        sound: "beep.wav"
    },
  server: {
    androidScheme: 'https'
  }
}
};

export default config;
