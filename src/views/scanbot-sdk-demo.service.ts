import ScanbotBarcodeSDK, {
    ScanbotBarcodeSDKConfiguration,
    BarcodeScannerConfiguration,
    BarcodeResult,
    BatchBarcodeScannerConfiguration,
  } from 'cordova-plugin-scanbot-barcode-scanner';

export class ScanbotSdkDemoService {

    /*
     * TODO add the license key here.
     * Please note: The Scanbot SDK will run without a license key for one minute per session!
     * After the trial period has expired all Scanbot SDK functions as well as the UI components will stop working
     * or may be terminated. You can get an unrestricted "no-strings-attached" 30 day trial license key for free.
     * Please submit the trial license form (https://scanbot.io/en/sdk/demo/trial) on our website by using
     * the app identifier "io.scanbot.example.sdk.capacitor.ionic" of this example app
     * or of your app (see config.xml <widget id="your.app.id" ...>).
     */
    static readonly SDK_LICENSE_KEY: string = '';

    /* Optional image format & quality parameters */

    public static barcodeSDK = ScanbotBarcodeSDK.promisify!();

    public static async initScanbotBarcodeSDK() {
        try {
        const config: ScanbotBarcodeSDKConfiguration = {
            licenseKey: '',
            enableNativeLogging: true,
            loggingEnabled: true, // Disable logging in production builds for security and performance reasons!
            // optional custom storageBaseDirectory for snapped images - see the comments below.
        };
        await this.barcodeSDK.initializeSdk(config);

        console.log('success');
        } catch (e) {
        console.log(JSON.stringify(e));
        }
    }

    public static async startBarcodeQrCodeScanner() {
    
        const config: BarcodeScannerConfiguration = {
          barcodeImageGenerationType: 'FROM_VIDEO_FRAME',
          finderLineColor: '#ff0000',
          cancelButtonTitle: 'Cancel',
          // See further customization configs...
    
          // gs1DecodingEnabled: false,
          // minimum1DBarcodesQuietZone: 10,
          // minimumTextLength: 2,
          // maximumTextLength: 11,
          // cameraZoomFactor: 1,
          // finderAspectRatio: {
          //   width: 2,
          //   height: 1
          // }
        };
    
        try {
          const result = await this.barcodeSDK.startBarcodeScanner(config);
    
          if (result.status === 'OK') {
            console.log(JSON.stringify(result));
          }
        } catch (e) {
            console.log(JSON.stringify(e));
        }
      }


}