package com.masko_project_21870;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
import android.os.Bundle; // required for onCreate parameter

public class MainActivity extends ReactActivity {


   @Override
   protected void onCreate(Bundle savedInstanceState) {
       SplashScreen.show(this, R.style.SplashStatusBarTheme);
       super.onCreate(savedInstanceState);
   }

    /**
    * Returns the name of the main component registered from JavaScript. This is used to schedule
    * rendering of the component.
    */
    @Override
    protected String getMainComponentName() {
        return "masko_project_21870";
    }
}
