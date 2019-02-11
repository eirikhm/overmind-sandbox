
import { createHook } from "overmind-react";

import {
  IConfig,
  TOnInitialize,
  IAction,
  IOperator,
  IDerive,
  IState,
} from 'overmind'
import { config } from './config';

type Config = IConfig<typeof config>


export interface OnInitialize extends TOnInitialize<Config> { }

export interface Action<Input = void> extends IAction<Config, Input> { }

export interface Operator<Input = void, Output = Input> extends IOperator<Config, Input, Output> { }

export interface Derive<Parent extends IState, Output> extends IDerive<Config, Parent, Output> { }

export const useOvermind = createHook<typeof config>()