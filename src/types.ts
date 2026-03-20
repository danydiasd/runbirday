export type EventInfo = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  actionLabel: string;
  actionHref: string;
  highlights?: string[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export const shirtSizes = ['PP', 'P', 'M', 'G', 'GG', 'XG'] as const;
export type ShirtSize = (typeof shirtSizes)[number];

export const raceDistances = ['5km', '10km'] as const;
export type RaceDistance = (typeof raceDistances)[number];

export type WorshipAndPartyFormData = {
  name: string;
  email: string;
  phone: string;
};

export type RaceRegistrationFormData = {
  name: string;
  birthDate: string;
  shirtSize: ShirtSize;
  distance: RaceDistance;
  allergies: string;
  bloodType: string;
};

export type RaceLoginData = {
  email: string;
  password: string;
  profile: 'inscrito' | 'administrador';
};
