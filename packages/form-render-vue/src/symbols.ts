import { InjectionKey } from 'vue';
import { FormInstance, FRCoreProps } from '../Interface';

export const FORM_PROVIDE_KEY: InjectionKey<FormInstance> = Symbol();
export const PROPS_PROVIDE_KEY: InjectionKey<FRCoreProps> = Symbol();
