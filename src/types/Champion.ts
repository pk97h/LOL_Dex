type Champion = {
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {
      attack: number;
      defense: number;
      magic: number;
      difficulty: number;
    };
  };