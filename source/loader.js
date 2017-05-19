/**
 * Simple svg loader in browser.
 *
 * @author Alexander Usolcev <alexander.usolcev@gmail.com>
 *
 */
class Loader {
    constructor(config) {
        this.config = Object.assign({
            size: 120, // px

            duration: 1, // second

            styleTemplate: null, // <style>....</style>
            loaderTemplate: null, // <svg>....</svg>

            container: document.getElementsByTagName('body')[0], // DOM element

            overlayClassName: 'browser-simple-loader-overlay', // String

        }, config);


        this.loader = document.createElement('div');
        this.loader.className = this.config.overlayClassName;

        this.loader.innerHTML = this.getStyleTemplate() + this.getLoaderTemplate();

        this.config.container.appendChild(this.loader);
    }

    getLoaderTemplate() {
        let {size, duration} = this.config;

        return this.config.loaderTemplate || `
            <svg width="${size}px" height="${size}px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                <g transform="rotate(0 50 50)">
                    <circle r="8" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;29.999999999999996 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#c5523f;#f2b736"></animate>
                    </circle>
                </g>
                <g transform="rotate(90 50 50)">
                    <circle r="8" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;29.999999999999996 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#f2b736;#499255"></animate>
                    </circle>
                </g>
                <g transform="rotate(180 50 50)">
                    <circle r="8" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;29.999999999999996 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#499255;#1875e5"></animate>
                    </circle>
                </g>
                <g transform="rotate(270 50 50)">
                    <circle r="8" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;29.999999999999996 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#1875e5;#c5523f"></animate>
                    </circle>
                </g>
            </svg>
        `;
    }

    getStyleTemplate() {
        return this.config.styleTemplate || `
            <style type="text/css">
                .browser-simple-loader-overlay {
                    background: rgba(255, 255, 255, 0.5);
                    bottom: 0;
                    left: 0;
                    position: fixed;
                    right: 0;
                    top: 0;
                    z-index: 1000;
                    display: none;
                }
        
                .browser-simple-loader-overlay svg {
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    z-index: 1001;
                    margin: -55px 0 0 -55px;
                }
            </style>
        `
    }

    show() {
        this.loader.style.display = 'block';
        this.config.container.style.overflow = 'hidden';

        return this;
    }

    hide() {
        this.loader.style.display = 'none';
        this.config.container.style.overflow = '';

        return this;
    }
}

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Loader = factory();
    }
}(this, function() {
    return Loader;
}));