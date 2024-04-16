export type TLicense = {
    license_type: string
    libraries: [string]
}

export type TProject = {
    id: number
    project_name: string
    project_domain: string
    last_accessed: string
    license_use: TLicense[]
}

export type TProjectResponse = {
    count: number;
    results: TProject[];
};

export type TLoginResponse = {
    access_token: string;
    refresh_token: string;
}

export type TLoginRequest = {
    email: string;
    password: string;
}