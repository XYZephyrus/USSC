// ==UserScript==
// @name         Via Image Downloader
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  Adds a floating button to download all loaded images on the page
// @author       AI
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the floating button
    const btn = document.createElement('button');
    btn.innerText = '📷 DL';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '999999';
    btn.style.padding = '12px 16px';
    btn.style.backgroundColor = '#007bff';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '50px';
    btn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
    btn.style.fontWeight = 'bold';
    btn.style.fontSize = '14px';

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        // Find standard images, picture sources, and computed background images
        const srcSet = new Set();
        
        // 1. Grab standard img tags
        document.querySelectorAll('img').forEach(img => {
            if (img.src && !img.src.startsWith('data:')) srcSet.add(img.src);
        });

        // 2. Grab picture source tags
        document.querySelectorAll('source').forEach(source => {
            if (source.srcset) {
                const firstUrl = source.srcset.split(',')[0].trim().split(' ')[0];
                if (firstUrl && !firstUrl.startsWith('data:')) srcSet.add(firstUrl);
            }
        });

        // 3. Grab CSS background images
        document.querySelectorAll('*').forEach(el => {
            const bg = window.getComputedStyle(el).backgroundImage;
            if (bg && bg !== 'none' && bg.startsWith('url')) {
                const url = bg.match(/url\(['"]?([^'"]+)['"]?\)/);
                if (url && url[1] && !url[1].startsWith('data:')) srcSet.add(url[1]);
            }
        });

        const urls = Array.from(srcSet);
        if (urls.length === 0) {
            alert('No downloadable images found yet. Try scrolling down first!');
            return;
        }

        btn.innerText = `⏳ ${urls.length}`;
        btn.disabled = true;

        // Trigger staggered downloads to prevent browser lockup
        urls.forEach((url, index) => {
            setTimeout(() => {
                const a = document.createElement('a');
                a.href = url;
                a.download = `img_${index + 1}`;
                document.body.appendChild(a);
                a.click();
                a.remove();

                // Reset button when finished
                if (index === urls.length - 1) {
                    btn.innerText = '📷 DL';
                    btn.disabled = false;
                }
            }, index * 250); 
        });
    });
})();
