import { useAppMutation, useAppQuery } from '../../../../client/libs/query';
import type { Response } from '../../../config/types';
import type { RequestApiError } from '../types';

import requestsApi from '../config';

interface RequestItemReponse {
  id: number;
  name: string;
  content: string;
  price: number;
  discount_percent: number;
  image_url: string;
}

type RequestsItemsResponse = {
  data: RequestItemReponse[];
};

interface GetByIdRequestResponse extends RequestsItemsResponse {}

interface GetAllRequestsResponse extends RequestsItemsResponse {}

type IGetByIdRequestsParams = {
  id: string;
};

const getRequests = Object.freeze({
  getAll(): Promise<Response<GetAllRequestsResponse>> {
    return requestsApi.get('');
  },
  getById({ id }: IGetByIdRequestsParams): Promise<Response<GetByIdRequestResponse>> {
    console.log(id)
    const params = new URLSearchParams();
    return requestsApi.get('/', );
  },
});

export const useGetRequests = () => {
  return useAppQuery<Response<GetAllRequestsResponse>, RequestApiError>(
    ['all_requests'],
    getRequests.getAll,
  );
};

export const useGetRequestsById = ({ id }: IGetByIdRequestsParams) => {
  return useAppQuery<Response<GetByIdRequestResponse>, RequestApiError>(['resquests_by_id'], () => getRequests.getById({id}));
};
