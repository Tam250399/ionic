
export interface TaiSan {
    id?: number;
    MA?:string;
    TEN?: string;
   GHI_CHU?: string;
    TRANG_THAI_ID?:number;
}
export interface ListTaiSan{
    Data: TaiSan[];
    GuidKiemKe: string;
}