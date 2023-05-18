export type RequestState<Error = string> =
  | { status: 'Initial' }
  | { status: 'InProgress' }
  | { status: 'Error'; error: Error }
  | { status: 'Success' };
