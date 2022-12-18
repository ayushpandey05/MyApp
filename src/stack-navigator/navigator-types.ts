interface navigationType {
  push: (screen: string, params?: any) => void;
  popAndPush: (screenToPop: number, screen: string, params?: any) => void;
  goBack: ()=>void,
  replace: (screen: string, params?: any) => void;
  pop: (screenToPop: number)=>void
}

interface routeType {
    screenIndex: number,
    screenName: string,
}

export type {navigationType, routeType};
