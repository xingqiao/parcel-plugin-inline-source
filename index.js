const fs = require('fs');
const process = require('process');
const { inlineSource } = require('inline-source');

module.exports = bundler => {
    if (process.env.NODE_ENV === 'production') {
        bundler.on('bundled', bundle => {
            const bundles = Array.from(bundle.childBundles).concat([bundle]);
            return Promise.all(
                bundles.map(async bundle => {
                    if (bundle.entryAsset && bundle.entryAsset.type === 'html') {
                        let html = await inlineSource(bundle.name, {
                            rootpath: bundle.entryAsset.options.outDir,
                            htmlpath: bundle.name
                        });
                        fs.writeFileSync(bundle.name, html);
                    }
                })
            );
        });
    }
};
