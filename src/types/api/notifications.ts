type Notification = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
};

export type NotificationsResponse = Notification[];
export type UnreadData = { id: number }[];
