import { DefineComponent } from 'vue';

export interface IModule {
  component: DefineComponent;
  props?: { [key: string]: any };
}
