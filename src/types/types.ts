// types.ts
export type ObjectId = string; // Define ObjectId as a type alias for string

export const isValidObjectId = (id: string): boolean => {
  const objectIdRegex = /^[a-f\d]{24}$/i; // Regular expression to validate ObjectId format
  return objectIdRegex.test(id);
};
