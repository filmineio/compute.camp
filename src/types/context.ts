import { ComponentType, FC } from 'react';

export type Action<Type, Payload> = {
  type: Type;
  payload: Payload;
};

export type ActionWithoutPayload<Type> = {
  type: Type;
};

export type Reducer<State, ActionUnion> = (state: State, action: ActionUnion) => State;

export type WithContext<State> = <Props>(
  Component: ComponentType<Props>,
  mapStateToProps: (state: State, props: Props) => Props,
) => FC<Props>;
