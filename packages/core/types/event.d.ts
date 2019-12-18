import Breadcrumb from "./breadcrumb";
import * as common from "./common";

declare class Event {
  public static create(
    maybeError: any,
    tolerateNonErrors: boolean,
    handledState: HandledState,
    component: string,
    errorFramesToSkip: number,
    logger?: common.Logger
  ): Event;

  public app: {
    releaseStage: string;
    [key: string]: string;
  };
  public apiKey: string;
  public breadcrumbs: Breadcrumb[];
  public context: string;
  public device: object;
  public errorClass: string;
  public errorMessage: string;
  public groupingHash: string;
  public severity: "info" | "warning" | "error";
  public stacktrace: Stackframe[];
  public session: object;
  public request: {
    url: string;
  };
  public originalError: any;

  // user
  public getUser(): { id?: string; email?: string; name?: string };
  public setUser(id?: string, email?: string, name?: string): void;

  // metadata
  public addMetadata(section: string, values: { [key: string]: any }): void;
  public addMetadata(section: string, key: string, value: any): void;
  public getMetadata(section: string, key?: string): any;
  public clearMetadata(section: string, key?: string): void;
}

interface HandledState {
  severity: string;
  unhandled: boolean;
  severityReason: {
    type: string;
    [key: string]: any;
  };
}

interface Stackframe {
  file: string;
  method?: string;
  lineNumber?: number;
  columnNumber?: number;
  code?: object;
  inProject?: boolean;
}

export default Event;