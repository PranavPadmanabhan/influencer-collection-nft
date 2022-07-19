export type bubble = {
    height: number | string,
    width: number | string,
    top?: number | string,
    left?: number | string,
    right?: number | string,
    bottom?: number | string,
    className?:string
}

export type carouselCard = {
    url?:string
}

export type nftCard = {
    url:string,
    price:number | string,
    name:string
}

export type navBar = {
    routeName:string,
    route:string

}