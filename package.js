Package.describe({
    summary: 'Angular\'s directive for hammerjs by monospaced.'
});

Package.on_use(function (api) {
    api.add_files('components/hammerjs/dist/hammer.min.js', 'client');
    api.add_files('angular-hammer.js', 'client');
});