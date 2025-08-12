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
    var highlight = "--highlight";

    var taskbar = "--taskbar";
    var scrollbar = "--scrollbar";
    var boxOpacity = "--box-opacity";

    var equationVisbility = "--equation-visibility";

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
    var highlightProperty;

    var taskbarProperty;
    var scrollbarProperty;
    var boxOpacityProperty;

    var equationVisbilityProperty;

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
        highlightProperty = "#E6E6E6";

        taskbarProperty = "#3a4750";
        scrollbarProperty = "#3a4750";
        boxOpacityProperty = "0.80";

        equationVisbilityProperty = "hidden";

        textColorLightProperty = "#f2f2f2";
        textColorDarkProperty = "#000000";

        backgroundColorProperty = "#E6E6E6";
        backggroundBlurProperty = "blur(10px)";
        backgroundSVGProperty = "url('../assets/backgrounds/background-svg-red.svg')";

        aninmateTheme1();

    } else if (2 == theme) {

        // Green color theme properties.
        accent1Property = "#2aa62a";
        accent2Property = "#14a516";
        accent3Property = "#3ecf67";
        accent4Property = "#304135";
        accent5Property = "#3a5042";

        contrastProperty = "#daffd9";
        contrastDarkProperty = "#303841";

        shadowProperty = "#054b27";
        borderColorProperty = "#ffffff";
        highlightProperty = "#aaffa8";

        taskbarProperty = "#3a5049";
        scrollbarProperty = "#3a5047";
        boxOpacityProperty = "0.80";

        equationVisbilityProperty = "hidden";

        textColorLightProperty = "#f2f2f2";
        textColorDarkProperty = "#000000";

        backgroundColorProperty = "#001409";
        backggroundBlurProperty = "blur(10px)";
        backgroundSVGProperty = "url('../assets/backgrounds/background-svg-green.svg')";

        aninmateTheme2();

    } else if (3 == theme) {

        // Blue color theme properties.
        accent1Property = "#ea6a1b";
        accent2Property = "#df6c24";
        accent3Property = "#e07a3a";
        accent4Property = "#025062";
        accent5Property = "#0e67c0";

        contrastProperty = "#00ffee";
        contrastDarkProperty = "#000000";

        shadowProperty = "#7f7f7f";
        borderColorProperty = "#ffffff";
        highlightProperty = "#00d5ff";

        taskbarProperty = "#0e67c0";
        scrollbarProperty = "#ffffff";
        boxOpacityProperty = "1";

        equationVisbilityProperty = "hidden";

        textColorLightProperty = "#ffffff";
        textColorDarkProperty = "#000000";

        backgroundColorProperty = "#1284f7";
        backggroundBlurProperty = "blur(10px)";
        backgroundSVGProperty = "url('../assets/backgrounds/background-svg-blue.svg')";

        aninmateTheme3();

    } else {

        // White color theme properties.
        accent1Property = "#000000";
        accent2Property = "#000000";
        accent3Property = "#282828";
        accent4Property = "#545454";
        accent5Property = "#000000";

        contrastProperty = "#ffea00";
        contrastDarkProperty = "#000000";

        shadowProperty = "#7f7f7f";
        borderColorProperty = "#ffffff";
        highlightProperty = "#eeff00";

        taskbarProperty = "#000000";
        scrollbarProperty = "#ffffff";
        boxOpacityProperty = "1";

        equationVisbilityProperty = "hidden";

        textColorLightProperty = "#ffffff";
        textColorDarkProperty = "#000000";

        backgroundColorProperty = "#ffffff";
        backggroundBlurProperty = "blur(10px)";
        backgroundSVGProperty = "url('../assets/backgrounds/background-svg-white.svg')";

        aninmateTheme4();

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
    document.documentElement.style.setProperty(highlight, highlightProperty);

    document.documentElement.style.setProperty(taskbar, taskbarProperty);
    document.documentElement.style.setProperty(scrollbar, scrollbarProperty);
    document.documentElement.style.setProperty(boxOpacity, boxOpacityProperty);

    document.documentElement.style.setProperty(equationVisbility, equationVisbilityProperty);

    document.documentElement.style.setProperty(textColorLight, textColorLightProperty);
    document.documentElement.style.setProperty(textColorDark, textColorDarkProperty);
    
    document.documentElement.style.setProperty(backgroundColor, backgroundColorProperty);
    document.documentElement.style.setProperty(backggroundBlur, backggroundBlurProperty);
    document.documentElement.style.setProperty(backgroundSVG, backgroundSVGProperty);
}

/**
 * The animation for theme 1.
 */
function aninmateTheme1() {

}

/**
 * The animation for theme 2.
 */
function aninmateTheme2() {
    
}

/**
 * The animation for theme 3.
 */
function aninmateTheme3() {
    
}

/**
 * The animation for theme 4.
 */
function aninmateTheme4() {
    
}

generateTheme();