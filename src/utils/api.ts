// PocketBase instance (placeholder)
export const pb = {
  files: {
    getUrl: (
      _records: unknown,
      filename: string | null,
      _options?: Record<string, unknown>
    ): string => {
      if (!filename) return "";
      return `/api/files/${filename}`;
    },
  },
};
