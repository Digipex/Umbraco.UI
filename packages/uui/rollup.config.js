import { UUIProdConfig } from '../rollup-package.config.mjs';

export default UUIProdConfig({
  entryPoints: ['index'],
  bundle: 'index',
  namespace: 'uui',
});
