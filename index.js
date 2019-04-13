const fs = require('fs');
const { inlineSource } = require('inline-source');

module.exports = bundler => {
    bundler.on('bundled', bundle => {
        const bundles = Array.from(bundle.childBundles).concat([bundle]);
        return Promise.all(
            bundles.map(async bundle => {
                if (!bundle.entryAsset || bundle.entryAsset.type !== 'html') return;
                let html = await inlineSource(bundle.name, {
                    rootpath: bundle.entryAsset.options.outDir,
                    htmlpath: bundle.name
                });
                fs.writeFileSync(bundle.name, html);
            })
        );
    });
};
