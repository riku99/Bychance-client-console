// GET /recommendationClient
export type GetUserResponse = {
  id: string;
  name: string;
  image?: string | null;
  lat?: number | null;
  lng?: number | null;
  address?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  url?: string | null;
  enablePushNotification?: boolean;
  showedPostModal?: boolean;
  admin?: boolean;
};
