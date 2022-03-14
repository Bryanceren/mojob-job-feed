import { IPage, JobListing, PositionFunction } from "@/models/models";

export interface JobsState {
  list?: IPage<JobListing>;
  positions?: string;
  perPage?: number;
  loading?: boolean;
}
