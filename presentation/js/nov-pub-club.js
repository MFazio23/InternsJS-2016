/**
 * Created by MFazio on 2015-11-14.
 */
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    slideNumber: true,
    center: true,
    transition: 'convex',

    dependencies: [{
        src: 'node_modules/reveal.js/lib/js/classList.js',
        condition: function () {
            return !document.body.classList;
        }
    }, {
        src: 'node_modules/reveal.js/plugin/markdown/marked.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'node_modules/reveal.js/plugin/markdown/markdown.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'node_modules/reveal.js/plugin/highlight/highlight.js',
        async: true,
        callback: function () {
            hljs.initHighlightingOnLoad();
        }
    }, {
        src: 'node_modules/reveal.js/plugin/zoom-js/zoom.js',
        async: true,
        condition: function () {
            return !!document.body.classList;
        }
    }, {
        src: 'node_modules/reveal.js/plugin/notes/notes.js',
        async: true,
        condition: function () {
            return !!document.body.classList;
        }
    }]
});