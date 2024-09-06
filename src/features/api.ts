import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TCreateInventoryItemRequest, TCreateInventoryItemResponse, TDeleteInventoryItemResponse, TGetRetailerNotificationsResponse, TGetUserProfileResponse, TItemSearchRequest, TItemSearchResponse, TListInventoryItemsResponse, TLoginRequest, TLoginResponse, TRegisterRequest, TRegisterResponse, TUpdateInventoryItemRequest, TUpdateInventoryItemResponse, TUploadInventoryRequest, TUploadInventoryResponse, TViewItemRequest, TViewItemResponse } from '../utils/types'
import { getUser } from '../utils/useAuth';

const { userToken } = getUser()

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://stockinch.ng/app',
        baseUrl: 'http://127.0.0.1:8001',
        headers: {},
        prepareHeaders: async (headers) => {

            try {
                const token = userToken || "";
                if (token != null && token !== "") {
                    headers.set('Authorization', `Bearer ${token}`)
                }
                return headers;
            } catch (error) {
                console.error(error);
            }

        }

    }),
    tagTypes: ['Cart'],

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
            query: () => `/accounts/api/profile/`,
        }),

        getProducts: builder.query({
            query: () => `/api/inventory/products/`,
        }),

        getProductsByCategory: builder.query({
            query: (id) => `/api/inventory/categories/${id}/products/`,
        }),



        getCategories: builder.query({
            query: () => `/api/inventory/categories/`,
        }),

        // Add To Cart

        addToCart: builder.mutation({
            query: (id) => {

                const formData = new FormData();
                formData.append('inventory_item_id', id)

                return ({
                    url: "shopper-panel/cart/add/",
                    method: "POST",
                    body: formData
                })
            },
            invalidatesTags: [
                { type: 'Cart', id: 'All' }
            ]
        }),

        viewCart: builder.query({
            query: () => `/shopper-panel/cart/`,
        }),

        fetchSingleProduct: builder.query({
            query: (id) => `/shopper-panel/products/${id}/`,
        }),



        // Inventory Endpoints

        uploadInventoryList: builder.mutation<TUploadInventoryResponse, TUploadInventoryRequest>({
            query: (data) => ({
                url: '/inventory/api/upload/',
                method: 'POST',
                body: data,
            }),
        }),

        // List Shopper Inventory People

        ListInventory: builder.query({
            query: () => `/retailer-panel/inventory/`,
        }),

        viewDashboard: builder.query({
            query: () => `/retailer-panel/dashboard/`,
        }),

        createInventoryItem: builder.mutation<TCreateInventoryItemResponse, TCreateInventoryItemRequest>({
            query: (data) => ({
                url: '/retailer-panel/inventory/add/',
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

        deleteInventoryItem: builder.mutation<TDeleteInventoryItemResponse, any>({
            query: (item_id) => ({
                url: `retailer-panel/inventory/${item_id}`,
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
    useGetProductsQuery,
    useGetCategoriesQuery,
    useGetProductsByCategoryQuery,
    useUploadInventoryListMutation,
    useCreateInventoryItemMutation,
    useUpdateInventoryItemMutation,
    useDeleteInventoryItemMutation,
    useListInventoryItemsQuery,
    useSearchItemsQuery,
    useViewItemQuery,
    useGetRetailerNotificationsQuery,
    useViewDashboardQuery,

    // add To cart
    useAddToCartMutation,

    // view Cart
    useViewCartQuery,

    // fetch Singlke Product
    useFetchSingleProductQuery,

    //List Inventory Retailer
    useListInventoryQuery,

} = api
