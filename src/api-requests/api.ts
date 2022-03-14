import { AxiosStatic } from "axios";
import { IPage, JobListing, PositionFunction } from "@/models/models";

export default class BaseApi {
  public axios!: AxiosStatic;
  protected baseUrl: string;

  constructor(url: string, axios: AxiosStatic) {
    this.baseUrl = url;
    this.axios = axios;
  }

  public getPositionFunctions = (): Promise<IPage<PositionFunction>> =>
    this.axios
      .get(`${this.baseUrl}job/position-functions/?page_size=100`)
      .then((response) => response.data);

  public getJobListings = (
    page_size?: number,
    position_functions?: string
  ): Promise<IPage<JobListing>> =>
    this.axios
      .get(`${this.baseUrl}job/listings/`, {
        params: { page_size,position_functions, use_pagination: "True" },
      })
      .then((response) => response.data);

  /**
   * TIP: Create a function called getJobListings
   * Use our public api documentation to find out what endpoint to use
   * https://test-api.mojob.io/public/docs/
   */
}
