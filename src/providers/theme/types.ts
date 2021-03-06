export type TTheme = {
  boxShadow: string;
  colors: {
    configuration: string;
    greyBackground: string;
    greyText: string;
    negative: string;
    positive: string;
    yellowBackground: string;
  };
  spaces: number[];
  texts: {
    normal: {
      color: string;
      fontSize: string;
      fontWeight: string;
    };
    title: {
      color: string;
      fontSize: string;
      fontWeight: string;
    };
  };
};
