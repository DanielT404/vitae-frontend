export enum EType {
    Image = "image",
    Text = "text"
}
export enum EStatus {
    Active = "active",
    Inactive = "inactive"
}
export interface IFile {
    Id: string,
    Key: string,
    ResourcePath: string,
    Type: EType,
    KeyShrinked: string,
    Extension: string,
    MaterialIcon: string,
    Idx?: number,
    Contents?: string,
    Status?: EStatus,
    IsOnHover?: boolean
}