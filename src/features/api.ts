import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TCreateInventoryItemRequest, TCreateInventoryItemResponse, TDeleteInventoryItemRequest, TDeleteInventoryItemResponse, TGetRetailerNotificationsResponse, TGetUserProfileResponse, TItemSearchRequest, TItemSearchResponse, TListInventoryItemsResponse, TLoginRequest, TLoginResponse, TRegisterRequest, TRegisterResponse, TUpdateInventoryItemRequest, TUpdateInventoryItemResponse, TUploadInventoryRequest, TUploadInventoryResponse, TViewItemRequest, TViewItemResponse } from '../utils/types'
import { getUser } from '../utils/useAuth';

const { userToken } = getUser()

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://stockinch.ng/app',
        headers: {},
        prepareHeaders: async (headers) => {

            try {
                const token = userToken || "";
                if(token != null && token !== ""){
                    headers.set('Authorization', `Bearer ${token}`)
                }
                return headers;
            } catch (error) {
                console.error(error);
            }

        }

    }),
    endpoints: (builder) => ({

        register: builder.mutation<TRegisterResponse, TRegisterRequest>({
            query: (data) => ({
                url: '/accounts/api/register/',
                method: 'POST',
                body: data,
            }),
        }),

        login: builder.mutation<TLoginResponse, TLoginRequest>({
            query: (data) => ({
                url: '/accounts/api/login/',
                method: 'POST',
                body: data,
            }),
        }),

        getUserProfile: builder.query<TGetUserProfileResponse, unknown>({
            query: () => `/accounts/api/profile`,
        }),

        // Inventory Endpoints

        uploadInventoryList: builder.mutation<TUploadInventoryResponse, TUploadInventoryRequest>({
            query: (data) => ({
                url: '/inventory/api/upload/',
                method: 'POST',
                body: data,
            }),
        }),

        createInventoryItem: builder.mutation<TCreateInventoryItemResponse, TCreateInventoryItemRequest>({
            query: (data) => ({
                url: '/inventory/api/create/',
                method: 'POST',
                body: data,
            }),
        }),

        updateInventoryItem: builder.mutation<TUpdateInventoryItemResponse, TUpdateInventoryItemRequest>({
            query: (data) => ({
                url: `/inventory/api/update/${data.item_id}`,
                method: 'PUT',
                body: data,
            }),
        }),

        deleteInventoryItem: builder.mutation<TDeleteInventoryItemResponse, TDeleteInventoryItemRequest>({
            query: (data) => ({
                url: `/inventory/api/delete/${data.item_id}`,
                method: 'DELETE',
            }),
        }),

        listInventoryItems: builder.query<TListInventoryItemsResponse, unknown>({
            query: () => '/inventory/api/list/',
        }),

        // Shoppers Endpoints

        searchItems: builder.query<TItemSearchResponse, TItemSearchRequest>({
            query: (query) => `/inventory/api/search/${query}`,
        }),

        viewItem: builder.query<TViewItemResponse, TViewItemRequest>({
            query: (item_id) => `/inventory/api/view/${item_id}`,
        }),

        getRetailerNotifications: builder.query<TGetRetailerNotificationsResponse, number>({
            query: (retailer_id) => `/inventory/api/retailer/${retailer_id}`,
        }),


    }),
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetUserProfileQuery,
    useUploadInventoryListMutation,
    useCreateInventoryItemMutation,
    useUpdateInventoryItemMutation,
    useDeleteInventoryItemMutation,
    useListInventoryItemsQuery,
    useSearchItemsQuery,
    useViewItemQuery,
    useGetRetailerNotificationsQuery,
} = api
