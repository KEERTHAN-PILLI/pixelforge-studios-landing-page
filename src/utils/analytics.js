/**
 * Analytics Integration Module
 * Handles event tracking for Google Analytics (GA4) and Meta Pixel
 */

// Placeholders for initialization (Actual scripts are in index.html)
const GA_MEASUREMENT_ID = 'G-HXYRBS15LC'; 
const META_PIXEL_ID = 'META_PIXEL_ID';

/**
 * Validates and initializes base analytic states
 * Called once on App mount
 */
export const initAnalytics = () => {
    console.log(`[Analytics] Initialized GA4 with ${GA_MEASUREMENT_ID}`);
    console.log(`[Analytics] Initialized Meta Pixel with ${META_PIXEL_ID}`);
};

/**
 * Tracks generic page views across the application
 * @param {string} url - The current URL path
 */
export const trackPageView = (url) => {
    // -> GA4 Page View Tracking
    if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-HXYRBS15LC', {
            page_path: url,
        });
    }

    // -> Meta Pixel Page View Tracking
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
    }
};

/**
 * Standardized Event Dispatcher
 * @param {string} eventName - Standardized event name (e.g., 'cta_click', 'form_submit')
 * @param {object} params - Optional payload data
 */
export const trackEvent = (eventName, params = {}) => {
    // -> GA4 Custom Event Tracking
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
    } else {
        console.log(`[GA4] Simulated Event: ${eventName}`, params);
    }

    // -> Meta Pixel Custom Event Mapping
    if (typeof window.fbq === 'function') {
        if (eventName === 'form_submit') {
            // Map our form submit to Facebook's standard 'Lead' event
            window.fbq('track', 'Lead', params);
        } else if (eventName === 'cta_click') {
            // Map our specific CTA clicks as custom events in FB
            window.fbq('trackCustom', 'CTA_Click', params);
        }
    } else {
        console.log(`[Meta Pixel] Simulated Event: ${eventName === 'form_submit' ? 'Lead' : 'CTA_Click'}`, params);
    }
};

/**
 * Specialized Tracker: Call-To-Action Button Clicks
 * Triggered when a user clicks a primary conversion button
 */
export const trackCTAClick = (buttonName) => {
    trackEvent('cta_click', { button_name: buttonName });
};

/**
 * Specialized Tracker: Lead Generation
 * Triggered ONLY when a form passes validation and successfully submits
 */
export const trackLead = (emailDomain) => {
    trackEvent('form_submit', { domain: emailDomain });
};
