// User Registration

type TRegisterRequest = {
    name: string,
    email: string,
    password: string,
    address: string,
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
    access: string,
    refresh: string
}


type TGetUserProfileResponse = {
    id: number,
    name: string,
    email: string,
    role: string,
    phone_number: number | undefined, 
    address: string,
    password: string,
    profile_picture: string,
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
    image: string,
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
        image: string,
        image_url: string
    }
}

type TUpdateInventoryItemRequest = {
    id: number
    name: string,
    description: string,
    price: number,
    category: string,
    location: string,
    image: string,
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
        image: string,
        image_url: string
    }
}

type TDeleteInventoryItemRequest = {
    item_id: number
}

type TDeleteInventoryItemResponse = {
    message: string,
    isSuccess:boolean
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
