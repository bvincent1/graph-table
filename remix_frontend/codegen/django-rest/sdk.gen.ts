// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { AnswersListData, AnswersListResponse, AnswersCreateData, AnswersCreateResponse, AnswersDestroyData, AnswersDestroyResponse, AnswersRetrieveData, AnswersRetrieveResponse, AnswersPartialUpdateData, AnswersPartialUpdateResponse, AnswersUpdateData, AnswersUpdateResponse, DocumentsListData, DocumentsListResponse, FoldersListData, FoldersListResponse, FoldersCreateData, FoldersCreateResponse, FoldersDestroyData, FoldersDestroyResponse, FoldersRetrieveData, FoldersRetrieveResponse, FoldersPartialUpdateData, FoldersPartialUpdateResponse, FoldersUpdateData, FoldersUpdateResponse, KitsListData, KitsListResponse, KitsCreateData, KitsCreateResponse, KitsDestroyData, KitsDestroyResponse, KitsRetrieveData, KitsRetrieveResponse, KitsPartialUpdateData, KitsPartialUpdateResponse, KitsUpdateData, KitsUpdateResponse, OrganizationsListData, OrganizationsListResponse, OrganizationsCreateData, OrganizationsCreateResponse, OrganizationsDestroyData, OrganizationsDestroyResponse, OrganizationsRetrieveData, OrganizationsRetrieveResponse, OrganizationsPartialUpdateData, OrganizationsPartialUpdateResponse, OrganizationsUpdateData, OrganizationsUpdateResponse, QuestionsListData, QuestionsListResponse, QuestionsCreateData, QuestionsCreateResponse, QuestionsDestroyData, QuestionsDestroyResponse, QuestionsRetrieveData, QuestionsRetrieveResponse, QuestionsPartialUpdateData, QuestionsPartialUpdateResponse, QuestionsUpdateData, QuestionsUpdateResponse, UsersListData, UsersListResponse, UsersCreateData, UsersCreateResponse, UsersDestroyData, UsersDestroyResponse, UsersRetrieveData, UsersRetrieveResponse, UsersPartialUpdateData, UsersPartialUpdateResponse, UsersUpdateData, UsersUpdateResponse, UsersMeRetrieveData, UsersMeRetrieveResponse } from './types.gen';

export const client = createClient(createConfig());

export const answersList = <ThrowOnError extends boolean = false>(options?: Options<AnswersListData, ThrowOnError>) => {
    return (options?.client ?? client).get<AnswersListResponse, unknown, ThrowOnError>({
        url: '/api/v1/answers/',
        ...options
    });
};

