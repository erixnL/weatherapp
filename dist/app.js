(()=>{"use strict";var e,t=document.getElementById("defaultCity"),n=function(){return""!==city.value||(emptyInput.style.display="block",!1)},c=document.getElementById("invalideName"),o=document.getElementById("weatherResult"),a=function(){emptyInput.style.display="none",c.style.display="none",""!=o.innerHTML&&(o.innerHTML="")},i=document.getElementById("invalideName"),d=document.getElementById("weatherResult"),l=document.getElementById("city"),u=document.getElementById("invalideName"),r=document.getElementById("weatherResult"),m=document.getElementById("city"),y=document.getElementById("emptyInput"),s=document.getElementById("invalideName");if(window.onload=function n(){null==e&&(e="wollongong"),e=localStorage.getItem("defaultCity");var c="http://api.weatherapi.com/v1/current.json?key=".concat("d5b2e1a2f78a432e82221541221212","&q=").concat(e,"&aqi=no");fetch(c).then((function(e){return e.json()})).then((function(e){return{icon:"https://"+e.current.condition.icon.split("//")[1],text:e.current.condition.text,temp_c:e.current.temp_c,name:e.location.name,country:e.location.country}})).then((function(e){var c=document.getElementById("userCityTemplate").innerHTML,o=Mustache.render(c,e);t.innerHTML=o,document.getElementById("changeDefault").addEventListener("click",(function(e){e.preventDefault();var c=document.getElementById("changeTemplate").innerHTML,o=Mustache.render(c);t.innerHTML=o,document.getElementById("saveChange").addEventListener("click",(function(){e.preventDefault();var t=document.getElementById("changedCity").value;localStorage.setItem("defaultCity",t),n()}))}))}))}(),window.innerWidth<=700&&(window.onload=function(){document.getElementById("defaultCity").style.display="block"}),document.getElementById("city").onfocus=function(){this.value="",y.style.display="none",s.style.display="none"},document.getElementById("submit").addEventListener("click",(function(e){if(e.preventDefault(),n(),a(),n()){var t="http://api.weatherapi.com/v1/current.json?key=".concat("d5b2e1a2f78a432e82221541221212","&q=").concat(l.value,"&aqi=no");fetch(t).then((function(e){return e.json()})).then((function(e){var t={icon:"https://"+e.current.condition.icon.split("//")[1],text:e.current.condition.text,temp_c:e.current.temp_c,name:e.location.name,country:e.location.country},n=document.getElementById("template").innerHTML,c=Mustache.render(n,t);d.innerHTML=c})).catch((function(){i.style.display="block"})),window.innerWidth<=700&&(document.getElementById("defaultCity").style.display="none")}})),document.getElementById("forecastBtn").addEventListener("click",(function(e){e.preventDefault(),n(),a();var t=document.createElement("ul"),c="";if(n()){var o="http://api.weatherapi.com/v1/forecast.json?key=".concat("d5b2e1a2f78a432e82221541221212","&q=").concat(m.value,"&days=5&aqi=no&alerts=no");fetch(o).then((function(e){return e.json()})).then((function(e){c+='<li><span class="resultHeadLine">'.concat(e.location.name,", ").concat(e.location.country," in Next Three Days:<span></li>"),e.forecast.forecastday.forEach((function(e){var t={date:e.date.slice(5),max:e.day.maxtemp_c,min:e.day.mintemp_c,icon:"https:"+e.day.condition.icon,conditionText:e.day.condition.text},n=document.getElementById("forecastTemplate").innerHTML,o=Mustache.render(n,t);c+=o})),""==r.innerHTML&&(t.innerHTML=c,r.appendChild(t))})).catch((function(){u.style.display="block"})),window.innerWidth<=700&&(document.getElementById("defaultCity").style.display="none")}})),window.innerWidth<=700){var p=document.getElementById("defaultCity");p.style.display="none",console.log(p)}})();