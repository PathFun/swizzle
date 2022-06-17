import type { App, Plugin } from 'vue';
import FR, { defaultWidgets, defaultMapping, useForm } from './FR.vue';

export type { Schema, FormParams } from './Interface';

FR.install = (app: App): App => {
  app.component(FR.name, FR);
  return app;
};

export { useForm, defaultWidgets, defaultMapping };
export default FR as typeof FR & Plugin;
