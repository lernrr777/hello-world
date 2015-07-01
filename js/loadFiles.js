var basePath = "https://raw.githack.com/lernrr777/hello-world/master/";



/* Start of adding Meta Tags */

document.getElementsByTagName('head')[0].innerHTML += ' <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />';
document.getElementsByTagName('head')[0].innerHTML += ' <meta name="apple-mobile-web-app-capable" content="yes" /> ';
document.getElementsByTagName('head')[0].innerHTML += ' <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />';
document.getElementsByTagName('head')[0].innerHTML += ' <meta name="apple-mobile-web-app-status-bar-style" content="yes" />';

/* End of adding Meta Tags */



var htmlCode="";
htmlCode += "<div ng-app=\"MobileAngularUiExamples\" ng-controller=\"MainController\" ui-prevent-touchmove-defaults>";
htmlCode += "    ";
htmlCode += "    <div ng-include=\"'https:\/\/raw.githack.com\/lernrr777\/hello-world\/master\/html\/sidebar.html'\" ui-track-as-search-param='true' class=\"sidebar sidebar-left\"><\/div>";
htmlCode += "";
htmlCode += "    <div ng-include=\"'https:\/\/raw.githack.com\/lernrr777\/hello-world\/master\/html\/sidebarRight.html'\" class=\"sidebar sidebar-right\"><\/div>";
htmlCode += "";
htmlCode += "    <div class=\"app\" ui-swipe-right='Ui.turnOn(\"uiSidebarLeft\")' ui-swipe-left='Ui.turnOff(\"uiSidebarLeft\")'>";
htmlCode += "";
htmlCode += "        ";
htmlCode += "";
htmlCode += "        <div class=\"navbar navbar-app navbar-absolute-top\">";
htmlCode += "            <div class=\"navbar-brand navbar-brand-center\" ui-yield-to=\"title\">";
htmlCode += "                Mobile Angular UI";
htmlCode += "            <\/div>";
htmlCode += "            <div class=\"btn-group pull-left\">";
htmlCode += "                <div ui-toggle=\"uiSidebarLeft\" class=\"btn sidebar-toggle\">";
htmlCode += "                    <i class=\"fa fa-bars\"><\/i> Menu";
htmlCode += "                <\/div>";
htmlCode += "            <\/div>";
htmlCode += "            <div class=\"btn-group pull-right\" ui-yield-to=\"navbarAction\">";
htmlCode += "                <div ui-toggle=\"uiSidebarRight\" class=\"btn\">";
htmlCode += "                    <i class=\"fa fa-comment\"><\/i> Chat";
htmlCode += "                <\/div>";
htmlCode += "            <\/div>";
htmlCode += "        <\/div>";
htmlCode += "";
htmlCode += "";
htmlCode += "";
htmlCode += "";
htmlCode += "";
htmlCode += "        ";
htmlCode += "        <div class=\"app-body\" ng-class=\"{loading: loading}\">";
htmlCode += "            <div ng-show=\"loading\" class=\"app-content-loading\">";
htmlCode += "                <i class=\"fa fa-spinner fa-spin loading-spinner\"><\/i>";
htmlCode += "            <\/div>";
htmlCode += "            <div class=\"app-content page {{ pageClass }}\" ng-view>";
htmlCode += "";
htmlCode += "            <\/div>";
htmlCode += "        <\/div>";
htmlCode += "";
htmlCode += "    <\/div>";
htmlCode += "    ";
htmlCode += "";
htmlCode += "    <div ui-yield-to=\"modals\"><\/div>";
htmlCode += "<\/div>";


document.body.innerHTML += htmlCode;

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
 
/* Start Loading CSS in this block */

loadjscssfile(basePath + "css/mobile-angular-ui-hover.min.css", "css");
loadjscssfile(basePath + "css/mobile-angular-ui-base.css", "css");
loadjscssfile(basePath + "css/mobile-angular-ui-desktop.min.css", "css");
loadjscssfile(basePath + "css/demo.css", "css");

/* End Loading CSS in this block */


/* Start Loading JS in this block */

  document.write('<script type="text/javascript" src="'+basePath+'js/angular.min.js" ></script>');
  document.write('<script type="text/javascript" src="'+basePath+'js/angular-route.min.js" ></script>');
  document.write('<script type="text/javascript" src="'+basePath+'js/mobile-angular-ui.min.js" ></script>');
  document.write('<script type="text/javascript" src="'+basePath+'js/angular-animate.min.js" ></script>');
  document.write('<script type="text/javascript" src="'+basePath+'js/mobile-angular-ui.gestures.min.js" ></script>');
  document.write('<script type="text/javascript" src="'+basePath+'js/demo.js" ></script>');
  
/* End Loading JS in this block */

