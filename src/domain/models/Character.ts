export interface Character {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
  }


export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Animal = "Animal",
    Human = "Human",
    Unknown = "unknown",
    MythologicalCreature = "Mythological Creature",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
