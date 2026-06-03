// Category model used by public catalogue filters and admin category forms.
export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
};
