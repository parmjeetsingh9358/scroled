"use strict";!function(){var e=document.createElement("link");e.href="./css/app.css",e.rel="stylesheet",document.head.appendChild(e)}();var $app=document.getElementById("app"),$appBody=document.getElementById("app-body"),$appIntro=document.getElementById("app-intro"),$appName=document.getElementById("app-name"),$appPlayBtnCont=document.querySelector("#app .play-btn-cont"),$appGround=document.getElementById("app-ground"),$ground=document.getElementById("ground"),$appFooter=document.getElementById("app-footer"),$playBtn=document.getElementById("play-btn"),showApp=function(){$app.show(),$appIntro.show(),$appName.show(),$appPlayBtnCont.show(),$appFooter.show()},showGround=function(e){$appName.hide(),$appPlayBtnCont.hide(function(){$appIntro.hide(),$appGround.show(),$ground.show(e)})};