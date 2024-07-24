// User Registration

type TRegisterRequest = {
    name: string,
    email: string,
    password: string,
    role: string,
}

type TRegisterResponse = {
    id: number,
    name: string,
    email: string,
    role: string,
}

type TLoginRequest = {
    email: string,
    password: string,
}

type TLoginResponse = {
    token: string
}


type TGetUserProfileResponse = {
    id: number,
    name: string,
    email: string,
    role: string,
}


// Retailers Inventory MGT

type TUploadInventoryRequest = {
    file: unknown
}

type TUploadInventoryResponse = {
    message: string
}

type TCreateInventoryItemRequest = {
    name: string,
    description: string,
    price: number,
    category: string,
    location: string,
    image: unknown
}

type TCreateInventoryItemResponse = {
    message: string,
    item: {
        id: number,
        name: string,
        description: string,
        price: number,
        category: string,
        location: string,
        image: string
    }
}

type TUpdateInventoryItemRequest = {
    item_id: number
    name: string,
    description: string,
    price: number,
    category: string,
    location: string,
    image: unknown
}

type TUpdateInventoryItemResponse = {
    message: string,
    item: {
        id: number,
        name: string,
        description: string,
        price: number,
        category: string,
        location: string,
        image: string
    }
}

type TDeleteInventoryItemRequest = {
    item_id: number
}

type TDeleteInventoryItemResponse = {
    message: string
}

type TListInventoryItemsResponse = {
    items: {
        id: number,
        name: string,
        description: string,
        price: number,
        category: string,
        location: string,
        image: string
    }[]
}

// Shoppers Section

type TItemSearchRequest = {
    query: string
}

type TItemSearchResponse = {
    items: {
        id: number,
        name: string,
        description: string,
        price: number,
        category: string,
        location: string,
        image: string
    }[]
}

type TViewItemRequest = {
    item_id: number
}

type TViewItemResponse = {
    item: {
        id: number,
        name: string,
        description: string,
        price: number,
        category: string,
        location: string,
        image: string
    }
}

type TGetRetailerNotificationsResponse = {
    notifications: 
        {
            id: number,
            message: string,
            item_id: number,
            threshold: number,
            current_stock: number,
        }[]
}



export type {
    TRegisterRequest,
    TRegisterResponse,
    TLoginRequest,
    TLoginResponse,
    TUploadInventoryRequest,
    TUploadInventoryResponse,
    TGetUserProfileResponse,
    TCreateInventoryItemRequest,
    TCreateInventoryItemResponse,
    TUpdateInventoryItemRequest,
    TUpdateInventoryItemResponse,
    TDeleteInventoryItemRequest,
    TDeleteInventoryItemResponse,
    TListInventoryItemsResponse,
    TItemSearchRequest,
    TItemSearchResponse,
    TViewItemRequest,
    TViewItemResponse,
    TGetRetailerNotificationsResponse
}
