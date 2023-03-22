
import axios, { CreateAxiosDefaults, AxiosInstance } from 'axios';
import path from 'path';

export interface FindUserParams {
  userNameQuery: string;
}

export interface UserData {
  avatar_url: string,
  created_at: string,
  login: string,
  location: string,
  public_repos: number
}

export interface UserRepo {
  id: string,
  url: string,
  created_at: string,
  stargazers_count: number,
  name: string,
  description: string,
  html_url: string
}

export interface ListRepoParams {
  userName: string,
  per_page: number,
  page: number
}

export default class GitHubApi {

  private instance: AxiosInstance;

  constructor(axiosConfig: CreateAxiosDefaults) {

    this.instance = axios.create(axiosConfig)
  }

  public findUser({userNameQuery}: FindUserParams) {
    return this.instance.request<UserData>({
      url: `/users/${userNameQuery}`,
      method: 'GET',
      responseType: 'json'
    })
  }

  public listRepoByUserName({userName, page, per_page}: ListRepoParams) {
    return this.instance.request<UserRepo[]>({
      url: `/users/${userName}/repos`,
      method: 'GET',
      params: {page, per_page},
      responseType: 'json'
    })
  }

  // public listPokemon(params: ListPokemonParams) {
  //   return this.instance.request<ListPokemonResult>({
  //     url: '/pokemon',
  //     params: params,
  //     method: 'GET',
  //     responseType: 'json',
  //   })
  // }

  // public getPokemonByUrl(url: string) {
  //   return this.instance.request<PokemonDataModel>({
  //     url: url,
  //     method: 'GET',
  //     responseType: 'json'
  //   })
  // }

}