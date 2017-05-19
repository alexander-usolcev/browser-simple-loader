/**
 * browser-simple-loader
 *
 * Simple html5 (based on svg) loader in browser.
 *
 * @author Alexander Usolcev <alexander.usolcev@gmail.com>
 *
 */

let instance;

class Loader {
    /**
     * The loader main class.
     *
     * @param {{size: Number, duration: Number, radius: Number, colors: [...[]], templates: {style: String, loader: String}, container: Node, className: String }} [config]
     */
    constructor(config) {
        if (instance) {
            console.warn('Loader is a singleton. You trying call new Loader() but you have a another instance of Loader on the page. Use them: ', instance);

            return instance;
        }

        this.config = Object.assign({
            size: 120, // px

            duration: 1, // seconds
            radius: 8, // px
            colors: [
                ['#c5523f', '#f2b736'],
                ['#f2b736', '#499255'],
                ['#499255', '#1875e5'],
                ['#1875e5', '#c5523f'],
            ],

            templates: {
                style: null, // <style>....</style>
                loader: null // <svg>....</svg>
            },

            container: document.getElementsByTagName('body')[0], // DOM element

            className: 'browser-simple-loader' // String
        }, config);


        this.loader = document.createElement('div');
        this.loader.className = this.config.className;
        this.loader.innerHTML = this.getStyleTemplate() + this.getLoaderTemplate();

        this.container = this.config.container;

        this.container.appendChild(this.loader);

        instance = this;
    }

    /**
     * Static method to get a instance.
     *
     * @return {*}
     */
    static getInstance() {
        return instance;
    }

    /**
     * Method of creating a template for loader.
     *
     * @return {string}
     */
    getLoaderTemplate() {
        let {templates: {loader}, size, duration, radius, colors} = this.config;

        return loader || `
            <svg width="${size}px" height="${size}px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="0" y="0" width="100" height="100" fill="none"></rect>
                <g transform="rotate(0 50 50)">
                    <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[0][0]};${colors[0][1]}"></animate>
                    </circle>
                </g>
                <g transform="rotate(90 50 50)">
                    <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[1][0]};${colors[1][1]}"></animate>
                    </circle>
                </g>
                <g transform="rotate(180 50 50)">
                    <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[2][0]};${colors[2][1]}"></animate>
                    </circle>
                </g>
                <g transform="rotate(270 50 50)">
                    <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
                        <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[3][0]};${colors[3][1]}"></animate>
                    </circle>
                </g>
            </svg>
        `;
    }

    /**
     * Method of creating a template for styles.
     *
     * @return {string}
     */
    getStyleTemplate() {
        let {templates: {style}, size} = this.config;

        return style || `
            <style type="text/css">
                .browser-simple-loader {
                    background: rgba(255, 255, 255, 0.5);
                    bottom: 0;
                    left: 0;
                    position: fixed;
                    right: 0;
                    top: 0;
                    z-index: 1000;
                    display: none;
                }
        
                .browser-simple-loader svg {
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    z-index: 1001;
                    margin: -${size / 2}px 0 0 -${size / 2}px;
                }
            </style>
        `
    }

    /**
     * Show loader method.
     *
     * @return {Loader}
     */
    show() {
        this.loader.style.display = 'block';
        this.container.style.overflow = 'hidden';

        return this;
    }

    /**
     * Hide loader method.
     *
     * @return {Loader}
     */
    hide() {
        this.loader.style.display = 'none';
        this.container.style.overflow = '';

        return this;
    }
}

/**
 * Export Loader to popular modules.
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Loader = factory();
    }
}(this, () => Loader));