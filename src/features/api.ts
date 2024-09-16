import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TCreateInventoryItemRequest, TCreateInventoryItemResponse, TDeleteInventoryItemResponse, TGetRetailerNotificationsResponse, TGetUserProfileResponse, TItemSearchRequest, TItemSearchResponse, TListInventoryItemsResponse, TLoginRequest, TLoginResponse, TRegisterRequest, TRegisterResponse, TUpdateInventoryItemRequest, TUpdateInventoryItemResponse, TUploadInventoryRequest, TUploadInventoryResponse, TViewItemRequest, TViewItemResponse } from '../utils/types'
import { getUser } from '../utils/useAuth';

const { userToken } = getUser()

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://stockinch.ng/app',
        // baseUrl: 'http://127.0.0.1:8001',
        baseUrl: 'https://ajikaze.pythonanywhere.com',
        headers: {},
        prepareHeaders: async (headers) => {

            try {
                const token = userToken;
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`)
                }
                return headers;
            } catch (error) {
                console.error(error);
            }

        }

    }),
    tagTypes: ['Cart', 'Inventory', 'Profile'],

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
            providesTags: [{
                type: 'Profile', id: 'All'
            }]
        }),

        // Update Retailer Profile 

        updateRetailerProfile: builder.mutation({
            query: (body) => {

                const formdata = new FormData();

                for (const key in body) {
                    formdata.append(key, body[key]);
                }

                return ({
                    url: `/retailer-panel/profile/edit/`,
                    method: 'PATCH',
                    body: formdata
                })
            },
            invalidatesTags: [{
                type: 'Profile', id: 'All'
            }]

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
                    url: "/shopper-panel/cart/add/",
                    method: "POST",
                    body: formData
                })
            },
            invalidatesTags: [
                { type: 'Cart', id: 'All' }
            ]
        }),

        removeFromCart: builder.mutation({
            query: (id) => {

                const formData = new FormData();
                formData.append('inventory_item_id', id)

                return ({
                    url: "/shopper-panel/cart/remove/",
                    method: "DELETE",
                    body: formData
                })
            },
            invalidatesTags: [
                { type: 'Cart', id: 'All' }
            ]
        }),

        viewCart: builder.query({
            query: () => `/shopper-panel/cart/`,
            providesTags: [
                { type: 'Cart', id: 'All' }
            ]
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
            providesTags: [{
                type: 'Inventory', id: 'All'
            }]
        }),

        viewDashboard: builder.query({
            query: () => `/retailer-panel/dashboard/`,
            providesTags: [{
                type: 'Inventory', id: 'All'
            }]
        }),

        createInventoryItem: builder.mutation<TCreateInventoryItemResponse, TCreateInventoryItemRequest>({

            query: (body:any) => {

                const formData = new FormData();
                for (const key in body) {
                    formData.append(key, body[key]);
                }
                return ({
                    url: "/retailer-panel/inventory/add/",
                    method: "POST",
                    body: formData
                })
            },
            invalidatesTags: [
                { type: 'Inventory', id: 'All' }
            ]
        }),

        updateInventoryItem: builder.mutation<TUpdateInventoryItemResponse, TUpdateInventoryItemRequest>({
            query: (body: any) => {

                const formdata = new FormData();

                for (const key in body) {
                    formdata.append(key, body[key]);
                }

                return ({
                    url: `/retailer-panel/inventory/${body.id}/`,
                    method: 'PATCH',
                    body: formdata
                })
            },
            invalidatesTags: [{
                type: 'Inventory', id: 'All'
            }]
        }),

        deleteInventoryItem: builder.mutation<TDeleteInventoryItemResponse, any>({
            query: (item_id) => ({
                url: `/retailer-panel/inventory/${item_id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: [
                { type: 'Inventory', id: 'All' }
            ]
        }),

        listInventoryItems: builder.query<TListInventoryItemsResponse, unknown>({
            query: () => '/inventory/api/list/',
            providesTags: [
                {
                    type: 'Inventory', id: 'All'
                }
            ]
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

    // remove from cart

    useRemoveFromCartMutation,

    // view Cart
    useViewCartQuery,

    // fetch Singlke Product
    useFetchSingleProductQuery,

    //List Inventory Retailer
    useListInventoryQuery,

    // update retailer profile 
    useUpdateRetailerProfileMutation,

} = api
