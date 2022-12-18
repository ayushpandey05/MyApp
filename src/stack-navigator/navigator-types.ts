interface navigationType {
  push: (args: {
    screen: string;
    params?: any;
    modal?: boolean;
    modalBackdrop?: string;
  }) => void;
  popAndPush: (args: {
    screenToPop: number;
    screen: string;
    params?: any;
    modal?: boolean;
    modalBackdrop?: string;
  }) => void;
  goBack: () => void;
  replace: (args: {
    screen: string;
    params?: any;
    modal?: boolean;
    modalBackdrop?: string;
  }) => void;
  pop: (screenToPop: number) => void;
}

interface routeType {
  currentScreenIndex: number;
  screenIndex: number;
  screenName: string;
  params?: any;
  modal?: boolean;
  modalBackdrop?: string;
}

export type {navigationType, routeType};
