declare const db: {
    query: (text: string, params: any[], callback?: (...args: any[]) => void) => any;
};
export default db;
