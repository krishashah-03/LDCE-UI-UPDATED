import { z } from 'zod';

declare const githubUserSchema: z.ZodObject<{
    login: z.ZodString;
    id: z.ZodNumber;
    node_id: z.ZodString;
    avatar_url: z.ZodString;
    gravatar_id: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    html_url: z.ZodString;
    followers_url: z.ZodString;
    following_url: z.ZodString;
    gists_url: z.ZodString;
    starred_url: z.ZodString;
    subscriptions_url: z.ZodString;
    organizations_url: z.ZodString;
    repos_url: z.ZodString;
    events_url: z.ZodString;
    received_events_url: z.ZodString;
    type: z.ZodString;
    site_admin: z.ZodBoolean;
    name: z.ZodNullable<z.ZodString>;
    company: z.ZodNullable<z.ZodString>;
    blog: z.ZodNullable<z.ZodString>;
    location: z.ZodNullable<z.ZodString>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hireable: z.ZodNullable<z.ZodBoolean>;
    bio: z.ZodNullable<z.ZodString>;
    twitter_username: z.ZodNullable<z.ZodString>;
    public_repos: z.ZodNumber;
    public_gists: z.ZodNumber;
    followers: z.ZodNumber;
    following: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    private_gists: z.ZodOptional<z.ZodNumber>;
    total_private_repos: z.ZodOptional<z.ZodNumber>;
    owned_private_repos: z.ZodOptional<z.ZodNumber>;
    disk_usage: z.ZodOptional<z.ZodNumber>;
    collaborators: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    type: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
    email?: string | null | undefined;
    private_gists?: number | undefined;
    total_private_repos?: number | undefined;
    owned_private_repos?: number | undefined;
    disk_usage?: number | undefined;
    collaborators?: number | undefined;
}, {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    type: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
    email?: string | null | undefined;
    private_gists?: number | undefined;
    total_private_repos?: number | undefined;
    owned_private_repos?: number | undefined;
    disk_usage?: number | undefined;
    collaborators?: number | undefined;
}>;

declare function getGithubProfile(username: string): Promise<{
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    type: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
    email?: string | null | undefined;
    private_gists?: number | undefined;
    total_private_repos?: number | undefined;
    owned_private_repos?: number | undefined;
    disk_usage?: number | undefined;
    collaborators?: number | undefined;
}>;
declare function hello(username: string): Promise<{
    profile: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string | null;
        type: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        site_admin: boolean;
        name: string | null;
        company: string | null;
        blog: string | null;
        location: string | null;
        hireable: boolean | null;
        bio: string | null;
        twitter_username: string | null;
        public_repos: number;
        public_gists: number;
        followers: number;
        following: number;
        created_at: Date;
        updated_at: Date;
        email?: string | null | undefined;
        private_gists?: number | undefined;
        total_private_repos?: number | undefined;
        owned_private_repos?: number | undefined;
        disk_usage?: number | undefined;
        collaborators?: number | undefined;
    };
}>;

export { getGithubProfile, githubUserSchema, hello };
