/**
 * Used to generate the theme for the application on startup.
 */
function generateTheme() {
    var theme = Math.ceil(Math.random() * 4);
    changeTheme(theme);
}

/**
 * A function for changing the theme to the user specificed theme.
 */
function changeTheme(theme) {

    // CSS variables
    var accent1 = "--accent1";
    var accent2 = "--accent2";
    var accent3 = "--accent3";
    var accent4 = "--accent4";
    var accent5 = "--accent5";

    var contrast = "--contrast";
    var contrastDark = "--contrast-dark";

    var shadow = "--shadow";
    var borderColor = "--border-color";

    var taskbar = "--taskbar";
    var scrollbar = "--scrollbar";

    var textColorLight = "--text-color-light";
    var textColorDark = "--text-color-dark";

    var backgroundColor = "--background-color";
    var backggroundBlur = "--background-blur";
    var backgroundSVG = "--background-svg";

    // CSS Values
    var accent1Property;
    var accent2Property;
    var accent3Property;
    var accent4Property;
    var accent5Property;

    var contrastProperty;
    var contrastDarkProperty;

    var shadowProperty;
    var borderColorProperty;

    var taskbarProperty;
    var scrollbarProperty;

    var textColorLightProperty;
    var textColorDarkProperty;

    var backgroundColorProperty;
    var backggroundBlurProperty;
    var backgroundSVGProperty;

    if (1 == theme) {

        // Red color theme properties.
        accent1Property = "#be3144";
        accent2Property = "#A51427";
        accent3Property = "#CF3E52";
        accent4Property = "#303841";
        accent5Property = "#3a4750";

        contrastProperty = "#d3d6db";
        contrastDarkProperty = "#303841";

        shadowProperty = "#4b0505";
        borderColorProperty = "#ffffff";

        taskbarProperty = "#3a4750";
        scrollbarProperty = "#3a4750";

        textColorLightProperty = "#f2f2f2";
        textColorDarkProperty = "#000000";

        backgroundColorProperty = "#E6E6E6";
        backggroundBlurProperty = "blur(10px)";
        backgroundSVGProperty = "url('assets/background-svg.svg')";

    } else if (2 == theme) {

        // Green color theme properties.
        accent1Property = "--accent1";
        accent2Property = "--accent2";
        accent3Property = "--accent3";
        accent4Property = "--accent4";
        accent5Property = "--accent5";

        contrastProperty = "--contrast";
        contrastDarkProperty = "--contrast-dark";

        shadowProperty = "--shadow";
        borderColorProperty = "--border-color";

        taskbarProperty = "--taskbar";
        scrollbarProperty = "--scrollbar";

        textColorLightProperty = "--text-color-light";
        textColorDarkProperty = "--text-color-dark";

        backgroundColorProperty = "--background-color";
        backggroundBlurProperty = "--background-blur";
        backgroundSVGProperty = "--background-svg";

    } else if (3 == theme) {

        // Blue color theme properties.
        accent1Property = "--accent1";
        accent2Property = "--accent2";
        accent3Property = "--accent3";
        accent4Property = "--accent4";
        accent5Property = "--accent5";

        contrastProperty = "--contrast";
        contrastDarkProperty = "--contrast-dark";

        shadowProperty = "--shadow";
        borderColorProperty = "--border-color";

        taskbarProperty = "--taskbar";
        scrollbarProperty = "--scrollbar";

        textColorLightProperty = "--text-color-light";
        textColorDarkProperty = "--text-color-dark";

        backgroundColorProperty = "--background-color";
        backggroundBlurProperty = "--background-blur";
        backgroundSVGProperty = "--background-svg";

    } else {

        // White color theme properties.
        accent1Property = "--accent1";
        accent2Property = "--accent2";
        accent3Property = "--accent3";
        accent4Property = "--accent4";
        accent5Property = "--accent5";

        contrastProperty = "--contrast";
        contrastDarkProperty = "--contrast-dark";

        shadowProperty = "--shadow";
        borderColorProperty = "--border-color";

        taskbarProperty = "--taskbar";
        scrollbarProperty = "--scrollbar";

        textColorLightProperty = "--text-color-light";
        textColorDarkProperty = "--text-color-dark";

        backgroundColorProperty = "--background-color";
        backggroundBlurProperty = "--background-blur";
        backgroundSVGProperty = "--background-svg";

    }     

    document.documentElement.style.setProperty(accent1, accent1Property);
    document.documentElement.style.setProperty(accent2, accent2Property);
    document.documentElement.style.setProperty(accent3, accent3Property);
    document.documentElement.style.setProperty(accent4, accent4Property);
    document.documentElement.style.setProperty(accent5, accent5Property);
    
    document.documentElement.style.setProperty(contrast, contrastProperty);
    document.documentElement.style.setProperty(contrastDark, contrastDarkProperty);
    
    document.documentElement.style.setProperty(shadow, shadowProperty);
    document.documentElement.style.setProperty(borderColor, borderColorProperty);
    
    document.documentElement.style.setProperty(taskbar, taskbarProperty);
    document.documentElement.style.setProperty(scrollbar, scrollbarProperty);
    
    document.documentElement.style.setProperty(textColorLight, textColorLightProperty);
    document.documentElement.style.setProperty(textColorDark, textColorDarkProperty);
    
    document.documentElement.style.setProperty(backgroundColor, backgroundColorProperty);
    document.documentElement.style.setProperty(backggroundBlur, backggroundBlurProperty);
    document.documentElement.style.setProperty(backgroundSVG, backgroundSVGProperty);
}