export const answersCreate = <ThrowOnError extends boolean = false>(options: Options<AnswersCreateData, ThrowOnError>) => {
    return (options?.client ?? client).post<AnswersCreateResponse, unknown, ThrowOnError>({
        url: '/api/v1/answers/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const answersDestroy = <ThrowOnError extends boolean = false>(options: Options<AnswersDestroyData, ThrowOnError>) => {
    return (options?.client ?? client).delete<AnswersDestroyResponse, unknown, ThrowOnError>({
        url: '/api/v1/answers/{id}/',
        ...options
    });
};

export const answersRetrieve = <ThrowOnError extends boolean = false>(options: Options<AnswersRetrieveData, ThrowOnError>) => {
    return (options?.client ?? client).get<AnswersRetrieveResponse, unknown, ThrowOnError>({
        url: '/api/v1/answers/{id}/',
        ...options
    });
};

export const answersPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<AnswersPartialUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).patch<AnswersPartialUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/answers/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const answersUpdate = <ThrowOnError extends boolean = false>(options: Options<AnswersUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).put<AnswersUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/answers/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const documentsList = <ThrowOnError extends boolean = false>(options?: Options<DocumentsListData, ThrowOnError>) => {
    return (options?.client ?? client).get<DocumentsListResponse, unknown, ThrowOnError>({
        url: '/api/v1/documents/',
        ...options
    });
};

export const foldersList = <ThrowOnError extends boolean = false>(options?: Options<FoldersListData, ThrowOnError>) => {
    return (options?.client ?? client).get<FoldersListResponse, unknown, ThrowOnError>({
        url: '/api/v1/folders/',
        ...options
    });
};

export const foldersCreate = <ThrowOnError extends boolean = false>(options: Options<FoldersCreateData, ThrowOnError>) => {
    return (options?.client ?? client).post<FoldersCreateResponse, unknown, ThrowOnError>({
        url: '/api/v1/folders/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const foldersDestroy = <ThrowOnError extends boolean = false>(options: Options<FoldersDestroyData, ThrowOnError>) => {
    return (options?.client ?? client).delete<FoldersDestroyResponse, unknown, ThrowOnError>({
        url: '/api/v1/folders/{id}/',
        ...options
    });
};

export const foldersRetrieve = <ThrowOnError extends boolean = false>(options: Options<FoldersRetrieveData, ThrowOnError>) => {
    return (options?.client ?? client).get<FoldersRetrieveResponse, unknown, ThrowOnError>({
        url: '/api/v1/folders/{id}/',
        ...options
    });
};

export const foldersPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<FoldersPartialUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).patch<FoldersPartialUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/folders/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const foldersUpdate = <ThrowOnError extends boolean = false>(options: Options<FoldersUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).put<FoldersUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/folders/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const kitsList = <ThrowOnError extends boolean = false>(options?: Options<KitsListData, ThrowOnError>) => {
    return (options?.client ?? client).get<KitsListResponse, unknown, ThrowOnError>({
        url: '/api/v1/kits/',
        ...options
    });
};

export const kitsCreate = <ThrowOnError extends boolean = false>(options: Options<KitsCreateData, ThrowOnError>) => {
    return (options?.client ?? client).post<KitsCreateResponse, unknown, ThrowOnError>({
        url: '/api/v1/kits/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const kitsDestroy = <ThrowOnError extends boolean = false>(options: Options<KitsDestroyData, ThrowOnError>) => {
    return (options?.client ?? client).delete<KitsDestroyResponse, unknown, ThrowOnError>({
        url: '/api/v1/kits/{id}/',
        ...options
    });
};

export const kitsRetrieve = <ThrowOnError extends boolean = false>(options: Options<KitsRetrieveData, ThrowOnError>) => {
    return (options?.client ?? client).get<KitsRetrieveResponse, unknown, ThrowOnError>({
        url: '/api/v1/kits/{id}/',
        ...options
    });
};

export const kitsPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<KitsPartialUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).patch<KitsPartialUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/kits/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const kitsUpdate = <ThrowOnError extends boolean = false>(options: Options<KitsUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).put<KitsUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/kits/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const organizationsList = <ThrowOnError extends boolean = false>(options?: Options<OrganizationsListData, ThrowOnError>) => {
    return (options?.client ?? client).get<OrganizationsListResponse, unknown, ThrowOnError>({
        url: '/api/v1/organizations/',
        ...options
    });
};

export const organizationsCreate = <ThrowOnError extends boolean = false>(options: Options<OrganizationsCreateData, ThrowOnError>) => {
    return (options?.client ?? client).post<OrganizationsCreateResponse, unknown, ThrowOnError>({
        url: '/api/v1/organizations/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const organizationsDestroy = <ThrowOnError extends boolean = false>(options: Options<OrganizationsDestroyData, ThrowOnError>) => {
    return (options?.client ?? client).delete<OrganizationsDestroyResponse, unknown, ThrowOnError>({
        url: '/api/v1/organizations/{id}/',
        ...options
    });
};

export const organizationsRetrieve = <ThrowOnError extends boolean = false>(options: Options<OrganizationsRetrieveData, ThrowOnError>) => {
    return (options?.client ?? client).get<OrganizationsRetrieveResponse, unknown, ThrowOnError>({
        url: '/api/v1/organizations/{id}/',
        ...options
    });
};

export const organizationsPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<OrganizationsPartialUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).patch<OrganizationsPartialUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/organizations/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const organizationsUpdate = <ThrowOnError extends boolean = false>(options: Options<OrganizationsUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).put<OrganizationsUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/organizations/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const questionsList = <ThrowOnError extends boolean = false>(options?: Options<QuestionsListData, ThrowOnError>) => {
    return (options?.client ?? client).get<QuestionsListResponse, unknown, ThrowOnError>({
        url: '/api/v1/questions/',
        ...options
    });
};

export const questionsCreate = <ThrowOnError extends boolean = false>(options?: Options<QuestionsCreateData, ThrowOnError>) => {
    return (options?.client ?? client).post<QuestionsCreateResponse, unknown, ThrowOnError>({
        url: '/api/v1/questions/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const questionsDestroy = <ThrowOnError extends boolean = false>(options: Options<QuestionsDestroyData, ThrowOnError>) => {
    return (options?.client ?? client).delete<QuestionsDestroyResponse, unknown, ThrowOnError>({
        url: '/api/v1/questions/{id}/',
        ...options
    });
};

export const questionsRetrieve = <ThrowOnError extends boolean = false>(options: Options<QuestionsRetrieveData, ThrowOnError>) => {
    return (options?.client ?? client).get<QuestionsRetrieveResponse, unknown, ThrowOnError>({
        url: '/api/v1/questions/{id}/',
        ...options
    });
};

export const questionsPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<QuestionsPartialUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).patch<QuestionsPartialUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/questions/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const questionsUpdate = <ThrowOnError extends boolean = false>(options: Options<QuestionsUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).put<QuestionsUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/questions/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const usersList = <ThrowOnError extends boolean = false>(options?: Options<UsersListData, ThrowOnError>) => {
    return (options?.client ?? client).get<UsersListResponse, unknown, ThrowOnError>({
        url: '/api/v1/users/',
        ...options
    });
};

export const usersCreate = <ThrowOnError extends boolean = false>(options: Options<UsersCreateData, ThrowOnError>) => {
    return (options?.client ?? client).post<UsersCreateResponse, unknown, ThrowOnError>({
        url: '/api/v1/users/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const usersDestroy = <ThrowOnError extends boolean = false>(options: Options<UsersDestroyData, ThrowOnError>) => {
    return (options?.client ?? client).delete<UsersDestroyResponse, unknown, ThrowOnError>({
        url: '/api/v1/users/{id}/',
        ...options
    });
};

export const usersRetrieve = <ThrowOnError extends boolean = false>(options: Options<UsersRetrieveData, ThrowOnError>) => {
    return (options?.client ?? client).get<UsersRetrieveResponse, unknown, ThrowOnError>({
        url: '/api/v1/users/{id}/',
        ...options
    });
};

export const usersPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<UsersPartialUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UsersPartialUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/users/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const usersUpdate = <ThrowOnError extends boolean = false>(options: Options<UsersUpdateData, ThrowOnError>) => {
    return (options?.client ?? client).put<UsersUpdateResponse, unknown, ThrowOnError>({
        url: '/api/v1/users/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const usersMeRetrieve = <ThrowOnError extends boolean = false>(options?: Options<UsersMeRetrieveData, ThrowOnError>) => {
    return (options?.client ?? client).get<UsersMeRetrieveResponse, unknown, ThrowOnError>({
        url: '/api/v1/users/me/',
        ...options
    });
};