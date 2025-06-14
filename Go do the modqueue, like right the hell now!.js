// ==UserScript==
// @name         Go do the modqueue, like right the hell now!
// @version      1.1
// @description  Assists in the clearing of the modqueue, clearly.
// @author       Kawa
// @match        https://*.donmai.us/*
// @icon         https://raw.githubusercontent.com/Seija-Kijin/danbooru-userscripts/refs/heads/main/resources/danbooru-logo.png
// @grant        GM_getResourceURL
// @resource     Twitter https://raw.githubusercontent.com/Seija-Kijin/danbooru-userscripts/refs/heads/main/resources/Moqqueue%20Icons/i1500.png
// @resource     Wajaja https://raw.githubusercontent.com/Seija-Kijin/danbooru-userscripts/refs/heads/main/resources/Moqqueue%20Icons/i1000.png
// @resource     Pout https://raw.githubusercontent.com/Seija-Kijin/danbooru-userscripts/refs/heads/main/resources/Moqqueue%20Icons/i500.png
// @resource     Evazion https://raw.githubusercontent.com/Seija-Kijin/danbooru-userscripts/refs/heads/main/resources/Moqqueue%20Icons/i0.png
// ==/UserScript==

(function(){
    'use strict';

// Preload images
    const Twitter = GM_getResourceURL('Twitter');
    const Wajaja = GM_getResourceURL('Wajaja');
    const Pout = GM_getResourceURL('Pout');
    const Evazion = GM_getResourceURL('Evazion');

// Select modqueue count
   const mqBadge = document.querySelector('#subnav-modqueue .badge-blue')
   if (mqBadge)
       {
        const modqueueCount = parseInt(mqBadge.textContent.trim())

        if (!isNaN(modqueueCount))
        {
            const commonImageStyles = {
                marginLeft: '5px',
                verticalAlign: 'middle',
                width: '16px',
                height: '16px'
        }

        function applyCommonStyles(imgElement)
        {
            for (const prop in commonImageStyles)
            {
                imgElement.style[prop] = commonImageStyles[prop];
            }
        }

        let imageUrl = '';
        if (modqueueCount >= 1000)
            {
                imageUrl = Twitter;
            }
        else if (modqueueCount > 500)
            {
                imageUrl =Wajaja;
            }
        else if (modqueueCount > 0)
            {
                imageUrl = Pout;
            }
        else if (modqueueCount === 0)
            {
                imageUrl = Evazion;
            }

            if (imageUrl)
            {
                const img = document.createElement('img');
                img.src = imageUrl;
                applyCommonStyles(img);
                mqBadge.parentNode.appendChild(img);
            }
         }
        }
})();

