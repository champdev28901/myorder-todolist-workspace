import { ResMessage, ResStatus } from './constant/code.enum';
interface ResponseData {
  resStatus: string;
  resMessage: string;
  resData: unknown;
}

export const responseParse = (statusMsg: number, code: number, data: unknown) => {
  const newResponse: ResponseData = {
    resData: data,
    resMessage: ResMessage[statusMsg],
    resStatus: ResStatus[code],
  };
  return newResponse;
};
