// Utility for handling Analytics
// Google Analytics Measurement ID and Meta Pixel ID placeholders as requested.

const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';
const META_PIXEL_ID = 'META_PIXEL_ID';

export const initAnalytics = () => {
    // These would normally be injected via snippets in index.html, 
    // but we simulate initialization and track PageView here.
    console.log(`[Analytics] Initialized GA4 with ${GA_MEASUREMENT_ID}`);
    console.log(`[Analytics] Initialized Meta Pixel with ${META_PIXEL_ID}`);
};

export const trackPageView = (url) => {
    // GA4 Page View
    if (typeof window.gtag === 'function') {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    } else {
        console.log(`[GA4] Tracked PageView: ${url}`);
    }

    // Meta Pixel Page View
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
    } else {
        console.log(`[Meta Pixel] Tracked PageView: ${url}`);
    }
};

export const trackEvent = (eventName, params = {}) => {
    // GA4 Custom Event
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
    } else {
        console.log(`[GA4] Tracked Event: ${eventName}`, params);
    }

    // Meta Pixel Custom Event (Mapping GA4 to Meta standard events as needed)
    if (typeof window.fbq === 'function') {
        if (eventName === 'form_submit') {
            window.fbq('track', 'Lead', params);
        } else if (eventName === 'button_click') {
            window.fbq('trackCustom', 'ButtonClick', params);
        }
    } else {
        console.log(`[Meta Pixel] Tracked Custom Event / Lead: ${eventName}`, params);
    }
};

export const trackCTAClick = (buttonName) => {
    trackEvent('button_click', { button_name: buttonName });
};

export const trackLead = (emailDomain) => {
    trackEvent('form_submit', { domain: emailDomain });
};
