import { useAppMutation, useAppQuery } from '../../../../client/libs/query';
import type { Response } from '../../../config/types';
import type { RequestApiError } from '../types';

import requestsApi from '../config';

interface RequestItemReponse {
  id: number;
  name: string;
  text: string;
  price: number;
  discount: number;
  preview_image: string;
}

type RequestsItemsResponse = {
  data: RequestItemReponse[];
};

interface GetByIdRequestResponse {
  data: RequestItemReponse;
}

interface GetAllRequestsResponse extends RequestsItemsResponse {}

type IGetByIdRequestsParams = {
  id: string;
};

const getRequests = Object.freeze({
  getAll(): Promise<Response<GetAllRequestsResponse>> {
    return requestsApi.get('');
  },
  getById({ id }: IGetByIdRequestsParams): Promise<Response<GetByIdRequestResponse>> {
    return requestsApi.get(`/${id}`);
  },
});

export const useGetProducts = () => {
  return useAppQuery<Response<GetAllRequestsResponse>, RequestApiError>(
    ['all_requests'],
    getRequests.getAll,
  );
};

export const useGetProductsById = ({ id }: IGetByIdRequestsParams) => {
  return useAppQuery<Response<GetByIdRequestResponse>, RequestApiError>(['resquests_by_id'], () => getRequests.getById({id}));
};
