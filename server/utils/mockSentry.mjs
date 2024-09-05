import nodeModule from 'node:module';
import { createAddHookMessageChannel } from 'import-in-the-middle';

export function init() {
    nodeModule.register('import-in-the-middle/hook.mjs', import.meta.url);

    console.log(createAddHookMessageChannel())
}
