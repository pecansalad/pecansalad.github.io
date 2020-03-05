export interface ISection {
  registrationNumber: number;
  sectionCode: string;
  instructors: Array<string>;
  type: string;
  status: string;
  meetings: Array<IMeeting>;
  recitations: Array<ISection> | null;
  location: string;
  sectionName: string;
}

export interface IMeeting {
  beginDate: Date;
  duration: number;
  endDate: Date;
}

export interface ICourse {
  name: string;
  deptCourseId: string;
  sections: Array<ISection>;
}

export enum LoadingState {
  Loading,
  Success,
  Failed
}
