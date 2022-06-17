interface IExternalService {
    service: string
}
interface ITechStack {
    tech: string,
    libraries?: string | string[]
}
export interface IProject {
    id: number,
    name: string,
    description: string | string[],
    github_repo: string,
    tech_stack: ITechStack[],
    external_services?: IExternalService[]
}