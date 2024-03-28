import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nfc.wallet',
  appName: 'nfc-wallet',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
