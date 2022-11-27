export type VO<T, U extends string> = T & { [key in U]: never }
