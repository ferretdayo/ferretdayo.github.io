declare const _default: {
    getPrefectures(): Promise<any>;
    getCities(prefCode: number): Promise<any>;
    getTourismAttractions(prefCode: number, cityCode: string): Promise<any>;
    getAddressFromLatLng(latitude: number, longitude: number): Promise<any>;
    getAddressFromLocation(locationName: string): Promise<any>;
};
export default _default;
