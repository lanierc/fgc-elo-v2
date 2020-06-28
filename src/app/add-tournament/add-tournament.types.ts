export interface IResult {
  place: Number;
  player: String;
}

enum Site {
  Challonge = 'Challonge',
  Smash = 'Smash',
  BurningMeter = 'Burning Meter',
}

export interface ITournament {
  name: String;
  location: String;
  date: Date;
  bracketId: String;
  bracketSite: Site;
  results: [IResult];
  replay: String;
}
