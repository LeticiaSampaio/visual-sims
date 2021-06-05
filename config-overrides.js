const { injectBabelPlugin } = require('react-app-rewired');

const rootImportConfig = [
    "root-import",
    {
        rootPathPrefix: "~",
        rootPathSufix: "src"
    }
];

module.expors = config => injectBabelPlugin(rootImportConfig, config);