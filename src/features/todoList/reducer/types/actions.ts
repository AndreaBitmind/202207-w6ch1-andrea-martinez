export interface Anyaction {
  type: any;
}
export interface UnknownAction extends Anyaction {
  type: string;
}
